/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */
var Accel = require('ui/accel');
var UI = require('ui');
var Vector2 = require('vector2');
var runners = [
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
  ];

var main = new UI.Card({
  title: 'Monster Track',
  icon: 'images/photo.png',
  subtitle: 'Press Up to Run!',
  body:  'Team Dont Byte Me'
});

main.show();

main.on('click', 'up', function(e) {
 var runMenu = new UI.Menu({
    sections:[{
      title: 'Pick Your Run',
      items: runners
   }]
   });
  
runMenu.on('select', function(event){
    Accel.init();
  Accel.on('tap', function(e) {
    console.log('tapevent on axis:', + e.axis + ' and direction: ' + e.direction);
  }); 
    var runWind = new UI.Window();
    var topRect = new UI.Rect({
      position: new Vector2(10,5),
      size: new Vector2(124,30),
      backgroundColor:'black'
      });
    var bgRect = new UI.Rect({
      position: new Vector2(0,0),
      size: new Vector2(144,168),
      backgroundColor:'white'
      });
    var steps = e.direction;
    var stepsDisplay = new UI.Text({
      position: new Vector2(10,5),
      size: new Vector2(124,20),
      text: steps,
      color: 'white',
      textAlign: 'center'
    });
    runWind.add(bgRect);
    runWind.add(topRect);
    runWind.add(stepsDisplay);
    runWind.show();
    });
  
  runMenu.show();
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
