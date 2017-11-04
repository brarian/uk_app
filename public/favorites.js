function compose() {
    var funcs = Array.prototype.slice.call(arguments).reverse(); // turn args into (reversed) array
    return function() {
        return funcs.slice(1).reduce(function(res, fn) {
            return fn(res);
        }, funcs[0].apply(undefined, arguments));
    }
}

$(document).ready(function() {
    renderSaved();
    handleDeleteFromSaved();
    addAComment();
    showID();
});

function renderSaved(source) {
    const favoritesArray = JSON.parse(localStorage.savedArticlesCollection);
    const foo = favoritesArray.map((articleAndSource, index) => generateArticles(articleAndSource.article, index, articleAndSource.source));
    $('.faved').html(foo);
}

function handleDeleteFromSaved() {
    $('.delete').on('click', function() {
        return fetch('http://localhost:8080/favorites/' + article.id, {
            method: 'DELETE'
        }).then(response => {
            return response.json();
        }).catch(error => {
            console.log('request failed', error);
        })
        const storageContainer = localStorage.getItem('savedArticlesCollection');
        const openedContainer = JSON.parse(storageContainer);
        const itemToBeRemoved = getIndexFromElement($(this).parent());
        openedContainer.splice(itemToBeRemoved, 1);
        const newlySplicedArray = JSON.stringify(openedContainer);
        localStorage.setItem('savedArticlesCollection', newlySplicedArray);
        $.ajax({
            url: 'https://localhost:8080/favorites/',
            type: 'DELETE',
            dataType: 'json',
            data: 'ajax=1&delete=' + parent.data("item-id").replace('record-', ''),
            contentType: 'application/json',
            success: function(response) {
                console.log('deleted this id ', id);
            },
            error: function(response) {
                console.log('could not delete ', itemToBeRemoved);
            }
        });
        renderSaved();
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