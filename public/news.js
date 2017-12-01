$(document).ready(function() {
    getArticles().then(function(response) {
        STORE.response = response;
        render();
        handleAddArticleToSaved();
    });
});

const STORE = [];

function generateArticlesString(articles, source) {
    const items = articles.map((article, articleIndex) => generateArticles(article, articleIndex, source));
    return items.join("");
};


{/* <input type="button" value="add" class="add" onclick="alert('');"> */}
function generateArticles(articles, articleIndex, source) {
    return ` <div class="card"  style="max-width: 35rem; top:40px;" data-item-index=${articleIndex} data-item-source=${source} >
    <div class="card-title" style="margin-bottom: -0.25rem;"><a target='_blank' href='${articles.url}'>${articles.title}</a></div>
    <div class='writer'"> ${articles.author} <span class='source'>${source}</span></div> 
    <div class='image'>
        <a target='_blank' href='${articles.url}'>
            <img class="img-thumbnail" src='${articles.urlToImage}' alt="Responsive Image"></img>
        </a>
    </div>
    <div class="card-text">${articles.description}</div>
    <button class="add" onclick="alert('');"> <img src="plus.png" alt="add to favorites button" style="width:30px;height:30px;" /><a href="#ex1" rel="modal:open"></a> </button> 
    
    </div>
    </div>`;
}


function renderArticles() {
    const articlesList = STORE.response.map(response => generateArticlesString(response.articles, response.source)).join("");
    $('.section').html(articlesList);
}

function render() {
    renderArticles();
};

function handleAddArticleToSaved() {
    $('.add').one('click', function() {
        const newArticle = getArticleFromElement($(this).parent());
        fetch('/favorites', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newArticle),
        }).then(response => {
            return response.json();
        }).catch(error => {
            console.log('request failed', error)
        })
    });
}


function getArticleFromElement(element) {
    const source = element.data('item-source');
    const index = element.data('item-index');
    const newArticleSource = STORE.response.find((promiseResponse) => promiseResponse.source === source);
    const article = newArticleSource.articles[index];
    const articleAndSource = { source, article };
    return articleAndSource;
}

var ALERT_TITLE = "the article you selected was added to favorites";
var ALERT_BUTTON_TEXT = "OK";

if(document.getElementById) {
	window.alert = function(txt) {
		createCustomAlert(txt);
	}
}

function createCustomAlert(txt) {
	d = document;

	if(d.getElementById("modalContainer")) return;

	mObj = d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));
	mObj.id = "modalContainer";
	mObj.style.height = d.documentElement.scrollHeight + "px";
	
	alertObj = mObj.appendChild(d.createElement("div"));
	alertObj.id = "alertBox";
	if(d.all && !window.opera) alertObj.style.top = document.documentElement.scrollTop + "px";
	alertObj.style.left = (d.documentElement.scrollWidth - alertObj.offsetWidth)/2 + "px";
	alertObj.style.visiblity="visible";

	h1 = alertObj.appendChild(d.createElement("h1"));
	h1.appendChild(d.createTextNode(ALERT_TITLE));

	msg = alertObj.appendChild(d.createElement("p"));
	//msg.appendChild(d.createTextNode(txt));
	msg.innerHTML = txt;

	btn = alertObj.appendChild(d.createElement("a"));
	btn.id = "closeBtn";
	btn.appendChild(d.createTextNode(ALERT_BUTTON_TEXT));
	btn.href = "#";
	btn.focus();
	btn.onclick = function() { removeCustomAlert();return false; }

	alertObj.style.display = "block";
	
}

function removeCustomAlert() {
	document.getElementsByTagName("body")[0].removeChild(document.getElementById("modalContainer"));
}
function ful(){
alert('Alert this pages');
}