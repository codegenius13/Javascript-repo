$(window).on('load',function () {
    "use strict"
    const imageCount = $('#slider ul li').length;
    const imageWidth = $('#slider ul li img').first().width();
    const totalWidth = (imageWidth * imageCount) + 'px';
    let leftPosition = 0;
    let counter = 0;
    $("#slider ul").css("width",totalWidth);
    function slider() {
      counter++;
       if (counter === imageCount) {
          $('#slider ul').clone().appendTo('#slider');
          $("#slider ul").last().css("left", imageWidth +'px');
          leftPosition = `-${totalWidth}`;
          $("#slider ul").last().animate({left: 0}, 700);
          $("#slider ul").first().animate({left: leftPosition}, 700, function () {
            $("#slider ul").first().remove();
          });
          counter = 0;
       }
       else {
          leftPosition = `-${counter * imageWidth}px`;
          $("#slider ul").animate({left: leftPosition}, 700);
        }
    };
    let mySlider = setInterval(slider ,3000); 
    document.getElementById('slider').addEventListener('mouseover', function () {
      clearInterval(mySlider);
    });
    document.getElementById('slider').addEventListener('mouseout', function () {
      mySlider = setInterval(slider ,3000); 
    });
    $("#next").click(function () {
       counter++;
       if (counter === imageCount) {
          $('#slider ul').clone().appendTo('#slider');
          $("#slider ul").last().css("left", imageWidth +'px');
          leftPosition = `-${totalWidth}`;
          $("#slider ul").last().animate({left: 0}, 700);
          $("#slider ul").first().animate({left: leftPosition}, 700, function () {
            $("#slider ul").first().remove();
          });
          counter = 0;
       }
       else {
          leftPosition = `-${counter * imageWidth}px`;
          $("#slider ul").animate({left: leftPosition}, 700);
        }
    });
    $("#previous").click(function () {
        counter--;
        if (counter < 0) {
            counter = imageCount -1;
            $('#slider ul').clone().appendTo('#slider');
            $("#slider ul").last().css("left", `-${totalWidth}`);
            leftPosition = `-${counter * imageWidth}px`;
            $("#slider ul").last().animate({left: leftPosition}, 700);
            $("#slider ul").first().animate({left: `${imageWidth}px`}, 700, function () {
              $("#slider ul").first().remove();
            });
        }
        else {
           leftPosition = `-${counter * imageWidth}px`;
           $("#slider ul").animate({left: leftPosition}, 700);
        } 
    }); 
});
