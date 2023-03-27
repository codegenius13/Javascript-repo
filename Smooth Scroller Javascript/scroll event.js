// SMOOTH SCROLL ONCLICK
const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach(function (eachLink) {
    eachLink.addEventListener('click', smoothScroll)
});
function smoothScroll(event) {
    event.preventDefault();
    const targetID = event.target.getAttribute('href');
    const targetSection = document.querySelector(targetID);
    const originalTop = Math.floor(targetSection.getBoundingClientRect().top) -200;
    window.scrollBy({top: originalTop, left: 0, behavior: 'smooth'});
    //console.log(originalTop);

    /* YOU CAN ADD A POLYFILL SO THAT THE SMOOTH SCROLL CAN WORK
    ON LOWER BROWSERS */
};
// END SMOOTH SCROLL ONCLICK

// SMOOTH SCROLL ONSCROLL AUTOMATIC
window.addEventListener('load', function () {
   const posts = document.querySelectorAll(".sections");
   let postTops = [];
   let pageTop;
   let counter = 1;
   let prevCounter = 1;
   let doneResizing;
   resetPagePosition();
   //console.log(postTops);
   window.addEventListener('scroll', function () {
      pageTop = window.pageYOffset + 250;
      //console.log(pageTop);
      if (pageTop > postTops[counter]) {
        counter++;
        //console.log(`scrolling down ${counter}`);
      }
      else if (counter > 1 && pageTop < postTops[counter - 1]) {
        counter--;
        //console.log(`scrolling up ${counter}`);
      }
      if (counter != prevCounter) {
        navLinks.forEach(function (eachLink) {
           eachLink.removeAttribute('class'); 
        });
        const thisLink = document.querySelector(`nav ul li:nth-child(${counter}) a`);
        thisLink.className = 'selected';
        prevCounter = counter;
      }
   });
   // WHEN THE USER IS RESIZING OR REFRESHING THE PAGE
   window.addEventListener("resize", function () {
    clearTimeout(doneResizing);
    doneResizing = setTimeout(function () {
       resetPagePosition;
    }, 500);
   });
   function resetPagePosition() {
    postTops = [];
    posts.forEach(function (eachPost) {
        postTops.push(Math.floor(eachPost.getBoundingClientRect().top + window.pageYOffset));
     });
     var pagePosition = window.pageYOffset + 250;
     counter = 0;
     postTops.forEach(function (eachPost) {
        if (pagePosition > eachPost) {
            counter++;
        }
     });
     navLinks.forEach(function (eachLink) {
        eachLink.removeAttribute('class'); 
     });
     const thisLink = document.querySelector(`nav ul li:nth-child(${counter}) a`);
     thisLink.className = 'selected';
   };
   // END WHEN THE USER IS RESIZING OR REFRESHING THE PAGE
});
// END SMOOTH SCROLL ONSCROLL AUTOMATIC