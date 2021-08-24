'use strict';



function movies(name, img, release) {
    this.name = name;
    this.imgPath = img;
    this.release = release;

    movies.tableArr.push(this);


}



movies.tableArr = [];


getData();

console.log(movies.tableArr);

let table = document.getElementById('table');

movies.prototype.run = function () {

    let trElement = document.createElement('tr');
    table.appendChild(trElement);

    let thElement = document.createElement('th');
    trElement.appendChild(thElement);

    let movieImg = document.createElement('img');
    movieImg.src = `./img/${this.imgPath}.png`;
    thElement.appendChild(movieImg);

    let firstTd = document.createElement('td');
    firstTd.textContent = this.name;
    trElement.appendChild(firstTd);

    let secondTd = document.createElement('td');
    secondTd.textContent = this.release;
    trElement.appendChild(secondTd);


    localStorage.data = JSON.stringify(movies.tableArr);

    
}

for (let i =0; i < movies.tableArr.length; i++){
    movies.tableArr[i].run();
}




let moviesForm = document.getElementById('moviesForm');

moviesForm.addEventListener('submit', submitHandler);

function submitHandler(event) {

    event.preventDefault();

    let movieName = event.target.name.value;
    let movieType = event.target.browser.value.toLowerCase();
    let movieRelease = event.target.release.value;

    let newMovie = new movies(movieName, movieType, movieRelease)


    newMovie.run();
}


function getData (){
   if (localStorage.data){
    let data = JSON.parse(localStorage.data);
    for (let i = 0; i < data.lenght; i++) {
        new movies(data[i].name, data[i].imgPath, data[i].release);
    }
   } else {
    for (let i = 0; i < movies.tableArr.length; i++) {
        new movies(movies.tableArr[i].name, movies.tableArr[i].imgPath, movies.tableArr[i].release);
    }
   }
}