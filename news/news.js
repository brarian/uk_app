$(document).ready(function() {
    var service_url = 'https://newsapi.org/v1/articles?';
    var params = {
        status: "ok",
        source: "techcrunch",
        sortBy: "latest",
        key: '3abe22b4968b4610833e2fdff4e3e47b'
    }
    $.getJSON(service_url + 'source=' + (params.source) + "&sortBy=" + (params.sortBy) + "&apiKey=" + (params.key), function(response) {

        STORE.articles = response.articles;
        console.log(STORE.articles);
        render();

        $('.text').click(function() {
            console.log($('.add').index(this));
            $(this).clone().appendTo('.personal-feed');
        });

    });
});

const STORE = {};

function generateArticles(article) {
    return `<div class="card"> <div class="text">
                        <div class=" name"><a target="_blank" href="${article.url}">${article.title}</a></div>
                        <div class="writer"> ${article.author}</div>
                        <div class="image">
                        <a target="_blank" href="${article.url}">
                        <img src="${article.urlToImage}"></img></a></div>
                        <div class="desc">${article.description}</div>
                        <button class="add">
                        ADD
                    </button>
                    </div></div>`;


};

function renderArticles(articles) {
    const insideHTML = articles.map(generateArticles).join();
    $('.inner').html(insideHTML);

};


function render() {
    renderArticles(STORE.articles);

};


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