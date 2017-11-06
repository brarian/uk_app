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
    Add();
});

function Add() {
    $('#notes').click(function() {
        alert('addClicked');
    })
}

function returnJSONData() {
    $.ajax({
        url: '/api/favorites',
        type: 'GET',
        // dataType: 'json',
        contentType: 'application/json',
        success: function(response) {
            var template = response.map(function(article) {
                return ` <div class="card"> <div id="mongoId">${article._id}</div> 
                  <div class="card-title" style="margin-bottom: -0.25rem;"><a target='_blank' href='${article.url}'>${article.title}</a></div>
                  <div class='writer'"> ${article.author} <span class='source'>${article.source}</span></div> 
                  <div class='image'>
                      <a target='_blank' href='${article.url}'>
                          <img class="img-thumbnail" src='${article.urlToImage}' alt="Responsive Image"></img>
                      </a>
                  </div>
                  <div class="card-text">${article.description}</div>
                  <button class="delete"  alt="delete from favorites" > <img src="minus.png" style="width:30px;height:30px;" /> </button>
                  <button class="add"> <img src="plus.png" alt="add to favorites button" style="width:30px;height:30px;" /> </button> 
                  <input type="text" id="note" />
                  <button  class="addNote"> Add </button>
                  <ul id="note-items"></ul>
                  </div>
                  </div>`;
            }).join('');
            $('.faved').append(template);
        },
        error: function(response) {
            console.log('could not delete ', itemToBeRemoved);
        }
    })
}

function handleDeleteFromSaved() {
    $('.faved').on('click', '.delete', function(event) {
        const articleCard = $(event.target).closest('div.card');
        const id = articleCard.attr('id');
        $.ajax({
            url: '/api/favorites/' + id,
            type: 'DELETE',
            contentType: 'application/json',
            success: function(response) {
                articleCard.remove();
            },
        });
    });
};

function addNote() {
    $('.faved').on('click', '.addNote', function(event) {
        const noteCard = $(event.target).closest('div.card');
        const ids = noteCard.attr('#mongoId');
        const noteText = ('<li><span>' + $("#note").val() + '</span> <small><a href="#edit">Edit</a> ; <a href="#delete">Delete</a></small></li>')
        console.log($("#note").val());
        noteCard.append(noteText);
        $("#note").val("");
    });
}

$("#add").click(addNote);

$(document).on("click", 'a[href="#edit"]', function() {
    $(this).closest("li").find("span").prop("contenteditable", true).focus();
    return false;
});

$(document).on("click", 'a[href="#delete"]', function() {
    $(this).closest("li").fadeOut(function() {
        $(this).remove();
    });
    return false;
});