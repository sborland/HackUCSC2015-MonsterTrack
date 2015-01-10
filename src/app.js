/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var Vector2 = require('vector2');
var runners = [
    {
      title:"Zombie Run",
      subtitle:'slow and easy',
      icon: 'images/photo.png'
    },
    {
      title:"Werewolf Run",
      subtitle:'nice and steady',
      icon: 'images/photo.png'
    },
    {
     title:"Vampire Run",
      subtitle:'fast and hard',
      icon: 'images/photo.png' 
    } 
  ];

var main = new UI.Card({
  title: 'Monster Track',
  icon: 'images/photo.png',
  subtitle: 'Press Button to Run!',
  body:  'Team Byte Me'
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
    var detailCard = new UI.Card({
    title: 'test',
    body: 'testing'
    });
  detailCard.show();
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
