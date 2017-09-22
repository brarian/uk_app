$(document).ready(function() {
    getArticles().then(function(response) {
        STORE.articles = response.articles;
        render();
        handleAddArticleToSaved();
    });
});

const STORE = [];

function generateArticles(articles, articleIndex) {
    return `<div class="card" data-item-index="${articleIndex}"> 
    <div class="name"><a target="_blank" href="${articles.url}">${articles.title}</a></div>
    <div class="writer"> ${articles.author}</div>
    <div class="image">
    <a target="_blank" href="${articles.url}">
    <img src="${articles.urlToImage}"></img></a></div>
    <div class="desc">${articles.description}</div>
    <input type="button" class="delete" value = "remove from favorites" onClick="document.location.reload(true)"/>
    <div class="form-box">
    <form class='comment-form'>
    <textarea class='comment-value' rows="3" cols="65">Enter comment</textarea>
    <input type="submit" class="notes-enter comment-btn"  value="Enter">
  </form>
  <div class='haha'> </div>
  </div>
    <button class="add">add to favorites</button>
</div> </div>`;
}

function getArticles() {
    return Promise.resolve(mockNewsfeed);
}

function generateArticlesString(articles) {
    console.log("articles", articles);
    const items = articles.map(generateArticles);
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
        const newArticle = getArticleFromElement($(this).parent());
        saveArticle(newArticle);
        // handleDeleteFromSaved()
    });
};

function getArticleFromElement(element) {
    const index = element.data('item-index');
    const newArticle = STORE.articles[index];
    return newArticle;
}



//add Engadget technology / en
//Hacker News technology / en
//TechRadar technology / en
//The Next Web technology / en
//The Verge technology / en