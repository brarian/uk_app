const searchUrl = 'https://newsapi.org/v1/articles';
const API_KEY = '3abe22b4968b4610833e2fdff4e3e47b';
const apiCall = 'https://newsapi.org/v1/articles?source=fox-sports-web&sortBy=latest&apiKey=3abe22b4968b4610833e2fdff4e3e47b';

function getDatafromApi(searchTerm, callback) {
    var url = 'https://newsapi.org/v1/articles?source=nfl-news&sortBy=top&apiKey=3abe22b4968b4610833e2fdff4e3e47b'
    $.ajax({
        url: url,
        method: 'GET',
        dataType: 'JSON',
        source: 'fox-sports',
        apiKey: API_KEY,
        sortBy: top,
        success: function(data) {
            console.log(data)
        },
        error: function(err) {
            console.log('error:' + err)
        }
    })
}
getDatafromApi(data);