$(document).ready(function() {
    var service_url = 'https://newsapi.org/v1/articles?';
    var params = {
        status: "ok",
        source: "techcrunch",
        sortBy: "latest",
        key: '3abe22b4968b4610833e2fdff4e3e47b'
    }
    $.getJSON(service_url + 'source=' + (params.source) + "&sortBy=" + (params.sortBy) + "&apiKey=" + (params.key), function(response) {
        for (var i = 0; i < response.articles.length; i++) {
            const author = (response.articles[i].author);
            const title = (response.articles[i].title);
            const url = (response.articles[i].url);
            const desc = (response.articles[i].description);
            const date = (response.articles[i].publishedAt);
            const pic = ("<img src=" + response.articles[i].urlToImage + "></img>");
            renderArticles(response, i);
        };

        function generateArticles(response, i) {
            // console.log("I " + i);
            // console.log("res " + response);
            return `${response.articles[i].author}, ${response.articles[i].title}`;
            // console.log(`${author}`);
        };

        function renderArticles(response, i) {
            console.log(generateArticles(response, i));
            const articleGeneration = generateArticles(response, i);
            //insert html into DOM 
            $('.main').html(articleGeneration);
        };

    });





    // var service_url = 'https://newsapi.org/v1/articles?';
    // var params = {
    //     status: "ok",
    //     source: "ars-technica",
    //     sortBy: "top",
    //     key: '3abe22b4968b4610833e2fdff4e3e47b'
    // }
    // $.getJSON(service_url + 'source=' + (params.source) + "&sortBy=" + (params.sortBy) + "&apiKey=" + (params.key), function(response) {
    //     for (var i = 0; i < response.articles.length; i++) {
    //         const author = (response.articles[i].author);
    //         const title = (response.articles[i].title);
    //         const url = (response.articles[i].url);
    //         const desc = (response.articles[i].description);
    //         var pic = ("<img src=" + response.articles[i].urlToImage + "></img>");
    //         $('.section').append(` < div class = "card" >
    //             <div class="text">
    //                 <div class=" name"><a target="_blank" href="${url}">${title}</a></div>
    //                 <div class="writer"> ${author}</div>
    //                 <div class="image"><a target="_blank" href="${url}">${pic}</a></div>
    //                 <div class="desc">${desc}</div>
    //             </div>
    //             <button class="add"> ADD </button> 

    //         </div>
    //         `);
    //     }

    // });

});

//add Engadget technology / en
//Hacker News technology / en
//TechRadar technology / en
//The Next Web technology / en
//The Verge technology / en

// $('.section').append(`<div class="card">
// <div class="text">
//     <div class="name"><a target="_blank" href="${url}">${title}</a></div>
//     <div class="writer"> ${author}</div>
//     <div class="image"><a target="_blank" href="${url}">${pic}</a></div>
//     <div class="desc">${desc}</div>
// </div>
// <button class="add"> ADD </button> 
// </div>
// `);