/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */
var Accel = require('ui/accel');
var UI = require('ui');
var Vector2 = require('vector2');
var steps = 0;
var monsterSteps =-500;
/*var runners = [
    {
      title:"Zombie",
      subtitle:'slow and easy',
      icon: 'images/photo.png'
    },
    {
      title:"Werewolf",
      subtitle:'nice and steady',
      icon: 'images/photo.png'
    },
    {
     title:"Vampire",
      subtitle:'fast and hard',
      icon: 'images/photo.png' 
    } 
  ];*/

var main = new UI.Card({
  title: 'Monster Track',
  icon: 'images/photo.png',
  subtitle: 'Press Up to Run!',
  body:  'Team Dont Byte Me'
});

main.show();


main.on('click', 'up', function(e) {
// var runMenu = new UI.Menu({
  //  sections:[{
   //   title: 'Pick Your Run',
   //   items: runners
  // }]
  // });
//runMenu.on('select', function(event){
    
//Initalize local variables
  Accel.init();

  var didStep = false;
  var monsterSpeed = 1;
 // var death =false;

  var runWind = new UI.Window();
  var topRect = new UI.Rect({
   position: new Vector2(10,5),
  size: new Vector2(124,30),
    backgroundColor:'black'
    });
  var botRect = new UI.Rect({
    position: new Vector2(5,60),
    size: new Vector2(124,30),
    backgroundColor:'black'
    });
  var bgRect = new UI.Rect({
    position: new Vector2(0,0),
    size: new Vector2(144,168),
    backgroundColor:'white'
    });
    
    runWind.add(bgRect);
    runWind.add(botRect);
    runWind.add(topRect);

///////////////////Human Step Counter/////////////
  Accel.on('tap', function(e) {
    console.log('tapevent on axis:', + e.axis + ' and direction: ' + e.direction);  
    if (e.direction > 0){
      didStep = true;
      }else{
      didStep = true;
    }
    //Step counter display settings
     var topRect = new UI.Rect({
    position: new Vector2(10,5),
    size: new Vector2(124,30),
    backgroundColor:'black'
    });
    runWind.add(topRect);
    
    var stepsDisplay = new UI.Text({
      position: new Vector2(10,5),
      size: new Vector2(124,20),
      text: steps,
      color: 'white',
      textAlign: 'center'
      }); 
    //removes old step display and replaces it with new display
    if (didStep === true){ 
      runWind.remove(stepsDisplay);
      steps += 1;
      runWind.add(stepsDisplay);
      didStep = false;
    }
       runWind.show();
       console.log('human steps: '+steps);
  });
  
/////////////////Monster Step Counter//////////////////////
  monsterSteps = monsterSteps+monsterSpeed; //i.e -500+1=-499
  var monsterStepsDisplay = steps-monsterSteps; //i.e 0-(-499)=499
  if (monsterStepsDisplay >= '0'){ //i.e 500-(500) =0
   // death = true;
  }else{
   /* var botRect = new UI.Rect({
      position: new Vector2(60,5),
      size: new Vector2(124,30),
      backgroundColor:'black'
    });*/
    runWind.remove(botRect);
    runWind.add(botRect);
    var monsterDisplay = new UI.Text({
      position: new Vector2(5,60),
      size: new Vector2(124,20),
      text: 'Zombie is '+monsterStepsDisplay+' steps away!',
      color: 'white',
      textAlign: 'center'
      }); 
    runWind.remove(monsterDisplay);
    runWind.add(monsterDisplay);
    runWind.show();
  }
console.log('monster steps: '+ monsterSteps); 
    
////////////////Sprite Images on Screen//////////////////
  var runner1pic = new UI.Image({
    position: new Vector2(-10,60),
    size: new Vector2(80,35),
    image: 'images/runner1.png'
  });  
  runWind.add(runner1pic);
  
  
  runWind.show();
});

//  runMenu.show();
//});



main.on('click', 'select', function(e) {
  var wind = new UI.Window();
  var textfield = new UI.Text({
    position: new Vector2(0, 50),
    size: new Vector2(144, 30),
    font: 'gothic-24-bold',
    text: 'Text Anywhere!',
    textAlign: 'center'
  });
  wind.add(textfield);
  wind.show();
});

main.on('click', 'down', function(e) {
  var card = new UI.Card();
  card.title('A Card');
  card.subtitle('Is a Window');
  card.body('The simplest window type in Pebble.js.');
  card.show();
});
