var arrayRecipes = [
    {
        name : 'Burito',
        description : 'Very nice and yummy.Goog for lunch or breakfast but mostly lunch',
        type : 'lunch',
        img : 'images/burito.jpeg'
    },
    {
        name : 'Apple Pie',
        description : 'Delicious dessert - slightly crunchy and creamy. Preferable for breakfast.',
        type : 'breakfast',
        img : 'images/applePie.jpg'
    },
    {
        name : 'Meat Dish',
        description : 'A juicy and very yummy meat on stick. Dinner kinda dish',
        type : 'dinner',
        img : 'images/meatDish.jpg'
    },
    {
        name : 'Cupcake',
        description : 'Delicious dessert as well. Very well-baked and smooth.',
        type : 'breakfast',
        img : 'images/cupcake.jpeg'
    }
]
let htmlRecipeHolder = document.querySelector('#recipe-list');

function renderHTMLRecipes (recipeList, htmlParent) {
    htmlParent.innerHTML = "";
   
    recipeList.forEach(recipe => {
        
        let article = document.createElement('article');
        let image = document.createElement('img');
        image.setAttribute('src', recipe.img);
        article.appendChild(image);
        let detailsHolder = document.createElement('div');
        detailsHolder.classList.add('details');
        let h2 = document.createElement('h2');
        let nameText = document.createTextNode(recipe.name);
        h2.appendChild(nameText);
        detailsHolder.appendChild(h2);
        let p = document.createElement('p');
        let descText = document.createTextNode(recipe.description);
        p.appendChild(descText);
        detailsHolder.appendChild(p);
        let button = document.createElement('button');
        let buttonText = document.createTextNode('delete');
        button.appendChild(buttonText);
        button.classList.add('delete-button');
        detailsHolder.appendChild(button);
        article.appendChild(detailsHolder);

        htmlParent.appendChild(article);

        button.addEventListener('click', (e) => {
                e.preventDefault();
                let parentArticle = e.target.parentElement.parentElement;
                let n = parseInt(parentArticle.getAttribute('number'));
                parentArticle.remove();

        });
    });
}

renderHTMLRecipes(arrayRecipes, htmlRecipeHolder);

let inputPicture = document.querySelector('#picture');
let pictureContainer = document.querySelector('.pic');
var str;

inputPicture.addEventListener('change', function(){
   let reader = new FileReader();
    reader.onload = function () {
         str = reader.result;
        pictureContainer.src = reader.result;
        
    }
   reader.readAsDataURL(inputPicture.files[0]);
    
});

let openModalButton = document.querySelector('#open-recipe-modal');
let closeModalButton = document.querySelector('#close-modal');
let modal = document.querySelector('#add-recipe-modal');

openModalButton.addEventListener('click', () => {
    modal.style.top = '0';
});

closeModalButton.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.top = '-100%';
});

let addRecipeButton = document.querySelector('#add-recipe-button');

addRecipeButton.addEventListener('click', (e) => {
    e.preventDefault();
    let obj = {};
    obj.img = str;
    let inputName = document.querySelector('#name').value;
    obj.name = inputName;

    let inputType = document.querySelector('#food-type').value;
    obj.type = inputType;

    let inputDescription = document.querySelector('#recipe-description').value;
    obj.description = inputDescription;

    arrayRecipes.push(obj);
    console.log(arrayRecipes);
    renderHTMLRecipes(arrayRecipes, htmlRecipeHolder);
    modal.style.top = '-100%';

});

let selectInput = document.querySelector('#filter');

selectInput.addEventListener('change', function(e){
    console.log('wee');
    let choice = e.target.value;
   if(choice == 'all'){
       renderHTMLRecipes(arrayRecipes, htmlRecipeHolder);
   } else {
       let modifiedArray = arrayRecipes.filter(recipe => {
           if(recipe.type == choice){
               return recipe;
           }
           
       });

       renderHTMLRecipes(modifiedArray,htmlRecipeHolder);
   }
});






