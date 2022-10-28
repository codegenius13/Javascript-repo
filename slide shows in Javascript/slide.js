(function () {
    "use strict"
    const myImages = ['kBerry logo 1.jpg', 'jumbotron.jpg', 'shop pic.jpg', 'specials pic.jpg'];
    let currentImage = 0;

    document.getElementById('next').onclick= nextPhoto;
    function nextPhoto() {
        currentImage ++;
        if (currentImage > myImages.length - 1 ) {
            currentImage= 0;
        };
        document.getElementById("myImage").src=myImages[currentImage];
    }
    document.getElementById('previous').onclick= previousPhoto;
    function previousPhoto() {
        currentImage --;
        if (currentImage <0 ) {
            currentImage= myImages.length-1;
        };
        document.getElementById("myImage").src=myImages[currentImage];
    }
})();