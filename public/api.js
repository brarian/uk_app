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
function getData(callbackFn) {
    return Promise.resolve(mockNewsfeed);
}

//displaying favorites Mock Data 
function getandDisplayData() {
    getData(generateArticles);
}

getandDisplayData();


function getMockFavoritesData(callbackFn) {
    return Promise.resolve(mockFavorites);
}

function getandDisplayFavoritesData() {
    getMockFavoritesData(displayFavoritesMockArticles);
}

addnote();

getandDisplayFavoritesData();

function addnote() {
    $('.newnote').on('click', function() {
        alert('clicked on new note button');
    })
}