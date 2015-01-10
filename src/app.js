/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */
var Accel = require('ui/accel');
var UI = require('ui');
var Vector2 = require('vector2');
var steps = 0;
var monsterSteps =-50;
var death =false;

var main = new UI.Card({
  title: 'Monster Track',
  icon: 'images/photo.png',
  subtitle: 'Ready to Run!',
  body:  'Team Dont Byte Me'
});

main.show();


main.on('click', 'up', function(e) {    
//Initalize local variables
  Accel.init();

  var didStep = false;
  var monTimer = setInterval(function () {monster()}, 1000);

  var runWind = new UI.Window();
  var topRect = new UI.Rect({
   position: new Vector2(10,5),
  size: new Vector2(124,30),
    backgroundColor:'black'
    });
  var botRect = new UI.Rect({
    position: new Vector2(10,110),
    size: new Vector2(124,30),
    backgroundColor:'black'
    });
  var bgRect = new UI.Rect({
    position: new Vector2(0,0),
    size: new Vector2(144,168),
    backgroundColor:'white'
    });
  var stepsDisplay = new UI.Text({
    position: new Vector2(10,5),
    size: new Vector2(124,20),
    text: 'START RUNNING!',
    color: 'white',
    textAlign: 'center'
    });
    
    runWind.add(bgRect);
  
  ////////////////Sprite Images on Screen//////////////////
  var runner1pic = new UI.Image({
    position: new Vector2(-10,60),
    size: new Vector2(80,35),
    image: 'images/runner1.png'
  });  
  var deathP = new UI.Image({
    position: new Vector2(0,0),
    size: new Vector2(144,160),
    image: 'images/werewolfdead.png'
  });  
  runWind.add(runner1pic);
  
  
    runWind.add(botRect);
    runWind.add(topRect);
    runWind.add(stepsDisplay);
    //runWind.show();

///////////////////Human Step Counter/////////////
  Accel.on('tap', function(e) {
   // if (death === true){
   // }else {
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
      text: 'you ran '+(steps+1)+' steps!',
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
  //  }
  });
  
/////////////////Monster Step Counter//////////////////////
 function monster(){
  var monsterSpeed = Math.floor(Math.random() * (5-1) + 1);
  monsterSteps = monsterSteps+monsterSpeed; //i.e -500+1=-499
  var monsterStepsDisplay = steps-monsterSteps; //i.e 0-(-499)=499   
    runWind.remove(botRect);
    runWind.add(botRect);
    var monsterDisplay = new UI.Text({
      position: new Vector2(10,110),
      size: new Vector2(124,20),
      font: 'gothic-14',
      text: 'evil zombie is '+monsterStepsDisplay+' steps away!',
      color: 'white',
      textAlign: 'center'
      }); 
    runWind.remove(monsterDisplay);
    runWind.add(monsterDisplay);
    if (monsterStepsDisplay <= 0){
      clearInterval(monTimer);
      runWind.add(deathP);
    }
    runWind.show();
   console.log('human steps: '+steps+' -monstersteps: '+monsterSteps);
   console.log('monster steps display: '+ monsterStepsDisplay); 
   
 }   
});




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
