/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var Vector2 = require('vector2');

var main = new UI.Card({
  title: 'Monster Track',
  icon: 'images/photo.png',
  subtitle: 'Press Button to Run!',
  body:  'Team Byte Me'
});

main.show();

main.on('click', 'up', function(e) {
  var runMenu = new UI.Menu({
    sections: [{
      items: [{
        title: 'Test Run',
        icon: 'images/menu_icon.png',
        subtitle: 'Tester Stuff' }, 
      
     {
        title: 'Second Item',
        subtitle: 'Subtitle Text'
      }]
    }]
  });
  runMenu.on('select', function(e) {
    console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
    console.log('The item is titled "' + e.item.title + '"');
  });
  
  runMenu.on('select', function(event){
    var window = new UI.Window();
    var bgRect = new UI.Rect({
      position: new Vector2(10,20),
      size: new Vector2(124, 60),
      backgroundColor: 'white'
    });
    window.add(bgRect);
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
