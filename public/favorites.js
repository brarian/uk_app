$(document).ready(function() {
    getLSSavedArticles().then(function(response) {
        console.log(localStorage);
        const foo = generateArticlesString(JSON.parse(localStorage.savedArticlesCollection));
        console.log(foo);
        renderSaved();
    });
});

function generateLsSavedArticles(article, articleIndex, template) {
    for (var i = 0; i < localStorage.length; i++) {
        return `<div> ${article} </div>`;
    }
}

function renderSaved() {
    $('.faved').html(articlesList);
}