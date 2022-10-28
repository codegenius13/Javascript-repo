(function () {
   'use strict'
var detailsForm = document.querySelector('#destination_details_form');
detailsForm.addEventListener('submit', handleFormSubmit);
function handleFormSubmit(event) {
    event.preventDefault();
    // extract the value from each form fields
    var destname = event.target.elements ['name'].value;
    var destLocation = event.target.elements['location'];
    var destPhoto = event.target.elements['photo'].value;
    var destDesc = event.target.elements['description'].value;
    
    // clear out the form fields
    for( var i=0; i < detailsForm.length; i ++){
       detailsForm.elements[i].value = "";
    }
    //create a card
    var destCard = createDestinationCard(destname, destLocation, destPhoto, destDesc);

    var wishListContainer = document.getElementById ('destination_container');
    
    // if needed, change the header at tht top of the destination list
    if (wishListContainer.children.length === 0) {
        document.getElementById('title').innerHTML = "My Wish List";
    } 

    // add the card 
    document.querySelector('#destination_container') .appendChild(destCard);
   }
    // run a function that creates the new card
    function createDestinationCard(name, location, photoURL, description) {
     var card = document.createElement('div');
     card.className = "card";
     var img = document.createElement('img');
     img.setAttribute('alt', name);
     var constantPhotoURL = 'new3.jpg'
     if (photoURL.length === 0) {
        img.setAttribute('src', constantPhotoURL)
     }
     else {
        img.setAttribute('src', photoURL)
     }
     card.appendChild(img);
     var cardBody = document.createElement ('div');
     cardBody.className = "card-body";
     var cardTitle = document.createElement('h3')
     cardTitle.innerText = name;
     cardBody.appendChild(cardTitle);
     var cardSubtitle = document.createElement('h4');
     cardSubtitle.innerText = location;
     cardBody.appendChild(cardSubtitle);
    if (description.length !== 0) {
      var cardText = document.createElement('p');
      cardText.className = 'card-text';
      cardText.innerText = description;
      cardBody.appendChild(cardText);
    }
    var cardDeleteBtn =document.createElement ('button');
    cardDeleteBtn. innerText = 'Remove';
    cardDeleteBtn.addEventListener ('click', removeDestination);
    cardBody.appendChild(cardDeleteBtn);
    card.appendChild(cardBody);
    return card;
   }
function removeDestination(event) {
   var card = event.target.parentElement.parentElement;
   card.remove();
}
})(); 