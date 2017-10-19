$(document).ready(function() {
    getArticles().then(function(response) {
        STORE.response = response;
        console.log(STORE.response);
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
    // console.log(articles.url);
    // console.log(articleIndex);
    // console.log(source);
    return ` <div class="card"  style="max-width: 35rem; top:40px;" data-item-index=${articleIndex} data-item-source=${source} >
    <div class="card-title" style="margin-bottom: -0.25rem;"><a target='_blank' href='${articles.url}'>${articles.title}</a></div>
    <div class='writer'"> ${articles.author} <span class='source'>${source}</span></div> 
    <div class='image'>
        <a target='_blank' href='${articles.url}'>
            <img class="img-thumbnail" src='${articles.urlToImage}' alt="Responsive Image"></img>
        </a>
    </div>
    <div class="card-text">${articles.description}</div>
    <button class="delete" onClick='document.location.reload(true)' alt="delete from favorites" > <img src="minus.png" style="width:30px;height:30px;"  /> </button>
    <button class="add"> <img src="plus.png" alt="add to favorites button" style="width:30px;height:30px;" /> </button> 
    <div class='haha'> </div>
    <div class="form-box">
    <form class='comment-form'>
        <textarea class='comment-value' rows="3" cols="45" placeholder="Add a note"></textarea>
        <input type="submit" class="notes-enter comment-btn"  value="Enter">
    </form>
    </div>
    </div>`;
}


function renderArticles() {
    console.log('rendering articles');
    const articlesList = STORE.response.map(response => generateArticlesString(response.articles, response.source)).join("");
    $('.section').html(articlesList);
}

function render() {
    renderArticles();
};

function handleAddArticleToSaved() {
    $('.add').one('click', function() {
        const newArticle = getArticleFromElement($(this).parent());
        fetch('http://localhost:8080/favorites', {
            method: 'post',
            headers: {
                'content-type': 'Content-Type:application/json; charset=UTF-8'
            },

            body: JSON.stringify(newArticle.article),
        }).then(response => {
            saveArticle(newArticle);
            return response.json();
        }).catch(error => {
            console.log('request failed', error)
        })
    });


    // fetch('', {
    //     method: 'post',
    //     headers: {
    //         'content-type': 'application/json'
    //     },
    //     body: JSON.stringify(newArticle),
    // }).then(response => {
    //     return response.json();
    // }).catch(error => {
    //     console.log('request failed', error)
    // })
    // });
};

function getArticleFromElement(element) {
    const source = element.data('item-source');
    const index = element.data('item-index');
    const newArticleSource = STORE.response.find((promiseResponse) => promiseResponse.source === source);
    const article = newArticleSource.articles[index];
    const articleAndSource = { source, article };
    return articleAndSource;
}