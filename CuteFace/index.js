var container = document.querySelector(".container");
var happyFace = '<i class="fas fa-smile-beam"></i>';
var sadFace = document.querySelector(".face").innerHTML;
var face = document.querySelector(".face");
var checker = true;

container.addEventListener("click",function(){
    this.classList.toggle("happyColors");
    face.classList.toggle("happy");
    if(checker === true){
        face.innerHTML = happyFace;
        checker = false;
    }else {
        face.innerHTML = sadFace;
        checker = true;
    }
})