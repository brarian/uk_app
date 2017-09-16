function compose() {
    var funcs = Array.prototype.slice.call(arguments).reverse(); // turn args into (reversed) array
    return function() {
        return funcs.slice(1).reduce(function(res, fn) {
            return fn(res);
        }, funcs[0].apply(undefined, arguments));
    }
}

$(document).ready(function() {
    renderSaved(foo);
    handleDeleteFromSaved();
});

const foo = generateArticlesString(JSON.parse(localStorage.savedArticlesCollection));
// const foo = compose(generateArticlesString, JSON.parse);

function renderSaved() {
    $('.faved').html(foo);
    console.log("fooo ", foo)
}

function handleDeleteFromSaved() {
    $('.delete').on('click', function() {
        event.preventDefault();
        console.log('deleting article');
    });
};