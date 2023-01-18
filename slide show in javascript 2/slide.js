window.addEventListener('load', function () {
   // How many slides
   const slideCount = document.querySelectorAll("#slider-wrapper ul li").length;
   // How wide is each slide?
   const slideWidth = document.querySelector("#slider-wrapper").offsetWidth;
   // Total slider width 
   const totalWidth = slideCount * slideWidth + 'px';
   // DOM elements 
   const slider = document.querySelector("#slider-wrapper");
   const next = document.querySelector("#next"); 
   const previous = document.querySelector("#previous");
   // Upper left corner of slider 
   let leftPosition = 0;
   // To keep track of each slide
   let counter = 0;
   // Sets the width of the slider (which is also in the css)
   slider.style.width = totalWidth;
   next.addEventListener("click", function (event) {
      event.preventDefault();
      counter++;
      if (counter === slideCount) {
        counter = 0;
        leftPosition = 0;
        slider.style.left = leftPosition;
      }
      else {
        leftPosition = `-${counter * slideWidth}px`;
        slider.style.left = leftPosition;
      }
   });
   previous.addEventListener("click", function (event) {
    event.preventDefault();
    counter--;
    if (counter < 0) {
      counter = slideCount-1;
      leftPosition = 0;
      slider.style.left = leftPosition;
    }
    else {
      leftPosition = `-${counter * slideWidth}px`;
      slider.style.left = leftPosition;
    }
 });  
});