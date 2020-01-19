var books = [
    { author: 'Bill Gates', title: 'The Road Ahead' },
    { author: 'Bill Gates', title: 'The Microsoft Corporation' },
    { author: 'Steve Jobs', title: 'Walter Isaacson' },
    { author: 'Mario Puzzo', title: 'God Father' },
    { author: 'Nguyen Nhat Anh', title: 'Mat Biec' },
    { author: 'Nguyen Hong', title: 'Bi Vo' },
    { author: 'Dan Brown', title: 'Angel and Devil' },
    { author: 'Decartes', title: 'Meditaion of first Philosophy' },
    { author: 'Dan Brown', title: 'Davinci Code' },
    { author: 'CS50', title: 'Intro to computer science' },
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games'}
]

document.getElementById('btnSearch').addEventListener('click', function(){
    var resultNumber = 0;
    var searchQuery = document.getElementById('searchInput').value;
   
    for (let element of books) {
        if(element.title == searchQuery || element.author == searchQuery){
            resultNumber ++;

            var resultItem = document.createElement('p');
            resultItem.innerHTML = `<b>${element.title}</b> -${element.author}`;
            document.getElementById('result').appendChild(resultItem);
        }
    }

    // This is comment of teacher
    if (resultNumber > 0) {
        document.getElementById('resultInfo').innerHTML= `<h3>Found ${resultNumber} results for keyword: <i>${searchQuery}</i></h3>`;
    } else {
        document.getElementById('resultInfo').innerHTML= `<h3>No results found for keyword: <i>${searchQuery}</i></h3>`;
    }
})



