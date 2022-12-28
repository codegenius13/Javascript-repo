$('#tabs ul li a').click(function () {
    $('#tabs ul li a').css({background: 'silver', color: 'midnightblue'});
    $(this).css({background: 'antiquewhite', color: 'black'});
    var thisTab = $(this).attr('href');
    $('#tabs div:visible').fadeOut(200, function () {
        $(thisTab).fadeIn(200);
    });
});
