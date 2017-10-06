const mockNewsfeed = [{
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
}, {
    "sortBy": "latest",
    "source": "techcrunch",
    "status": "ok",
    "articles": [
        { "author": "Ingrid Lunden", "title": "Yahoo now thinks all 3B accounts were impacted by 2013 breach, not 1B as thought", "description": "Internet giant Yahoo's massive 2013 security breach has dealt the company yet another blow. Today Yahoo sent out a notice disclosing that a further..", "url": "https://techcrunch.com/2017/10/03/yahoo-says-all-3b-accounts-were-impacted-by-2013-breach-not-1b-as-thought/", "urlToImage": "https://tctechcrunch2011.files.wordpress.com/2017/01/gettyimages-493360993.jpg", "publishedAt": "2017-10-03T20:54:35Z" }, { "author": "Bryce Durbin, Devin Coldewey", "title": "Dropbox brand update streamlines its logo and takes aim at creatives", "description": "Today Dropbox introduced a new brand design that includes a revamped logo, a plethora of color schemes and a new typeface. The new branding aims to set..", "url": "https://techcrunch.com/2017/10/03/dropbox-brand-update-streamlines-its-logo-and-takes-aim-at-creatives/", "urlToImage": "https://tctechcrunch2011.files.wordpress.com/2017/10/colorlogos.png", "publishedAt": "2017-10-03T20:39:25Z" }, { "author": "Anthony Ha", "title": "Jeffrey Katzenberg is looking to raise $2B for a new video startup", "description": "As tech giants like Apple and Facebook prepare to spend billions of dollars on movies and TV, longtime Hollywood executive Jeffrey Katzenberg is looking to..", "url": "https://techcrunch.com/2017/10/03/jeffrey-katzenberg-new-startup/", "urlToImage": "https://tctechcrunch2011.files.wordpress.com/2017/10/1582495984_5a114e5df8_b.jpg", "publishedAt": "2017-10-03T20:11:58Z" }, { "author": "Darrell Etherington", "title": "Optoma’s NuForce BE Free8 wireless headphones are a smart AirPods alternative", "description": "Optoma has released new fully wireless headphones under its 'NuForce' audio sub brand, the BE Free8 earbuds. These are like Apple's AirPods, requiring no wire..", "url": "https://techcrunch.com/2017/10/03/optomas-nuforce-be-free8-wireless-headphones-are-a-smart-airpods-alternative/", "urlToImage": "https://tctechcrunch2011.files.wordpress.com/2017/10/lifestyle6.jpg", "publishedAt": "2017-10-03T20:11:41Z" }, { "author": "Sarah Buhr", "title": "Former Equifax CEO says breach boiled down to one person not doing their job", "description": "In a continued effort to pass on any responsibility for the largest data breach in history, Equifax's recently departed CEO is blaming it all on a single..", "url": "https://techcrunch.com/2017/10/03/former-equifax-ceo-says-breach-boiled-down-to-one-person-not-doing-their-job/", "urlToImage": "https://tctechcrunch2011.files.wordpress.com/2017/09/rtx3fbvg.jpg", "publishedAt": "2017-10-03T19:24:21Z" }, { "author": "John Mannes", "title": "Judge delays Waymo/Uber trial until December 4th", "description": "Judge William Alsup has ruled that the Waymo v. Uber trial would be delayed until December 4. The trial had been expected to start with jury selection on..", "url": "https://techcrunch.com/2017/10/03/judge-delays-waymouber-trial-until-december-4th/", "urlToImage": "https://tctechcrunch2011.files.wordpress.com/2017/04/uber-vs-waymo.png", "publishedAt": "2017-10-03T19:16:50Z" }, { "author": "John Biggs", "title": "The Netgear ReadyNAS 524X is a data hoarder’s delight", "description": "As a member of the Data Generation, I've found that my photos, videos, and documents quickly expand to fill their containers. A standard USB drive is quickly..", "url": "https://techcrunch.com/2017/10/03/the-netgear-readynas-524x-is-a-data-hoarders-delight/", "urlToImage": "https://tctechcrunch2011.files.wordpress.com/2017/10/img_3731.png", "publishedAt": "2017-10-03T19:14:33Z" }, { "author": "Natasha Lomas, Jordan Crook", "title": "Amazon has acquired 3D body model startup, Body Labs, for $50M-$70M", "description": "TechCrunch has learned that Amazon has acquired Body Labs, a company with a stated aim of creating true-to-life 3D body models to support various b2b software..", "url": "https://techcrunch.com/2017/10/03/amazon-has-acquired-3d-body-model-startup-body-labs-for-50m-70m/", "urlToImage": "https://tctechcrunch2011.files.wordpress.com/2017/10/screen-shot-2017-10-03-at-7-01-33-pm.png", "publishedAt": "2017-10-03T18:54:10Z" }, { "author": "Ingrid Lunden", "title": "Elements, Stripe’s new check-out toolkit, aims to boost e-commerce sales completions", "description": "Stripe, the payments startup is now valued at $9 billion, is today taking the wraps off its latest effort to help its customers -- which now number in the..", "url": "https://techcrunch.com/2017/10/03/elements-stripes-new-check-out-toolkit-aims-to-boost-e-commerce-sales-completions/", "urlToImage": "https://tctechcrunch2011.files.wordpress.com/2017/10/elements-sample-images.png", "publishedAt": "2017-10-03T18:09:13Z" }, { "author": "Josh Constine", "title": "Instagram Stories mimics Polly with new polls", "description": "Polly blew up with teens last month by tacking multiple-choice polling onto Snapchat. Instagram is following suit with its own polling feature within Stories...", "url": "https://techcrunch.com/2017/10/03/instagram-stories-mimic-polly-with-new-polls/", "urlToImage": "https://tctechcrunch2011.files.wordpress.com/2017/10/img_2080.jpg", "publishedAt": "2017-10-03T18:08:06Z" }
    ]


}]

const mockFavorites = [{
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
        }
    ]
}];

function getArticles() {

    //needs to be an array of all news source promises
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