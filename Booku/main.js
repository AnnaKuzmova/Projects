    $(document).ready(function(){

        $('.slider').bxSlider({
          auto: true,
          pause: 2500,
          autoHover: true,
          controls: false
        });

        $('.fas.fa-heart').click(function(){

            $(this).toggleClass('heart-efect');
            

        });


       
        $('.wow').hover(function(){
          $('.inner-menu').css('display', 'block');
        });

        $('.wow').mouseleave(function(){
            $('.inner-menu').css('display', 'none');
          });



       

    });