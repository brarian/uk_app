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
});

function renderSaved(source) {
    const favoritesArray = JSON.parse(localStorage.savedArticlesCollection);
    const foo = favoritesArray.map((articleAndSource, index) => generateArticles(articleAndSource.article, index, articleAndSource.source));
    $('.faved').html(foo);
}

function handleDeleteFromSaved() {
    $('.delete').on('click', function() {
        console.log(storageContainer);
        const storageContainer = localStorage.getItem('savedArticlesCollection');
        const openedContainer = JSON.parse(storageContainer);
        const itemToBeRemoved = getIndexFromElement($(this).parent());
        openedContainer.splice(itemToBeRemoved, 1);
        const newlySplicedArray = JSON.stringify(openedContainer);
        localStorage.setItem('savedArticlesCollection', newlySplicedArray);
        $.ajax({
            url: 'https://localhost:8080/favorites/' + id,
            type: 'DELETE',
            dataType: 'json',
            data: {},
            contentType: 'application/json',
            success: function(response) {
                console.log('deleted this id ', id);
            },
            error: function(response) {
                console.log('could not delete ', itemToBeRemoved);
            }
        });
        // fetch('/favorites/' + _id, {
        //         method: 'delete',
        //         mode: 'CORS',
        //         headers: {
        //             Accept: 'application/JSON',
        //             'Content-Type': 'application/JSON'
        //         },
        //     })
        //     .then(response => response.json());
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
        console.log(Strings);
        $('.haha').append("<li>" + Strings + " </li>");
        saveComment(Strings);
    });
}