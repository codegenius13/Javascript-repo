const mainElement = document.querySelector("main");
const navLinks = document.querySelectorAll("#mainnav ul li a");
let filmData;
let dataSet = "films";
let url = 'https://ghibliapi.herokuapp.com/films';
async function getData(url) {
   const dataPromise = await fetch(url);
   const data = await dataPromise.json();
   if (dataSet === 'films') {
       mainElement.innerHTML = '';
       setSort(data);
       addCards(data);
       filmData = data;
       document.querySelector('nav form').style.visibility = "visible";
       document.getElementById("sortorder").removeAttribute("disabled");
   }
   else {
       mainElement.innerHTML = '';
       document.querySelector('nav form').style.visibility = "hidden";
       addCards(data);
   }
};
getData();
document.getElementById("sortorder").addEventListener("change", function () {
   mainElement.innerHTML = "";
   setSort(filmData);
   addCards(filmData); 
});
navLinks.forEach(function (eachLink) {
    eachLink.addEventListener("click", function (event) {
        event.preventDefault();
        const thisLink = event.target.getAttribute('href').substring(1);
        url = 'https://ghibliapi.herokuapp.com/' + thisLink;
        dataSet = thisLink;
        getData(url)
    });
});
function setSort(array) {
    const sortOrder = document.getElementById("sortorder").value;
    switch (sortOrder) {
        case 'title': array.sort((a,b) => (a.title > b.title) ? 1 : -1); break;
        case 'released_date': array.sort((a,b) => (a.release_date > b.release_date) ? 1 : -1); break;
        case 'rt_score': array.sort((a,b) => (parseInt(a.rt_score) > parseInt(b.rt_score)) ? -1 : 1); break;
    }  
};
function addCards() {
    array.forEach(eachItem => {
        createCard(eachItem);
    });  
};
/*function createCard(data) {
    // for title of films
    const card = document.createElement("article");
    const movieTitle = document.createElement("h2");
    const movieTitleTxt = document.createTextNode(data.title);
    //for text of films 
    const director = document.createElement('p');
    const directorTxt = document.createTextNode(`Director: ${data.director}`);
    // for year of films
    const year = document.createElement("p");
    const yearTxt = document.createTextNode(`Released: ${data.release_date}`);
    // for description 
    const description = document.createElement("p");
    const descriptionTxt = document.createTextNode(data.description);
    // for rating of films
    const rating = document.createElement("p");
    const ratingTxt = document.createTextNode(`Rotten Tomatoes Score: ${data.rt_score}`);
    movieTitle.appendChild(movieTitleTxt);
    card.appendChild(movieTitle); 
    director.appendChild(directorTxt);
    card.appendChild(director);
    year.appendChild(yearTxt);
    card.appendChild(year);
    description.appendChild(descriptionTxt);
    card.appendChild(description);
    rating.appendChild(ratingTxt);
    card.appendChild(rating);

    mainElement.appendChild(card);
};*/
// INSTEAD OF THAT USE THIS...
async function createCard(data) {
    const card = document.createElement("article");
    switch (dataSet) {
        case 'films': card.innerHTML = filmCardContents(data); break;
        case 'people': card.innerHTML = await peopleCardContent(data); break;
        case 'locations': card.innerHTML  = await locationCardContent(data); break;
        case 'species': card.innerHTML  = await speciesCardContent(data); break;
        case 'vehicles': card.innerHTML  = await vehiclesCardContents(data); break;
    }
    mainElement.appendChild(card);
};
function filmCardContents(data) {
    let html = `<h2>${data.title}</h2>`;
    html += `<p><strong>Director:</strong>${data.director}</p>`;
    html += `<p><strong>Released:</strong>${data.release_date}</p>`;
    html +=  `<p>${data.description}</p>`;
    html += `<p><strong>Rotten Tomatoes Score:</strong>${data.rt_score}</p>`;
    return html;
}
async function indivItem(url, item) {
    var theItem;
    try {
        const itemPromise = await fetch(url);
        const data = await itemPromise.json();
        theItem = data[item];
    } 
    catch (err) {
        theItem = "no data available";    
    } 
    finally {
        return theItem;
    }
};
async function peopleCardContent(data) {
    const thefilms = data.films;
    let filmtitles = [];
    for(eachFilm of thefilms) {
        const filmTitle = await indivItem(eachFilm, 'title');
        filmtitles.push(filmTitle);
    }
    const species = await indivItem(data.species, 'name');
    let html = `<h2>${data.name}</h2>`;
    html += `<p><strong>Details:</strong>gender ${data.gender}, age ${data.age}, eye color
    ${data.eye_color}, hair color ${data.hair_color}</p>`;
    html += `<p><strong>Films:</strong>${filmtitles.join(', ')}</p>`;
    html += `<p><strong>Species:</strong>${species}</p>`;
    return html;
}
async function locationCardContent(data) {
    const regex = 'https?:\/\/';
    const theResidents = data.residents;
    let residentNames = [];
    for(eachResident of theResidents) {
        if (eachResident.match(regex)) {
            const resName = await indivItem(eachResident, 'name');
            residentNames.push(resName); 
        }
        else {
            residentNames[0] = "no data available";
        }
    } ; 
    const thefilms = data.films;
    let filmtitles = [];
    for (eachFilm of thefilms) {
        const filmTitle = await indivItem(eachFilm, 'tiltle');
        filmtitles.push(filmTitle);
    }
    let html = `<h2>${data.name}</h2>`;
    html += `<p><strong>Details:</strong>climate ${data.climate},
    terrain ${data.terrain}, suface water ${data.surface_water}%</p>`;
    html += `<p><strong>Residents:</strong>${residentNames.join(', ')}</p>`;
    html += `<p><strong>Films</strong>${filmtitles.join(', ')}</p>`;
    return html;
};

async function speciesCardContent() {
    const people = data.people;
    let peopleNames = [];
    for (eachPerson of people) {
        const personName = await indivItem(eachPerson, 'name');
        peopleNames.push(personName);
    }
    const thefilms = data.films;
    let filmtitles = [];
    for (eachFilm of thefilms) {
        const filmTitle = await indivItem(eachFilm, 'title');
        filmtitles.push(filmTitle);
    }
    let html = `<h2>${data.name}</h2>`;
    html += `<p><strong>Classifications:</strong>${data.classification}</p>`;
    html += `<p><strong>Eye Colors:</strong>${data.eye_colors}</p>`;
    html += `<p><strong>Hair Color:</strong>${data.hair_color}</p>`;
    html += `<p><strong>People:</strong>${peopleNames.join(', ')}</p>`;
    html += `<p><strong>Classifications:</strong>${filmtitles.join(', ')}</p>`;
    return html;
}

async function vehiclesCardContents() {
    let html = `<h2>${data.name}</h2>`;
    html += `<p><strong>Description:</strong>${data.description}</p>`;
    html += `<p><strong>Vehicle Class:</strong>${data.vehicle_class}</p>`;
    html += `<p><strong>Lenth:</strong>${data.length} feet</p>`;
    html += `<p><strong>Pilot:</strong>${await indivItem(data.pilot, 'name')}</p>`;
    html += `<p><strong>Classifications:</strong>${await indivItem(data.films, 'title')}</p>`;
    return html;
};