let select = document.querySelector("#type");
let circle = document.querySelector(".fas.fa-dot-circle");

select.addEventListener("change", function(){
   let value = select.value;

    if(value == "work") {

        circle.style.color = 'green';

    } else if (value == "personal") {

        circle.style.color = 'purple';

    } else {
        circle.style.color = 'gray';
    }
});

let addButton = document.querySelector('.add');
let list = document.querySelector('#list ul');


addButton.addEventListener('click', function(e){
    e.preventDefault();
    let li = document.createElement('li');

    let after = document.createElement('div');
    after.classList.add('after');

    if(select.value == "work") {

        after.style.backgroundColor = 'green';

    } else if (select.value == "personal") {

        after.style.backgroundColor= 'purple';

    } else {
        
        after.style.backgroundColor = 'gray';
    }

    li.appendChild(after);

    let p = document.createElement('p');
    let textVal = document.querySelector('input[type=text]').value;
    let textNode = document.createTextNode(textVal);
    p.appendChild(textNode);
    li.appendChild(p);
   
    let div = document.createElement('div');
    div.classList.add('buttons');
    let done = document.createElement('i');
    done.classList.add('fas');
    done.classList.add('fa-clipboard-check');
    done.addEventListener('click', function(e){
        let parent = e.target.parentNode.parentNode;
        parent.classList.toggle('done');
    });
    div.appendChild(done);

    let remove = document.createElement('i');
    remove.classList.add('fas');
    remove.classList.add('fa-trash-alt');
    remove.addEventListener('click', function(e){
        let parent = e.target.parentNode.parentNode;
        parent.remove();
    });
    div.appendChild(remove);

    li.appendChild(div);
    list.appendChild(li);

});


