var btn = document.querySelector(".btn");
var body = document.querySelector("body");
btn.addEventListener("click",function(){
    var bgColor = document.querySelector("#color-bg").value;
    var textColor = document.querySelector("#color-text").value;
    body.style.backgroundColor = bgColor;
    body.style.color = textColor;
    btn.style.color = textColor;
});