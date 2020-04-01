$(document).ready(function(){

    var $headerImg = $('.first-header');
    var $btnNext = $('.button-next');
    var $btnPrev = $('.button-previous');
    var $img1 = $('.img-1');
    var $img2 = $('.img-2');

$btnNext.click(function(){

$img1.removeClass('opacity');
$img2.addClass('opacity');
$headerImg.css("background-image","url(https://images.unsplash.com/photo-1461727885569-b2ddec0c4328?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80)");

});

$btnPrev.click(function(){

    $img2.removeClass('opacity');
    $img1.addClass('opacity');
    $headerImg.css("background-image","url(https://images.pexels.com/photos/2187419/pexels-photo-2187419.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)");
});


});