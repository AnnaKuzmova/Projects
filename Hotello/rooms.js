window.addEventListener('load', (event) => {
    //Създавам фукнция, която рендира съдържанието на стаите в страницата
    let modal = document.querySelector('#room-modal');
    let modalPicture = document.querySelector('.modal-image');
    let closeModalButton = document.querySelector('.fas.fa-window-close');

    closeModalButton.addEventListener('click', function(){
        modal.style.display = 'none';
    });


    function renderHTML(container, data) {
        container.innerHTML = " ";  

            data.forEach(function(room){

            let article = document.createElement('article');
            article.classList.add('room');

            let image = document.createElement('div');
            image.classList.add('img');
            image.style.backgroundImage = `url(${room.image})`;

            let divHoverBlock = document.createElement('div');
            divHoverBlock.classList.add('room-hover-block');
            let iSearch = document.createElement('i');
            iSearch.classList.add('fas');
            iSearch.classList.add('fa-search');
            divHoverBlock.appendChild(iSearch);
            image.appendChild(divHoverBlock);

            image.addEventListener('click', function(){
                modal.style.top = `${window.scrollY.toFixed(2)}px`;
                modal.style.display = 'block';
                modalPicture.style.backgroundImage = `url(${room.image})`;
            });
            article.appendChild(image);

            let roomInfoHolder = document.createElement('div');
            roomInfoHolder.classList.add('room-info');

            let h2 = document.createElement('h2');
            let text = document.createTextNode(room.title);
            h2.appendChild(text);
            roomInfoHolder.appendChild(h2);

            let p = document.createElement('p');
            let pText = document.createTextNode(room.description);
            p.appendChild(pText);
            roomInfoHolder.appendChild(p);

            let ul= document.createElement('ul');
            let liMax = document.createElement('li');
            liMaxText = document.createTextNode(`Max : ${room.max} Person`);
            liMax.appendChild(liMaxText);
            ul.appendChild(liMax);
            let liView = document.createElement('li');
            let liViewText = document.createTextNode(`View : ${room.view}`);
            liView.appendChild(liViewText);
            ul.appendChild(liView);
            roomInfoHolder.appendChild(ul);
            
            let strong = document.createElement('strong');
            strong.classList.add('price');
            let price = document.createTextNode(room.price);
            strong.appendChild(price);

            let span = document.createElement('span');
            span.classList.add('room-price');
            let spanText = document.createTextNode("Price/Per Night :");
            span.appendChild(spanText);
            span.appendChild(strong);

            let i = document.createElement('i');
            i.classList.add('fas');
            i.classList.add('fa-dollar-sign');
            span.appendChild(i);
            roomInfoHolder.appendChild(span);

            let button = document.createElement('button');
            button.classList.add('view-button');
            let buttonText = document.createTextNode('View Details');
            button.appendChild(buttonText);
            roomInfoHolder.appendChild(button);
             
            article.appendChild(roomInfoHolder);
            container.appendChild(article);
        });
    }

    //Взимаме инф за стаите от json файла
 let roomsArray = [
    {
        type : "double",
        title: "Double Room La Costa",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus.",
        price : 330,
        max: 2,
        view : "sea",
        image :"/images/doubleRoom3.jpeg"
    },
    {
        type : "double",
        title: "Double Room La Serena",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus.",
        price : 230,
        max: 2,
        view : "sea",
        image : "/images/doubleRoom2.jpeg"
    },
    {
        type : "double",
        title: "Double Room La Sena",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus.",
        price : 190,
        max: 2,
        view : "sea",
        image : "/images/doubleRoom1.jpeg"
    },
    {
        type : "luxurious",
        title: "Luxurious Room La Sena",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus.",
        price : 390,
        max: 3,
        view : "sea ans city",
        image : "/images/luxRoom1.jpeg"
    },
    {
        type : "luxurious",
        title: "Luxurious Room La Sena",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus.",
        price : 400,
        max: 3,
        view : "sea ans city",
        image : "/images/luxRoom2.jpeg"
    },
    {
        type : "luxurious",
        title: "Luxurious Room La Sena",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus.",
        price : 590,
        max: 3,
        view : "sea ans city",
        image : "/images/luxRoom3.jpeg"
    },
    {
        type : "apartment",
        title: "Apartment La Sena",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus.",
        price : 690,
        max: 4,
        view : "sea ans city",
        image : "/images/appRoom1.jpeg"
    },
    {
        type : "apartment",
        title: "Apartment La Sena",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus.",
        price : 790,
        max: 4,
        view : "sea ans city",
        image : "/images/appRoom2.jpeg"
    },
    {
        type : "apartment",
        title: "Apartment La Sena",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus.",
        price : 890,
        max: 4,
        view : "sea ans city",
        image : "/images/appRoom3.jpeg"
    }


];

let container = document.querySelector('.rooms-display-holder');
renderHTML(container, roomsArray);

    let filterButton = document.querySelector('.filter-button');
    filterButton.addEventListener('click', function(e){
        e.preventDefault();
        let type = document.querySelector('#room-type').value;
        if(type === 'all') {
            renderHTML(container,roomsArray)
        } else {
            let selectedRooms = roomsArray.filter(room => room.type === type);
            renderHTML(container, selectedRooms);
        }
        
    });

    let layout = document.querySelectorAll('.layout i');

    layout.forEach(l => {
        l.addEventListener('click', function(){
            let active = document.querySelector('.layout i.active');
            active.classList.remove('active');
            this.classList.add('active');
            let room = document.querySelectorAll('.room');
                 
            if(this.getAttribute('type') === 'one') {
                container.style.display = 'flex';
                container.style.justifyContent = 'space-between';
                container.style.flexWrap = 'wrap';
                room.forEach(r => r.style.width = '48%');
            } else {
                container.style.display = 'block';
                room.forEach(r => r.style.width = '100%');
            }
          
        });
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
   
  });