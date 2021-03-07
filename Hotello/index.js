window.addEventListener('load', (event) => {

//Анимация за header-a с gsap 
const tl = new TimelineLite({
    onComplete :  function() {
        this.restart();
    }
});
let h4 = document.querySelector('.h4-gsap-animate');
let span = document.querySelector('.span-gsap-animate');
let headings  = [
   'Stay in our top quality rooms',
   'Fall in love with our amazing views',
   'Welcome To Hotello'
];
let counter = 0;

tl.from(
    '.header-description', 1,
    {
        x : 100,
        opacity: 0,
    }
)
.to(
    '.header-description', 2 ,
    {
        left: '-100%',
        opacity: 0,
        delay : 3,
        onComplete : function() {
            if(counter ==headings.length) {
                counter = 0;
            }

            h4.innerHTML = '';
            let h4TextNode = document.createTextNode(headings[counter]);
            h4.appendChild(h4TextNode);

            counter++;
        }
    }
);


//Select-вам всички бутони за услуги

let buttonLinks = document.querySelectorAll('.button-holder ul li');

//Създавам масив с обекти, който съдържа информация относно съотвеен бутон за услуга

let arrayOfObjectServices =  [
    {
        type : 'restaurant',
        src : 'images/restaurant.jpeg',
        title : 'Restaurant and Cafe'
    },
    {
        type : 'gym',
        src : 'images/gym1.jpeg',
        title : 'Gym'
    },
    {
        type : 'bar',
        src : 'images/bar.jpeg',
        title : 'Bar'
    },
    {
        type : 'beach',
        src : 'images/beach1.jpeg',
        title : 'Amazing beaches'
    }
]

buttonLinks.forEach( link => {

    link.addEventListener('click', function(){

        //Взимам активен и натиснат бутан, за да разменя местата им 
        let activeLink = document.querySelector('.button-holder ul li.active');
        let currentLink = this;
        activeLink.classList.remove('active');
        currentLink.classList.add('active');
       
        // Намирам обект, който съвпада с натиснат бутон
        let neededObject = arrayOfObjectServices.find(obj => obj.type === currentLink.getAttribute('type'));

        //Сменям информация, относно натиснат бутон
        let heading = document.querySelector('.heading-title');
        let image = document.querySelector('.img');

        heading.innerText = neededObject.title.toUpperCase();
        image.style.backgroundImage = `url(${neededObject.src})`;

    });
});

//Валидация на input[type='email'] за subscribe относно получаване на емайли за промоции и оферти
let buttonSubscribe = document.querySelector('.send');
let input = document.querySelector('#subscribe-email');
let form = document.querySelector('.footer-block form');
//Regular expression за емайл
const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

buttonSubscribe.addEventListener('click', function(){
    if(re.test(input.value)) {

        form.style.border = '3px green solid';

    }else {

        form.style.border = '3px red solid';

    }
});

let openNavButton = document.querySelector('.show-nav-button');
let nav = document.querySelector('#mobile-navigation');
let closeNavButton = document.querySelector('.hide-nav');
let burgerMenuI = document.querySelectorAll('.show-nav-button i');

openNavButton.addEventListener('click', function(){

     nav.style.right = '0%';
    
});

closeNavButton.addEventListener('click', function(){
    nav.style.right = '-100%';
});

let reservationButton = document.querySelectorAll('.book-now-button');
let reservationHolder = document.querySelector('#booking-form-modal');
reservationButton.forEach(button => {
    button.addEventListener('click', function(e){
        e.preventDefault();
        reservationHolder.style.top = `${window.scrollY.toFixed(2)}px`;
        reservationHolder.style.display = 'block';
    });


});

let closeReservationButton = document.querySelector('.close-reservation-form');
closeReservationButton.addEventListener('click', function(e){
    e.preventDefault();
    reservationHolder.style.display = 'none';
});

});



