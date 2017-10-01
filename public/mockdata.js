const mockNewsfeed = {
    "status": "ok",
    "source": "abc-news-au",
    "sortBy": "top",
    "articles": [{
            "author": "http://www.abc.net.au/news/stephen-long/167162",
            "title": "Adani's track record in India 'leaves a lot to be desired', ex-minister says",
            "description": "India's former environment minister says the Adani Group's track record in India leaves a lot to be desired.",
            "url": "http://www.abc.net.au/news/2017-10-02/former-minister-sounds-alarm-on-adanis-track-record-in-india/9005596",
            "urlToImage": "http://www.abc.net.au/news/image/9005676-1x1-700x700.jpg",
            "publishedAt": "2017-10-01T19:02:40Z"
        },
        {
            "author": null,
            "title": "Spain defends Catalonian independence crackdown as hundreds injured",
            "description": "The Catalonian independence referendum is a path that leads to nowhere, Prime Minister Mariano Rajoy says.",
            "url": "http://www.abc.net.au/news/2017-10-02/spain-pm-slams-catalonia-independence-vote-as-hundreds-injured/9006442",
            "urlToImage": "http://www.abc.net.au/news/image/9006458-1x1-700x700.jpg",
            "publishedAt": "2017-10-01T20:03:06Z"
        },
        {
            "author": "http://www.abc.net.au/news/dean-bilton/5349478",
            "title": "Melbourne masterclass delivers Storm grand final victory over Cowboys",
            "description": "The Melbourne Storm win their third premiership with a stellar grand final performance against the North Queensland Cowboys.",
            "url": "http://www.abc.net.au/news/2017-10-01/melbourne-masterclass-storm-grand-final-win-cowboys/9005794",
            "urlToImage": "http://www.abc.net.au/news/image/9005954-1x1-700x700.jpg",
            "publishedAt": "2017-10-01T12:43:19Z"
        },
        {
            "author": "http://www.abc.net.au/news/jon-healy/5373690",
            "title": "Big Three deliver a perfect last hurrah in Storm's triumph",
            "description": "There aren't many times in professional sport where it's safe to say never, but we will never see a combination like Billy Slater, Cooper Cronk and Cameron Smith again.",
            "url": "http://www.abc.net.au/news/2017-10-01/melbourne-storm-big-three-deliver-one-more-trademark-moment/9005986",
            "urlToImage": "http://www.abc.net.au/news/image/9006024-1x1-700x700.jpg",
            "publishedAt": "2017-10-01T12:43:19Z"
        },
        {
            "author": null,
            "title": "Macklemore declares 'equality for all' at NRL grand final",
            "description": "US rapper Macklemore ends his controversial performance of pro-same-sex marriage song Same Love by saying equality for all, as rainbow-coloured fireworks explode behind him.",
            "url": "http://www.abc.net.au/news/2017-10-01/macklemore-performs-same-love-at-nrl-grand-final/9005752",
            "urlToImage": "http://www.abc.net.au/news/image/9005776-1x1-700x700.jpg",
            "publishedAt": "2017-10-01T11:29:35Z"
        },
        {
            "author": null,
            "title": "'Save your energy Rex': Trump tells Tillerson he is 'wasting his time' with North Korea",
            "description": "Donald Trump says he has told his top diplomat not to waste his time trying to negotiate with Kim Jong-un.",
            "url": "http://www.abc.net.au/news/2017-10-02/trump-says-negotiating-with-north-korea-is-a-waste-of-time/9006146",
            "urlToImage": "http://www.abc.net.au/news/image/8368854-1x1-700x700.jpg",
            "publishedAt": "2017-10-01T20:03:06Z"
        },
        {
            "author": null,
            "title": "Two passers-by killed in knife attack at Marseille train station",
            "description": "Two women are stabbed to death in an attack at Marseille's main train station in southern France, the country's Interior Ministry says.",
            "url": "http://www.abc.net.au/news/2017-10-02/knife-attack-at-marseille-train-station-assailant-shot/9006040",
            "urlToImage": "http://www.abc.net.au/news/image/9006044-1x1-700x700.jpg",
            "publishedAt": "2017-10-01T19:56:09Z"
        },
        {
            "author": "http://www.abc.net.au/news/vanessa-gorman/4974190",
            "title": "Former Miss World's call to the wild",
            "description": "Belinda Green, Miss World 1972, found new meaning in life when she met veterinary surgeon Dr Howard Ralph, a man with an extraordinary devotion to saving native animals.",
            "url": "http://www.abc.net.au/news/2017-10-02/belinda-greens-call-to-the-wild-as-career/8989406",
            "urlToImage": "http://www.abc.net.au/news/image/9002490-1x1-700x700.jpg",
            "publishedAt": "2017-10-01T19:13:07Z"
        },
        {
            "author": null,
            "title": "Five injured in Canada 'terror' incidents",
            "description": "One person is in custody after an Edmonton police officer was stabbed out outside a football game and four pedestrians were injured by a fleeing truck in the Western city of Edmonton",
            "url": "http://www.abc.net.au/news/2017-10-01/canada-five-injured-in-edmonton-terror-incident/9005958",
            "urlToImage": "http://www.abc.net.au/news/image/9005984-1x1-700x700.jpg",
            "publishedAt": "2017-10-01T12:31:25Z"
        },
        {
            "author": null,
            "title": "India v Australia: Scores and stats from the fifth ODI in Nagpur",
            "description": "Can Australia reduce the series arrears and take out the final ODI against India in Nagpur? Follow all the scores, stats and commentary in our cricket ScoreCentre.",
            "url": "http://www.abc.net.au/news/2017-10-01/india-v-australia-fifth-odi-live-scorecentre/8949656",
            "urlToImage": "http://www.abc.net.au/news/image/8999024-1x1-700x700.jpg",
            "publishedAt": "2017-10-01T14:29:01Z"
        }
    ]
};


function getArticles() {
    return Promise.resolve(mockNewsfeed);
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

// function saveComment(text) {
//     var retrievedComment = JSON.parse(localStorage.getItem('commentsSection')) || [];
//     commentsSection.push(text);
//     localStorage.setItem('commentsSection'.JSON.stringify(retrievedComment));
//     return Promise.resolve(retrievedComment);
// }