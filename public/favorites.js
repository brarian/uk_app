function displayFavoritesMockArticles(data) {
    return `<div class="card" data-item-index=""> 
    <div class=" name"><a target="_blank" href="${data.articles[index].url}">${data.articles[index].title}</a></div>
    <div class="writer"> ${data.articles[index].author}</div>
    <div class="image">
    <a target="_blank" href="${data.articles[index].url}">
    <img src="${data.articles[index].urlToImage}"></img></a></div>
    <div class="desc">${data.articles[index].description}</div>
    <button class="delete"> DELETE </button>
    <button class = "newnote">`;
}