function getArticles() {
    var service_url = 'https://newsapi.org/v1/articles?';
    const articleJSON = $.getJSON(service_url + "source=" + "techcrunch" + "&sortBy=" + "latest" + "&apiKey=" + "3abe22b4968b4610833e2fdff4e3e47b");
    const engadgetJSON = $.getJSON(service_url + 'source=' + "engadget" + "&sortBy=" + "latest" + "&apiKey=" + "3abe22b4968b4610833e2fdff4e3e47b");
    const hackerJSON = $.getJSON(service_url + 'source=' + "hacker-news" + "&sortBy=" + "latest" + "&apiKey=" + "3abe22b4968b4610833e2fdff4e3e47b");
    const recodeJSON = $.getJSON(service_url + 'source=' + "recode" + "&sortBy=" + "top" + "&apiKey=" + "3abe22b4968b4610833e2fdff4e3e47b");
    const radarJSON = $.getJSON(service_url + 'source=' + "techradar" + "&sortBy=" + "top" + "&apiKey=" + "3abe22b4968b4610833e2fdff4e3e47b");
    const vergeJSON = $.getJSON(service_url + 'source=' + "the-verge" + "&sortBy=" + "top" + "&apiKey=" + "3abe22b4968b4610833e2fdff4e3e47b");
    const nextJSON = $.getJSON(service_url + 'source=' + "the-next-web" + "&sortBy=" + "latest" + "&apiKey=" + "3abe22b4968b4610833e2fdff4e3e47b");

    // return Promise.resolve(articlePromise);
    const articlePromise = Promise.resolve(articleJSON);
    const engadgetPromise = Promise.resolve(engadgetJSON);
    const hackerPromise = Promise.resolve(hackerJSON);
    const recodePromise = Promise.resolve(recodeJSON);
    const radarPromise = Promise.resolve(radarJSON);
    const vergePromise = Promise.resolve(vergeJSON);
    const nextPromise = Promise.resolve(nextJSON);
    return Promise.all([articlePromise, engadgetPromise, hackerPromise, recodePromise, radarPromise, vergePromise, nextPromise]);
};



function getFavoritesData(callbackFn) {
    return Promise.resolve(newArticle);
}


function saveArticle(newArticle) {
    // Retrieve the object from storage
    const retrievedArticles = JSON.parse(localStorage.getItem('savedArticlesCollection')) || [];
    retrievedArticles.push(newArticle);
    localStorage.setItem('savedArticlesCollection', JSON.stringify(retrievedArticles));
    return Promise.resolve(retrievedArticles);
}

function saveComment(String) {
    const retrievedComments = JSON.parse(localStorage.getItem('savedCommentCollection')) || [];
    retrievedComments.push(String);
    localStorage.setItem('savedCommentCollection', JSON.stringify(retrievedComments));
    return Promise.resolve(retrievedComments);
}