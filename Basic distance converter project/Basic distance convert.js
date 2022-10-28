(function(){
    'use strict'
document.getElementById('convert').addEventListener('submit', function (event) {
   event.preventDefault();
   var distance = parseFloat(document.getElementById('distance').value);
   var answer = document.getElementById('answer');
   if (distance) {
    var conversion = distance * 1.609344;
    //var roundedConversion = (Math.round(conversion * 1000))/1000;
    var roundedConversion = conversion.toFixed(3); 
    answer.innerHTML = `<h2>${distance} miles convert to ${conversion} Kilometers</h2>`
   }
   else { 
     answer.innerHTML= '<h2> Please provide a number</h2>'
   }

 });
})();