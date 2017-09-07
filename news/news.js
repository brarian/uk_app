$(document).ready(function() {

    getArticles().then(function(response) {
        STORE.articles = response.articles;
        render();
    });


});

const STORE = {
    articles: [],
}

function generateArticles(articles, articleIndex, template) {
    return `<div class="card" data-item-index=${articleIndex}> 
    <div class=" name"><a target="_blank" href="${articles.url}">${articles.title}</a></div>
    <div class="writer"> ${articles.author}</div>
    <div class="image">
    <a target="_blank" href="${articles.url}">
    <img src="${articles.urlToImage}"></img></a></div>
    <div class="desc">${articles.description}</div>
    <button class="add article-toggle"> ADD </button>
</div></div>`;

}

console.log("STORE.articles  ", STORE);

function renderArticles(articles) {
    const items = articles.map(generateArticles).join();
    $('.section').html(items);
};

function render() {
    renderArticles(STORE.articles);
};

// function addArticleToSaved() {
//     $('.add').click(function() {
//         //     $(this).html('faved');
//         //     console.log("`add` clicked");
//         //     const newSavedArticle = $(this).parent().clone();
//         //     $('.personal-feed').html(newSavedArticle);
//         getIndexFromArticle(event.currentTarget);

//         STORE.saved = STORE.articles.push(event.target.parentElement);
//         const savedArticles = STORE.saved;
//         $('.personal-feed').html(savedArticles);


//         // $('.text').click(function() {
//         //     console.log($('.add').index(this));
//         //     $(this).clone().appendTo('.personal-feed');
//         //     $(this).append(`<form class='textbox'>
//         //     <label for="add-Item"></label>
//         //     <input type="text" name="comment" class="comment" placeholder="learn more about this">
//         //     <button type="submit-comment"> Add Comment </button>
//         // </form>`);
//     });
// };



// function getIndexFromArticle(addButton) {
//     const articleIndexString = $('.add').parent();
// }

// function addComment() {
//     $('.submit-comment').click(function() {

//     })
// }

// function deleteOneArticle() {
//     console.log(`Delete item`);
//     // STORE.splice(articles, 1);
// };

// function deleteArticleFromSaved(articles) {
//     $('.personal-feed').click('.add', function() {
//         event.preventDefault();
//         $('.add').index(this);
//     });
// }

// function commentUnderArticle() {
//     console.log('`addArticlesSaved` ran');
// }

// function generateComment(comment) {
//     console.log('generating items');
//     const commentList = .map(comment);
// }

// function renderComment(generatedComment) {
//     console.log('render comment');
//     const commentString = generateComment();
//     $('.ol').html(commentString);
// }
//  CHANGE THIS
// $('.text').click(function() {
//     console.log($('.add').index(this));
//     $(this).clone().appendTo('.personal-feed');
// });
//CHANGE THIS
// $('.personal-feed').click('.add', function() {
//     event.preventDefault();
//     // $('.add').index(this);
//     $(event.target.parentElement).empty();
// });
// function handleNewSaved() {
//     $('.add').submit(function(event) {
//         event.preventDefault();
//         console.log('`handleNewSaved` ran');
//         const newItemName = newArticle;
//         $('.js-shopping-list-entry').val('');
//         addArticleToSaved(newItemName);
//         renderShoppingList();
//     });
// };

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