//SMOOTH SCROLLING SCRIPT ONCLICK 
$('nav ul li a').click(function () {
   var thisSection = $(this).attr('href');
   var thisLink = $(this);
   $('html, body').stop().animate({
      scrollTop: $(thisSection).offset().top -200
   }, 800);
   return false;
});
// END SMOOTH SCROLLING SCRIPT ONCLICK

// SMOOTH SCROLLING SCRIPT AUTOMATIC ON SCROLL 
$(window).on('load', function () {
   var allLinks = $('nav ul li a'); 
    var posts = $('.sections');
    var pageTop;
    var postPos;
    var counter = 0;
    var prevCounter = 0;
    var doneResizing;

    // THIS IS TO KNOW HOW TALL EACH SECTION IS 
    var postTops = [];
    resetPagePosition();
    //console.log(postTops);
    // END THIS IS TO KNOW HOW TALL EACH SECTION IS 

   $(window).scroll(function () {
      pageTop = $(window).scrollTop() + 210;
      if (pageTop > postTops[counter + 1]) {
         counter ++;
         //console.log(`scrolling down ${counter}`)
      }
      else if (counter > 0 && pageTop < postTops[counter]) {
         counter --;
         //console.log(`scrolling up ${counter}`)
      }
      if (counter != prevCounter) {
         $(allLinks).removeAttr('class');
         $("nav ul li a").eq(counter).addClass('selected');
         prevCounter = counter;
      }
   });
   // WHEN RESIZING THE PAGE ONSCROLL
   $(window).on('resize', function () {
      // WHEN USER STOPS RESIZING
      clearTimeout(doneResizing);
      doneResizing = setTimeout(function () {
         resetPagePosition();
      }, 500);
      // END WHEN USER STOPS RESIZING
   });
   // END WHEN RESIZING THE PAGE ONSCROLL 
   function resetPagePosition() {
      postTops = [];
      posts.each(function () {
         postTops.push(Math.floor($(this).offset().top));
      });
      // WHEN A USER REFRESHES THE PAGE WHILE SCROLLING DOWN
      var pagePosition = $(window).scrollTop() + 210;
      counter = 0;
      for(var i=0; i < postTops.length; i++) {
         if (pagePosition > postTops[i]) {
            counter ++;
         }
         counter --;
      }
      $(allLinks).removeAttr('class');
      $('nav ul li a').eq(counter).addClass('selected');
      // END WHEN A USER REFRESHES THE PAGE WHILE SCROLLING DOWN
   };
}); 
// END SMOOTH SCROLLING SCRIPT AUTOMATIC ONSCROLL