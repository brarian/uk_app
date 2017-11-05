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
    addAComment();
});

// function renderSaved(source) {
//     const favoritesArray = JSON.parse(localStorage.savedArticlesCollection);
//     const foo = favoritesArray.map((articleAndSource, index) => generateArticles(articleAndSource.article, index, articleAndSource.source));
//     $('.faved').html(foo);
// }

function returnJSONData() {
    $.ajax({
        url: '/api/favorites',
        type: 'GET',
        // dataType: 'json',
        contentType: 'application/json',
        success: function(response) {
            var template = response.map(function(article) {
                return ` <div class="card" id="${article._id}">
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
                  <form class='comment-form'>
                  <textarea class='comment-value' rows="3" cols="65">Enter comment</textarea>
                  <input type="submit" class="notes-enter comment-btn"  value="Enter">
                </form>
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
        console.log(id);
        $.ajax({
            url: '/api/favorites/' + id,
            type: 'DELETE',
            contentType: 'application/json',
            success: function(response) {
                articleCard.remove();
            },
        });
        // const storageContainer = localStorage.getItem('savedArticlesCollection');
        // const openedContainer = JSON.parse(storageContainer);
        // const itemToBeRemoved = getIndexFromElement($(this).parent());
        // openedContainer.splice(itemToBeRemoved, 1);
        // const newlySplicedArray = JSON.stringify(openedContainer);
        // localStorage.setItem('savedArticlesCollection', newlySplicedArray);
        // renderSaved();
    });
};

function getIndexFromElement(element) {
    const index = element.data('item-index');
    return index;
}

function addAComment() {
    $('.comment-form').submit(function(event) {
        event.preventDefault();
        const Strings = $('.comment-value').val();
        saveComment(Strings);
        $('.haha').append("<li>" + Strings + " </li>");
    });
}