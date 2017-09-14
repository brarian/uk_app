$(document).ready(function() {
    getLSSavedArticles().then(function(response) {
        console.log(response);
    });
});

function generateLsSavedArticles(articles, articleIndex, template) {
    return `<div class="card" data-item-index="${articleIndex}"> 
    <div class=" name"><a target="_blank" href="${articles.url}">${articles.title}</a></div>
    <div class="writer"> ${articles.author}</div>
    <div class="image">
    <a target="_blank" href="${articles.url}">
    <img src="${articles.urlToImage}"></img></a></div>
    <div class="desc">${articles.description}</div>
    <button class="add"> ADD </button>
    <button class="delete"> delete </button>
</div></div>`
};

function renderSaved() {
    $('.faved').html(articlesList);
}