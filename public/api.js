function getArticles() {
    var service_url = 'https://newsapi.org/v1/articles?';
    var params = {
        status: "ok",
        source: "techcrunch",
        sortBy: "latest",
        key: '3abe22b4968b4610833e2fdff4e3e47b'
    }
    const articlePromise = $.getJSON(service_url + 'source=' + (params.source) + "&sortBy=" + (params.sortBy) + "&apiKey=" + (params.key));
    return Promise.resolve(articlePromise);
};

//display mock data for newsfeed 
function getMockData(callbackFn) {
    setTimeout(function() {
        callbackFn(mockNewsfeed)
    }, 100);
}

function displayMockArticles(data) {
    for (index in data.articles) {
        $('.saved').append(`<div class="card" data-item-index=""> 
    <div class=" name"><a target="_blank" href="${data.articles[index].url}">${data.articles[index].title}</a></div>
    <div class="writer"> ${data.articles[index].author}</div>
    <div class="image">
    <a target="_blank" href="${data.articles[index].url}">
    <img src="${data.articles[index].urlToImage}"></img></a></div>
    <div class="desc">${data.articles[index].description}</div>
    <button class="add"> ADD </button>
    <button class="delete"> delete </button>
</div></div>`);
    }
}

//displaying favorites Mock Data 
function getandDisplayData() {
    getMockData(displayMockArticles);
}

function getMockFavoritesData(callbackFn) {
    setTimeout(function() {
        callbackFn(mockFavorites)
    }, 100);
}

function displayFavoritesMockArticles(data) {
    for (index in data.articles) {
        $('.faved').append(`<div class="card" data-item-index=""> 
    <div class=" name"><a target="_blank" href="${data.articles[index].url}">${data.articles[index].title}</a></div>
    <div class="writer"> ${data.articles[index].author}</div>
    <div class="image">
    <a target="_blank" href="${data.articles[index].url}">
    <img src="${data.articles[index].urlToImage}"></img></a></div>
    <div class="desc">${data.articles[index].description}</div>
    <button class="delete"> DELETE </button>
    <button class = "newnote"> 
    `);
    }
}

function getandDisplayFavoritesData() {
    getMockFavoritesData(displayFavoritesMockArticles);
}

addnote();
getandDisplayData();

getandDisplayFavoritesData();

function addnote() {
    $('.newnote').on('click', function() {
        alert('clicked on new note button');
    })
}