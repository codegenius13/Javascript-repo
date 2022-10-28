   (function () {
    'use strict'
   var convertType = "miles" ;
   var heading = document.querySelector('h1');
   var intro = document.querySelector('p');
   var answer = document.getElementById('answer');
   var form = document.getElementById('convert');
   document.addEventListener('keydown', function (event) {
    var key = event.code;
    if (key == 'KeyK') {
     convertType = "kilometers";
     heading.innerHTML = "Kilometers to Miles Converter";
     intro.innerHTML = "Type a number of kilometers and click the button to convert the distance to miles.";
    }
    else if(key == 'KeyM'){
     convertType = "kilometers";
     heading.innerHTML = "Miles Converter to Kilometers";
     intro.innerHTML = "Type a number of miles and click the button to convert the distance to kilometers.";
    }
   });
   form.addEventListener('submit', function (event) {
        event.preventDefault();
        var distance = parseFloat(document.getElementById('distance').value);
        if (distance) {
            // convert Miles to Kilometers 1.609344
            if (convertType == 'miles') {
              var converted = (distance * 1.609344).toFixed(3); 
              answer.innerHTML = `${distance} miles to converts to ${converted}kilometers`;  
            }
            else {
              var converted = (distance * 0.621371192).toFixed(3);
              answer.innerHTML = `${distance} kilometers to converts to ${converted}miles`;
            }
        }
        else {
            answer.innerHTML= '<h2> Please provide a number </h2>'
        }
   });
  })();
