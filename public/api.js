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

//display data for newsfeed 
function getData(callbackFn) {
    return Promise.resolve(mockNewsfeed);
}

function getandDisplayData() {
    getArticles(getData);
}

getandDisplayData();


function getFavoritesData(callbackFn) {
    return Promise.resolve(mockFavorites);
}

function getandDisplayFavoritesData() {
    displayFavoriteArticles(getFavoritesData);
}

getandDisplayFavoritesData();

function addnote() {
    $('.newnote').on('click', function() {
        alert('clicked on new note button');
    })
}

addnote();