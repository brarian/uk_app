function getArticles() {
    var service_url = 'https://newsapi.org/v1/articles?';
    const articlePromise = $.getJSON(service_url + "source=" + "techcrunch" + "&sortBy=" + "latest" + "&apiKey=" + "3abe22b4968b4610833e2fdff4e3e47b");
    const engadgetPromise = $.getJSON(service_url + 'source=' + "engadget" + "&sortBy=" + "latest" + "&apiKey=" + "3abe22b4968b4610833e2fdff4e3e47b");
    const hackerPromise = $.getJSON(service_url + 'source=' + "hacker-news" + "&sortBy=" + "latest" + "&apiKey=" + "3abe22b4968b4610833e2fdff4e3e47b");
    const recodePromise = $.getJSON(service_url + 'source=' + "recode" + "&sortBy=" + "top" + "&apiKey=" + "3abe22b4968b4610833e2fdff4e3e47b");
    const radarPromise = $.getJSON(service_url + 'source=' + "techradar" + "&sortBy=" + "top" + "&apiKey=" + "3abe22b4968b4610833e2fdff4e3e47b");
    const vergePromise = $.getJSON(service_url + 'source=' + "the-verge" + "&sortBy=" + "top" + "&apiKey=" + "3abe22b4968b4610833e2fdff4e3e47b");
    const nextPromise = $.getJSON(service_url + 'source=' + "the-next-web" + "&sortBy=" + "latest" + "&apiKey=" + "3abe22b4968b4610833e2fdff4e3e47b");

    return Promise.resolve([articlePromise, engadgetPromise, hackerPromise, recodePromise, radarPromise, vergePromise, nextPromise]);
};

//display data for newsfeed 
function getData(callbackFn) {
    return Promise.resolve(getArticles);
}

function getandDisplayData() {
    getArticles(getData);
}

getandDisplayData();

function getFavoritesData(callbackFn) {
    return Promise.resolve();
}

// function getandDisplayFavoritesData() {
//     getArticles(getFavoritesData);
// }

// getandDisplayFavoritesData();


// function getSavedArticles() {
//     return Promise.resolve(mockFavorites);
// };