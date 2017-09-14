$(document).ready(function() {
    renderSaved(foo);
});

const foo = generateArticlesString(JSON.parse(localStorage.savedArticlesCollection));

function renderSaved() {
    $('.faved').html(foo);
}