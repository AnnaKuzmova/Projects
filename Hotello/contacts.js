let buttonSubmitContact = document.querySelector('.submit-contact');
let validationMessage = document.querySelector('.validation-message');
let sentContactMessage = document.querySelector('.sent');

//Reqular Expression за имейл
const regEx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

//Input елементи
let email = document.querySelector('#email-contact');
let subjectInput = document.querySelector('#subject');
let nameInput = document.querySelector('#name');
let textArea = document.querySelector('.text-subject');


// Валидация за емайл за контактната форма
buttonSubmitContact.addEventListener('click', function(e){

    e.preventDefault();

    if(!regEx.test(email.value)) { 

        //Покзвам съобщение за невалиден или празен имейл
        validationMessage.style.display = 'block';

    } else {
        /*При случай, че имейла е верен и всички полета не са празни 
        показвам съощение за изпратен имейл ,и изпразвам полетата
        */

        sentContactMessage.style.opacity = '1';
        sentContactMessage.style.transition = '.5s all linear';
        email.value = "";
        subjectInput.value = '';
        nameInput.value = '';
        textArea.value = '';

    }


});

// Изчистване на съобщение за валидация

email.addEventListener('focus', function(){

    if(validationMessage.style.display === 'block') {
        
        validationMessage.style.display = 'none';
    }

});

let openNavButton = document.querySelector('.show-nav-button');
let nav = document.querySelector('#mobile-navigation');
let closeNavButton = document.querySelector('.hide-nav');

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

