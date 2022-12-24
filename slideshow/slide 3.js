// HOME PAGE IMAGE SLIDER
const slider = document.querySelector(".slider")
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const numberOfSlides = slides.length;
var slideNumber = 0;
// IMAGE SLIDER NEXT BUTTON 
nextBtn.addEventListener("click", () => {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcons) => {
        slideIcons.classList.remove("active");
      });
    slideNumber ++;
    if (slideNumber > (numberOfSlides - 1)) {
      slideNumber = 0;  
    }
    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
});
// END IMAGE SLIDER NEXT BUTTON
// IMAGE SLIDER PREVIOUS BUTTON 
prevBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slideIcons.forEach((slideIcons) => {
      slideIcons.classList.remove("active");
    });
  slideNumber --;
  if (slideNumber < 0) {
    slideNumber = numberOfSlides - 1;  
  }
  slides[slideNumber].classList.add("active");
  slideIcons[slideNumber].classList.add("active")
});
// END IMAGE SLIDER PREVIOUS BUTTON
// IMAGE SLIDER AUTOMATIC PLAY
var playSlider;
var repeater = () => {
  playSlider = setInterval (function () {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcons) => {
        slideIcons.classList.remove("active");
    });
    slideNumber ++;
    if (slideNumber > (numberOfSlides - 1)) {
      slideNumber = 0;  
    }
    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active")
  }, 7000);
}
repeater();
// END IMAGE SLIDER AUTOMATIC PLAY
// STOP IMAGE SLIDER AUTOMATIC PLAY WHEN MOUSEOVER
slider.addEventListener("mouseover", () => {
  clearInterval(playSlider);
});
// END STOP IMAGE SLIDER AUTOMATIC PLAY WHEN MOUSEOVER
// START IMAGE SLIDER AUTOMATIC PLAY WHEN MOUSEOUT
slider.addEventListener("mouseout", () => {
   repeater();
}, 7000);
// END START IMAGE SLIDER AUTOMATIC PLAY WHEN MOUSEOUT
// END HOME PAGE IMAGE SLIDER