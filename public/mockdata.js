const mockNewsfeed = {
    "articles": [{
            author: "Sarah Buhr",
            description: "Twitter is making some minor changes to its terms of service (ToS) for users outside of the U.S. this October and a lot of people are rather upset about..",
            publishedAt: "2017-09-02T18:47:15Z",
            title: "Twitter’s terms of service are making people mad — but they’re not new",
            url: "https://techcrunch.com/2017/09/02/twitters-terms-of-service-are-suddenly-making-people-freak-out-but-theyre-not-new/",
            urlToImage: "https://tctechcrunch2011.files.wordpress.com/2017/05/gettyimages-471561053.jpg",
        },
        {
            author: "Megan Rose Dickey",
            description: "Next week, GrubHub will face two of its former drivers in court, which could set a precedent for future cases around the 1099, gig economy. The trial, which..",
            publishedAt: "2017-09-02T18:13:22Z",
            title: "GrubHub trial could have major implications for the gig economy",
            url: "https://techcrunch.com/2017/09/02/grubhub-trial-could-have-major-implications-for-the-gig-economy/",
            urlToImage: "https://tctechcrunch2011.files.wordpress.com/2017/09/gettyimages-634145872.jpg",
        },
        {
            author: "Brian Heater",
            description: "The September time frame positions the Berlin show perfectly as a launch pad for holiday products. As such, some of tech’s biggest names use it to debut..",
            publishedAt: "2017-09-02T17:00:45Z",
            title: "IFA 2017’s biggest announcements",
            url: "https://techcrunch.com/gallery/ifa-2017s-biggest-announcements/",
            urlToImage: "https://tctechcrunch2011.files.wordpress.com/2017/09/gettyimages-841564132.jpg?w=764&h=400&crop=1"
        },
        {
            author: "Steve Gillmor",
            description: "The Gillmor Gang — Denis Pombriant, Keith Teare, John Taschek, Frank Radice, and Steve Gillmor. Recorded live Thursday, August 31, 2017. G3: Exit..",
            publishedAt: "2017-09-02T17:00:38Z",
            title: "Gillmor Gang: Summer School",
            url: "https://techcrunch.com/2017/09/02/gillmor-gang-summer-school/",
            urlToImage: "https://tctechcrunch2011.files.wordpress.com/2014/02/gg-test-pattern-sepia3.jpg"
        },
        {
            author: "Joanna Glasner",
            description: "The connected life is not necessarily the good life. Too often, it seems like we are squandering our time checking devices, losing touch with fellow humans..",
            publishedAt: "2017-09-02T17:00:06Z",
            title: "Funding your bliss: mindfulness startups scale up",
            url: "https://techcrunch.com/2017/09/02/funding-your-bliss-mindfulness-startups-scale-up/",
            urlToImage: "https://tctechcrunch2011.files.wordpress.com/2017/09/istock-639794882-1024x683.jpg"
        },
        {
            author: "Sarah Buhr",
            description: "Record-setting astronaut Peggy Whitson is coming back from space as the cumulative record holder for longest time spent floating up among the stars and you..",
            publishedAt: "2017-09-02T20:45:50Z",
            title: "Watch astronaut Peggy Whitson return to Earth after 288 days in space",
            url: "https://techcrunch.com/2017/09/02/watch-astronaut-peggy-whitson-return-to-earth-after-288-days-in-space/",
            urlToImage: "https://tctechcrunch2011.files.wordpress.com/2017/09/gettyimages-617940772.jpg"
        },
        {
            author: "Leslie Hitchcock",
            description: "Alright, European TechCrunch fans, time to listen up — we’ll soon be releasing our final batch of Disrupt Berlin 2017 tickets at the deeply discounted..",
            publishedAt: "2017-09-02T08:00:52Z",
            title: "Final 2-for-1 Disrupt Berlin ticket release happening Wednesday 9/6",
            url: "https://techcrunch.com/2017/09/02/final-2-for-1-disrupt-berlin-ticket-release-happening-wednesday-96/",
            urlToImage: "https://tctechcrunch2011.files.wordpress.com/2017/06/berlin-wall-graffiti.jpg"
        },
        {
            author: "Matt Miesnieks",
            description: "AR is seductive. The more you think about it, the bigger you realize it is going to be, and the more great ideas you have that are completely new. The problem..",
            publishedAt: "2017-09-02T16:00:09Z",
            title: "The product design challenges of AR on smartphones",
            url: "https://techcrunch.com/2017/09/02/the-product-design-challenges-of-ar-on-smartphones/",
            urlToImage: "https://tctechcrunch2011.files.wordpress.com/2017/09/gettyimages-518338307.jpg"
        }
    ]
};

const mockFavorites = {
    "articles": [{
            author: "Sarah Buhr",
            description: "Twitter is making some minor changes to its terms of service (ToS) for users outside of the U.S. this October and a lot of people are rather upset about..",
            publishedAt: "2017-09-02T18:47:15Z",
            title: "Twitter’s terms of service are making people mad — but they’re not new",
            url: "https://techcrunch.com/2017/09/02/twitters-terms-of-service-are-suddenly-making-people-freak-out-but-theyre-not-new/",
            urlToImage: "https://tctechcrunch2011.files.wordpress.com/2017/05/gettyimages-471561053.jpg"
        }
        // {
        //     author: "Megan Rose Dickey",
        //     description: "Next week, GrubHub will face two of its former drivers in court, which could set a precedent for future cases around the 1099, gig economy. The trial, which..",
        //     publishedAt: "2017-09-02T18:13:22Z",
        //     title: "GrubHub trial could have major implications for the gig economy",
        //     url: "https://techcrunch.com/2017/09/02/grubhub-trial-could-have-major-implications-for-the-gig-economy/",
        //     urlToImage: "https://tctechcrunch2011.files.wordpress.com/2017/09/gettyimages-634145872.jpg"
        // },
        // {
        //     author: "Brian Heater",
        //     description: "The September time frame positions the Berlin show perfectly as a launch pad for holiday products. As such, some of tech’s biggest names use it to debut..",
        //     publishedAt: "2017-09-02T17:00:45Z",
        //     title: "IFA 2017’s biggest announcements",
        //     url: "https://techcrunch.com/gallery/ifa-2017s-biggest-announcements/",
        //     urlToImage: "https://tctechcrunch2011.files.wordpress.com/2017/09/gettyimages-841564132.jpg?w=764&h=400&crop=1"
        // }
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