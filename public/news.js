$(document).ready(function() {
    getArticles().then(function(response) {
        STORE.response = response;
        render();
        handleAddArticleToSaved();
    });
});

const STORE = [];

function generateArticlesString(articles, source) {
    const items = articles.map((article, articleIndex) => generateArticles(article, articleIndex, source));
    return items.join("");
};


function generateArticles(articles, articleIndex, source) {
    return ` <div class="card"  style="max-width: 35rem; top:40px;" data-item-index=${articleIndex} data-item-source=${source} >
    <div class="card-title" style="margin-bottom: -0.25rem;"><a target='_blank' href='${articles.url}'>${articles.title}</a></div>
    <div class='writer'"> ${articles.author} <span class='source'>${source}</span></div> 
    <div class='image'>
        <a target='_blank' href='${articles.url}'>
            <img class="img-thumbnail" src='${articles.urlToImage}' alt="Responsive Image"></img>
        </a>
    </div>
    <div class="card-text">${articles.description}</div>
    <button class="delete" onClick='document.location.reload(true)' alt="delete from favorites" > <img src="minus.png" style="width:30px;height:30px;" /> </button>
    <button class="add"> <img src="plus.png" alt="add to favorites button" style="width:30px;height:30px;" /> </button> 
    <form class='comment-form'>
    <textarea class='comment-value' rows="3" cols="65">Enter comment</textarea>
    <input type="submit" class="notes-enter comment-btn"  value="Enter">
  </form>
    </div>
    </div>`;
}


function renderArticles() {
    const articlesList = STORE.response.map(response => generateArticlesString(response.articles, response.source)).join("");
    $('.section').html(articlesList);
}

function render() {
    renderArticles();
};

function handleAddArticleToSaved() {
    $('.add').one('click', function() {
        const newArticle = getArticleFromElement($(this).parent());
        fetch('/favorites', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newArticle),
        }).then(response => {
            return response.json();
        }).catch(error => {
            console.log('request failed', error)
        })
    });
}


function getArticleFromElement(element) {
    const source = element.data('item-source');
    const index = element.data('item-index');
    const newArticleSource = STORE.response.find((promiseResponse) => promiseResponse.source === source);
    const article = newArticleSource.articles[index];
    const articleAndSource = { source, article };
    return articleAndSource;
}