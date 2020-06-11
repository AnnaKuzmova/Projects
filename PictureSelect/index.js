var $pictures = $(".Item");
var $modal = $(".modal");
var $close_button = $(".close-button");
var $modal_pic = $(".modal-image");


$pictures.click(function(e){

    $modal.addClass("modalShow");
    var $current_picture = $(e.target).css('background-image');
    $modal_pic.css('background-image',$current_picture);

});

$close_button.click(function(){

    $modal.removeClass("modalShow");

});