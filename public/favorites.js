function compose() {
    var funcs = Array.prototype.slice.call(arguments).reverse(); // turn args into (reversed) array
    return function() {
        return funcs.slice(1).reduce(function(res, fn) {
            return fn(res);
        }, funcs[0].apply(undefined, arguments));
    }
}

$(document).ready(function() {
    returnJSONData();
    handleDeleteFromSaved();
    addNote();
});


function returnJSONData() {
    fetch('/api/favorites', {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then((response) => response.json())
        .then(function(response) {
            var template = response.map(function(article) {
                return ` <div class="card container-fluid" id=${article._id} style="max-width: 35rem; top:40px;"> 
                  <div class="card-title" ><a target='_blank' href='${article.url}'>${article.title}</a></div>
                  <div class='writer'"> ${article.author} <span class='source'>${article.source}</span></div> 
                  <div class='image'>
                      <a target='_blank' href='${article.url}'>
                          <img class="img-thumbnail" src='${article.urlToImage}' alt="Responsive Image"></img>
                      </a>
                  </div>
                  <div class="card-text">${article.description}</div>
                  <button class="delete"  alt="delete from favorites" > <img src="minus.png" style="width:30px;height:30px;" /> </button>
                  <button class="add"> <img src="plus.png" alt="add to favorites button" style="width:30px;height:30px;" /> </button> 
                 <div> 
                    <input type="text" style= "width: 406px;" class="note" /> 
                      <button style="width: 56px;"class="addNote"> Add 
                      </button> 
                </div>
                  <ul id="note-items"></ul>
                  </div>
                  </div>`;
            }).join('');
            $('.faved').append(template);
        }).catch(function(error) {
            console.log('could not delete ', error);
        });
}


function handleDeleteFromSaved() {
    $('.faved').on('click', '.delete', function(event) {
        const articleCard = $(event.target).closest('div.card');
        const id = articleCard.attr('id');
        fetch('/api/favorites/' + id, {
            method: 'DELETE',
        }).then(function(response) {
            articleCard.remove();
        });
    });
};

function addNote() {
    $('.faved').on('click', '.addNote', function(event) {
        const articleCard = $(event.target).closest('div.card');
        const id = articleCard.attr('id');
        const noteTextVal = articleCard.find(".note").val();
        const noteText = ('<li>' + noteTextVal + '</li>')
        fetch('/api/favorites/' + id, {
            method: 'PUT',
            body: JSON.stringify({ "note": noteTextVal }),
            headers: {
                "Content-Type": "application/json"
            },
        }).then(function(response) {
            saveComment(noteTextVal);
            articleCard.append(noteText);
            $("#note").val("");
        });
    });
}

function toggle() {
    $(document).one("click", function(event) {
        const articleCard = $(event.target).closest('div.card');
        const id = articleCard.attr('id');

    });
}