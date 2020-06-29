let navigation_open = document.querySelectorAll(".menu");
let navigation_open_mobile = document.querySelectorAll(".fas.fa-bars");
let navigation_close = document.querySelector(".fas.fa-times");
let nav_menu = document.querySelector("#navigation");


for (i = 0; i < navigation_open.length; i++){
    navigation_open[i].addEventListener("click",function(){
        nav_menu.style.right = "0";  //Open navigation with style
    });
}

for (i = 0; i < navigation_open_mobile.length; i++){
    navigation_open_mobile[i].addEventListener("click",function(){
        nav_menu.style.right = "0"; //Open navigation 
    });
}

navigation_close.addEventListener("click",function(){
    nav_menu.style.right = "-60%"; 
});


let images = ["url(images/header1.jpg)","url(images/header2.jpg)","url(images/header9.jpg)"];
let index = 0;
let header = document.querySelector("#header-background");

function headerChange(){
    setInterval(function(){
        if(index == images.length){
            index = 0;
        }else {
            header.style.backgroundImage = images[index];
            index++;
        }

    },3000);
}

/* let images_changer = headerChange(); */



//Get all li's
let menu_items = document.querySelectorAll("#menu ul li");

// Add event listener on all li with for
for(i = 0; i < menu_items.length; i++){
    menu_items[i].addEventListener("click",function(){
        let active = document.querySelector("#menu ul li.active"); // Get li with class active then remove it
        active.classList.remove("active");
        this.classList.add("active"); //Add active class to the last clicked li
    });
}

//Create regular expression for email validation 
const regEx = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
let email = document.querySelector("#email");
let button = document.querySelector("#stay-in-touch button");


button.addEventListener("click",function(){
    if(regEx.test(email.value)){
        email.style.border = "green 3px solid"; //if true set border to green
    }else {
        email.style.border = "red 3px solid"; //if false set border to red
    }
});

//Slide down the parallax header when user scroll down 30px from tow
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        document.getElementById("parallax-header").style.top = "0";
    }else {
        document.getElementById("parallax-header").style.top = "-25%";
      }
}


//GALLERY

let gallery = document.querySelector(".menu-gallery");
let image = document.querySelector(".image-show");
let prev = document.querySelector(".fas.fa-arrow-circle-left");
let next = document.querySelector(".fas.fa-arrow-circle-right");
let image_array = ["url(images/item1.jpg)","url(images/item2.jpg)","url(images/item4.jpg)","url(images/item5.jpg)","url(images/item6.jpg)","url(images/item7.jpg)"];
var number; 

let close_gallery = document.querySelector(".fas.fa-times-circle");
//Close gallery
close_gallery.addEventListener("click",function(){
    gallery.style.display = "none";
});

let menu_box = document.querySelectorAll(".menu-box");

for(i = 0; i <= menu_items.length +1; i++) {
        menu_box[i].addEventListener("click",function(){
        gallery.style.display = "block" // open gallery
        let box_image = this.style.backgroundImage;
        image.style.backgroundImage = box_image;
        number = parseInt(this.getAttribute("number"));
        console.log(number);
    });
}

next.addEventListener("click",function(){
    if(number == 6){
        number = 0;
    }

    image.style.backgroundImage = image_array[number++];
});

prev.addEventListener("click",function(){
    if(number == 0){
        number = 6;
    }
    number = number -1;
    image.style.backgroundImage = image_array[number];
});

