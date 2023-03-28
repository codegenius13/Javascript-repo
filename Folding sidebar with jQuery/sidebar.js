$('ul li ul').css('display', 'none'); // OR YOU CAN USE "hide();" INSTEAD OF THE CSS STYLE
$('.menulink').click(function () {
    var thisMenu = $(this).next('ul');
    $('ul li ul').not(thisMenu).hide();// OR YOU CAN ALSO USE THE CSS STYLE ABOVE HERE
    thisMenu.toggle(); 
});