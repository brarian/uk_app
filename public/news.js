$(document).ready(function() {
    var service_url = 'https://newsapi.org/v1/articles?';
    var params = {
        status: "ok",
        source: "techcrunch",
        sortBy: "latest",
        key: '3abe22b4968b4610833e2fdff4e3e47b'
    }
    $.getJSON(service_url + 'source=' + (params.source) + "&sortBy=" + (params.sortBy) + "&apiKey=" + (params.key), function(response) {
        for (var i = 0; i < response.articles.length; i++) {
            response.articles[i].faved = false;
            response.articles[i].deleted = false;
        }
        STORE.articles = response.articles;
        render();
        addArticleToSaved();
    });
});

const STORE = {
    articles: [],
}

function generateArticles(articles, articleIndex, template) {
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