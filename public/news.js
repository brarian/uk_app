$(document).ready(function() {
    getArticles().then(function(response) {
        STORE.articles = response.articles;
        render();
        handleAddArticleToSaved();
    });
});

const STORE = [];

function generateArticles(articles, articleIndex) {
    return ` <div class="card"  style="max-width: 35rem; top:40px;" data-item-index=${articleIndex}>
    <div class="card-title" style="margin-bottom: -0.25rem;"><a target='_blank' href='${articles.url}'>${articles.title}</a></div>
    <div class='writer'"> ${articles.author}</div> <div class='source'></div>
    <div class='image'>
        <a target='_blank' href='${articles.url}'>
            <img class="img-thumbnail" src='${articles.urlToImage}' alt="Responsive Image"></img>
        </a>
    </div>
    <div class="card-text">${articles.description}</div>
    <input type='button' class='delete' value='remove from favorites' onClick='document.location.reload(true)' />
    <button class="add"> <img src="plus.png" alt="add to favorites button" style="width:30px;height:30px;" /> </button> 
    
</div> </div>`;
}

function getArticles() {
    return Promise.resolve(mockNewsfeed);
}

function generateArticlesString(articles) {
    console.log("articles", articles);
    const items = articles.map(generateArticles);
    return items.join("");
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
        console.log("added to click");
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