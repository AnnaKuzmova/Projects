window.addEventListener('load', function() {
//Преизползвам кода за отваряне на мобилното менчю, за да не използвам impot/export (тъй като кода може да се счупи)
let openNavButton = document.querySelector('.show-nav-button');
let nav = document.querySelector('#mobile-navigation');
let closeNavButton = document.querySelector('.hide-nav');

openNavButton.addEventListener('click', function(){
    nav.style.right = '0%';
});

closeNavButton.addEventListener('click', function(){
    nav.style.right = '-100%';
});

let firstGalleryHolder = document.querySelector('.gallery-flex.one');
let pictureGalleryHolder = document.querySelector('.gallery-flex.two');

let picArrayForGallery = [
    '/images/pic1.jpeg',
    '/images/pic2.jpeg',
    '/images/pic3.jpeg',
    '/images/pic4.jpeg',
    '/images/pic5.jpeg',
    '/images/pic6.jpeg',
    '/images/pic7.jpeg',
    '/images/pic8.jpeg',
    '/images/pic9.jpeg',
    '/images/pic10.jpeg',
    '/images/pic11.jpeg',
    '/images/pic12.jpeg',

];

picArrayForGallery.forEach( (pic, index) => {
    let article;
    switch(index) {
        case 0 : 
       article = document.createElement('article');
        article.classList.add('big-picture');
        article.classList.add('pic');
        article.setAttribute('type', index);
        article.style.backgroundImage = `url(${pic})`;
        firstGalleryHolder.appendChild(article);
        break;
        case 1 : 
       article = document.createElement('article');
        article.classList.add('pic');
        article.setAttribute('type', index);
        article.style.backgroundImage = `url(${pic})`;
        firstGalleryHolder.appendChild(article);
        break;
        default : 
        article = document.createElement('article');
        article.classList.add('pic');
        article.setAttribute('type', index);
        article.style.backgroundImage = `url(${pic})`;
        pictureGalleryHolder.appendChild(article);
        break;
    }
});

let allPictures = document.querySelectorAll('.pic');
let galleryModal = document.querySelector('#gallery-pic-modal');
let modalPicture = document.querySelector('.modal-picture');
let tL = new TimelineLite();

allPictures.forEach(picture => {
    picture.addEventListener('click', function(e){
        galleryModal.style.display = 'block';
        galleryModal.style.top =  `${window.scrollY.toFixed(2)}px`;
        modalPicture.style.backgroundImage = `url(${picArrayForGallery[parseInt(e.target.getAttribute('type'))]})`;
        modalPicture.setAttribute('index', e.target.getAttribute('type'));
        tL.to(galleryModal, 1, 
            {
                opacity : 1
            });
    });
})

let closeModalButton = document.querySelector('.far.fa-window-close');
closeModalButton.addEventListener('click', function(){
    tL.to(galleryModal, 1, 
        {
            opacity : 0,
            onComplete : function(){
                galleryModal.style.display = 'none';
            }
        });
});

let nextPictureButton = document.querySelector('.fas.fa-long-arrow-alt-right');
nextPictureButton.addEventListener('click', function(){
    let nextPictureIndex = parseInt(modalPicture.getAttribute('index')) + 1;
    if(nextPictureIndex > picArrayForGallery.length - 1) {
        nextPictureIndex = 0;
    }

    modalPicture.removeAttribute('index');
    modalPicture.setAttribute('index', nextPictureIndex);
    modalPicture.style.backgroundImage = `url(${picArrayForGallery[nextPictureIndex]})`;
});

let previousPictureButton = document.querySelector('.fas.fa-long-arrow-alt-left');
previousPictureButton.addEventListener('click', function(){
    let previousIndex = parseInt(modalPicture.getAttribute('index')) - 1 ;
    if( previousIndex < 0) {
        previousIndex = picArrayForGallery.length - 1 ;
    }

    modalPicture.removeAttribute('index');
    modalPicture.setAttribute('index', previousIndex);
    modalPicture.style.backgroundImage = `url(${picArrayForGallery[previousIndex]})`;
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