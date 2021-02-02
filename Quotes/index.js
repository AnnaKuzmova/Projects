window.addEventListener('load', function(){
 
  let models = [
    {
      backgroundColor : '#dac1e0',
      scr : 'images/happiness-removebg-preview.png',
      text: 'Happiness is about embracing yourselft'
    },
    {
      backgroundColor : '#dae394',
      scr : 'images/yourself-removebg-preview.png',
      text: 'Be bold and brave but dont leave yourself behind'
    },
    {
      backgroundColor : '#c9b4ab',
      scr : 'images/pic2-removebg-preview.png',
      text : 'Beautiness isnt just good facial features, it is good manners'
    }
  ];



  const tl = new TimelineLite(
    {
      onComplete: function() {
        this.restart();
      }
    }
  );


  let picHolder = document.querySelector('.pic');
  let img = document.querySelector('.pic img');
  let white = document.querySelector('.white');
  let quote = document.querySelector('.quote');
  let index = 0;


  tl.to('.white', 1 , {
    delay:5,
    left: '0%',
    onComplete: function() {
      if(index == models.length)
      {
        index = 0;
      }

      picHolder.style.backgroundColor = models[index].backgroundColor;
      img.src = models[index].scr;
      index++;
    }
  })
  .to('.quote', 2, {
    left: '0%',
    opacity: 0,
    onComplete : function(){
      quote.innerText = models[index].text;
    }
  }, '-=0.5')
  .to('.white', 1 ,{
    delay: 1,
    left: '-100%'
  })
  .to('.quote', 2, {
    left: '-8%',
    opacity: 1
  }, '-=0.5')






























});

