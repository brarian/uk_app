$(document).ready(function() {
    getArticles().then(function(response) {
        STORE.articles = response.articles;
        render();
    });
});

const STORE = {
    articles: [],
}

function generateArticles(articles, articleIndex, template) {
    return `<div class="card" data-item-index=""> 
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
    const items = STORE.articles.map((article, index) => generateArticles(article, index));
    return items.join();
};

function renderArticles() {
    console.log('rendering articles');
    const articlesList = generateArticlesString(STORE);
    $('.section').html(articlesList);
}

function render() {
    renderArticles(STORE.articles);
};

function addArticleToSaved() {
    $('.add').one('click', function() {
        // $(this).append().parent().clone().appendTo('.saved');
        const article = $(this).parent();
        $.ajax({
            method: 'POST',
            url: "/favorites",
            data: { "article": article },
            success: function(result) {
                // incorrect
                if (database = +1) {
                    location.reload();
                }
            }
        });
        deleteFromSaved()
    });
};

function deleteFromSaved() {
    $('.delete').on('click', function() {
        event.preventDefault();
        console.log('delteing article');
        $(this).parent().remove();
    });
};

//add Engadget technology / en
//Hacker News technology / en
//TechRadar technology / en
//The Next Web technology / en
//The Verge technology / en