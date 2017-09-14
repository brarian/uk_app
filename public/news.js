$(document).ready(function() {
    getArticles().then(function(response) {
        console.log(response);
        STORE.articles = response.articles;
        console.log(STORE);
        render();
        handleAddArticleToSaved();
    });
});

const STORE = [];

function generateArticles(articles, articleIndex) {
    return `<div class="card" data-item-index="${articleIndex}"> 
    <div class=" name"><a target="_blank" href="${articles.url}">${articles.title}</a></div>
    <div class="writer"> ${articles.author}</div>
    <div class="image">
    <a target="_blank" href="${articles.url}">
    <img src="${articles.urlToImage}"></img></a></div>
    <div class="desc">${articles.description}</div>
    <button class="add"> ADD </button>
    <button class="delete"> delete </button>
</div></div>`;
}

function generateArticlesString(articles) {
    const items = articles.map((article, index) => generateArticles(article, index));
    return items.join();
};

function renderArticles() {
    console.log('rendering articles');
    const articlesList = generateArticlesString(STORE.articles);
    $('.section').html(articlesList);
}

function render() {
    renderArticles();
};

function handleAddArticleToSaved() {
    $('.add').one('click', function() {
        const index = $(this).parent().data('item-index');
        console.log(index);
        const newArticle = STORE.articles[index];
        // put item in local storage
        localStorage.setItem('article', JSON.stringify(newArticle));
        // Retrieve the object from storage
        var retrievedArticle = localStorage.getItem('article');
        console.log('article', JSON.parse(retrievedArticle));
        saveArticle(newArticle);
        handleDeleteFromSaved()
    });
};


function handleDeleteFromSaved() {
    $('.delete').on('click', function() {
        event.preventDefault();
        console.log('deleting article');
        $(this).parent().remove();
    });
};

//add Engadget technology / en
//Hacker News technology / en
//TechRadar technology / en
//The Next Web technology / en
//The Verge technology / en