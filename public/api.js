function getArticles() {
    var service_url = 'https://newsapi.org/v1/articles?';
    const articleJSON = $.getJSON(service_url + "source=" + "techcrunch" + "&sortBy=" + "latest" + "&apiKey=" + "3abe22b4968b4610833e2fdff4e3e47b");
    const engadgetJSON = $.getJSON(service_url + 'source=' + "engadget" + "&sortBy=" + "latest" + "&apiKey=" + "3abe22b4968b4610833e2fdff4e3e47b");
    // const hackerPromise = $.getJSON(service_url + 'source=' + "hacker-news" + "&sortBy=" + "latest" + "&apiKey=" + "3abe22b4968b4610833e2fdff4e3e47b");
    // const recodePromise = $.getJSON(service_url + 'source=' + "recode" + "&sortBy=" + "top" + "&apiKey=" + "3abe22b4968b4610833e2fdff4e3e47b");
    // const radarPromise = $.getJSON(service_url + 'source=' + "techradar" + "&sortBy=" + "top" + "&apiKey=" + "3abe22b4968b4610833e2fdff4e3e47b");
    // const vergePromise = $.getJSON(service_url + 'source=' + "the-verge" + "&sortBy=" + "top" + "&apiKey=" + "3abe22b4968b4610833e2fdff4e3e47b");
    // const nextPromise = $.getJSON(service_url + 'source=' + "the-next-web" + "&sortBy=" + "latest" + "&apiKey=" + "3abe22b4968b4610833e2fdff4e3e47b");

    // return Promise.resolve(articlePromise);
    const articlePromise = Promise.resolve(articleJSON);
    const engadgetPromise = Promise.resolve(engadgetJSON);
    return Promise.all([articlePromise, engadgetPromise]);
};



function getFavoritesData(callbackFn) {
    return Promise.resolve(mockFavorites);
}