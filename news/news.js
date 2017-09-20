$(document).ready(function() {

    getArticles().then(function(response) {
        STORE.articles = response.articles;
        render();
    });


});

const STORE = {
    articles: [],
}

// function generateArticles(articles, articleIndex, template) {
//     return `<div class="card" data-item-index=${articleIndex}> 
//     <div class=" name"><a target="_blank" href="${articles.url}">${articles.title}</a></div>
//     <div class="writer"> ${articles.author}</div>
//     <div class="image">
//     <a target="_blank" href="${articles.url}">
//     <img src="${articles.urlToImage}"></img></a></div>
//     <div class="desc">${articles.description}</div>
//     <button class="add article-toggle"> ADD </button>
// </div></div>`;

// }

console.log("STORE.articles  ", STORE);

function renderArticles(articles) {
    const items = articles.map(generateArticles).join();
    $('.section').html(items);
};

function render() {
    renderArticles(STORE.articles);
};

//add Engadget technology / en
//Hacker News technology / en
//TechRadar technology / en
//The Next Web technology / en
//The Verge technology / en