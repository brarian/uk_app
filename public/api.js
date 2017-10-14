function getArticles() {
    var service_url = 'https://newsapi.org/v1/articles?';
    // const vergeJSON = $.getJSON(service_url + 'source=' + "the-verge" + "&sortBy=" + "top" + "&apiKey=" + "3abe22b4968b4610833e2fdff4e3e47b");
    // const nextJSON = $.getJSON(service_url + 'source=' + "the-next-web" + "&sortBy=" + "latest" + "&apiKey=" + "3abe22b4968b4610833e2fdff4e3e47b");

    const params = {
        "apiKey": "3abe22b4968b4610833e2fdff4e3e47b"
    };

    const queryParams = [Object.assign({ "source": "techcrunch", "sortBy": "latest" }, params),
        Object.assign({ "source": "engadget", "sortBy": "latest" }, params),
        Object.assign({ "source": "hacker-news", "sortBy": "latest" }, params),
        Object.assign({ "source": "recode", "sortBy": "top" }, params),
        Object.assign({ "source": "techradar", "sortBy": "top" }, params)
    ];

    const allQueries = queryParams.map(queryString =>
        fetch('https://newsapi.org/v1/articles?' + encodeData(queryString)).then(response => response.json())
    );

    return Promise.all(allQueries);
};

function encodeData(data) {
    return Object.keys(data).map(function(key) {
        return [key, data[key]].map(encodeURIComponent).join("=");
    }).join("&");
}

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