/**
 * Hack UCSC 2015!
 * Team: Don't Byte Me!
 * App: Monster Track
 * Summary: An fitness app that trains you
 *
 */
var Accel = require('ui/accel');
var UI = require('ui');
var Vector2 = require('vector2');
var steps = 0;
var monsterSteps =-50;
var death =false;
var rankCheck = [
  {
    check:5,
    rank:'Rank F: Monster Meat'
  },
  {
   check:10,
    rank:'Rank D: First to Fall'
  },
  {
   check:15,
   rank:'Rank C: Average Survivor' 
  },
  {
    check:20,
    rank:'Rank B: Apocalypse Leader'
  },
  {
    check:25,
    rank:'Rank A: Monster Overlord'
  },
  {
    check:30,
    rank:'Rank S: Nightmare Conquerer'
  },
];

var runnerSprite = [
  {
   position: new Vector2(-10,50),
   size: new Vector2(80,35),
  image: 'images/runner1.png' 
  },
  {
   position: new Vector2(-10,50),
   size: new Vector2(80,35),
  image: 'images/runner2.png' 
  },
];
/*var zombieSprite = [
  {
   position: new Vector2(60,60),
   size: new Vector2(80,35),
  image: 'images/zombie1.png' 
  },
  {
 position: new Vector2(60,60),
  size: new Vector2(80,35),
 image: 'images/zombie2.png' 
  },
];*/


var main = new UI.Card({
  title: 'Monster Track',
  icon: 'images/logo.png',
  subtitle: 'Ready to Run!',
  body:  'Brought to you by Team Dont Byte Me!'
});

main.show();


main.on('click', 'up', function(e) {    
//Initalize local variables
  Accel.init();
  var didStep = false;
  var monsterStepsDisplay = 10;
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
   var zombiepic = new UI.Image({
    position: new Vector2(50,50),
   size: new Vector2(80,35),
  image: 'images/zombie1.png' 
    }); 
   var runnerpic = new UI.Image({
  position: new Vector2(-10,50),
   size: new Vector2(80,35),
  image: 'images/runner1.png' 
  }); 
  runWind.add(runnerpic); 
    runWind.add(zombiepic); 
  
  
    runWind.add(botRect);
    runWind.add(topRect);
    runWind.add(stepsDisplay);

///////////////////Human Step Counter/////////////
  Accel.on('tap', function(e) {
    if (death === true){
   // runWind.add(deathP);
    } else {
    if (e.direction > 0){
      didStep = true;
      }else{
      didStep = true;
    }
    var runnerpic = new UI.Image({
    position: runnerSprite[1].position,
    size: runnerSprite[1].size,
    image: runnerSprite[(steps%2)].image,
    }); 
    runWind.add(runnerpic);  

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
  //  if (death === true){
  // runWind.add(deathP);
   // }
  }
console.log('accel death?: '+death);
//console.log('accel onscreen: '+runWind.index(deathP));
});
  
/////////////////Monster Step Counter//////////////////////
 function monster(){
  //updates monster stats
  var monsterSpeed = Math.floor(Math.random() * (5-1) + 1);
  monsterSteps = monsterSteps+monsterSpeed; //i.e -500+1=-499
  monsterStepsDisplay = steps-monsterSteps; //i.e 0-(-499)=499   
   
  //updates monster display 
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
   
   //Death 
    if (monsterStepsDisplay <= 0){
      death = true;
      clearInterval(monTimer);
      deathscreen();
    }
  
 //  console.log('monster onscreen: '+runWind.index(deathP));
   
 }  
 runWind.show();

//function when you get caught
 function deathscreen(){
   var rankStr;
   for (var i =0; i <= 5; i++){
     if (steps>=rankCheck[i].check){
       rankStr = rankCheck[i].rank;
     }
   }
   console.log('ranking: '+rankStr);
   var deathCard = new UI.Card({
     title:'Ran '+steps+' steps!',
     body:rankStr,
     banner: 'images/Zdeathscreen.png'
   });
   runWind.hide();
   deathCard.show();
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
