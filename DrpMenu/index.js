$(document).ready(function(){

 var $mainText = $(".text");   
 var $dropdownMenu = $(".drp-down");   
 var $show = true; 
  
 $(".btn.arrow").click(function(){
     if($show == true){
        $dropdownMenu.css("display", "block");
        $show = !$show;
     }else {
         $dropdownMenu.css("display","none");
         $show = !$show;
     }
 });

$("li").click(function(){

    var $current = $(this).html();
    $mainText.html($current);

});

});