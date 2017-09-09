const articles = [{
        author: 'AAAA',
        title: 'BBBB',
        url: 'CCCC',
        desc: 'DDDD',
        date: 'EEEE',
        pic: 'FFFF',
        favorite: false

    },
    {
        author: 'AAAA',
        title: 'BBBB',
        url: 'CCCC',
        desc: 'DDDD',
        date: 'EEEE',
        pic: 'FFFF',
        favorite: false
    },
    {
        author: 'AAAA',
        title: 'BBBB',
        url: 'CCCC',
        desc: 'DDDD',
        date: 'EEEE',
        pic: 'FFFF',
        favorite: false
    }
];

function generateArticlesString() {
    console.log(`generating the article items`)
    return `<div> ${articles[0].author} </div> <div> goodbye </div>`;
}

function renderArticlesList() {
    console.log(`articles rendered`);
    const articlesList = generateArticlesString();;
    //insert into DOM 
    $('.section').html(articlesList);
}

renderArticlesList();