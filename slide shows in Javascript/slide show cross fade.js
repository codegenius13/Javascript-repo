var currentImage = 0;
var myphotos = ['jumbotron.jpg','shop pic.jpg','kBerry logo 1.jpg', 'specials pic.jpg',];
var container = document.getElementById ('content');
var nextBtn = document.getElementById ('next');
var prevBtn = document.getElementById ('previous');

nextBtn.addEventListener('click', function (event) {
   event.preventDefault();
   currentImage ++
   if (currentImage > myphotos.length -1) {
    currentImage= 0
   };

  swapImage ();
});

prevBtn.addEventListener('click', function (event) {
   event.preventDefault();
   currentImage --
   if (currentImage < 0) {
    currentImage= myphotos.length -1
   };
   swapImage ();
  
});
function swapImage() {
   var newSlide = document.createElement('img');
   newSlide.src = `${myphotos [currentImage]}`;
   newSlide.className = "fadeinimg";
   container.appendChild(newSlide);

   if (container.children.length > 2) {
      container.removeChild(container.children[0]);
   }; 
}