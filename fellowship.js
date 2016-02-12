console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];



var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.body;

var makeMiddleEarth = function () {
var createMe = document.createElement('section');

createMe.setAttribute('id', 'middle-earth');
for (var i = 0; i < lands.length; i++) {
var createLands = document.createElement('article');
createLands.innerText = lands[i];
createMe.appendChild(createLands);
   // create a section tag with an id of `middle-earth`
   // add each land as an `article` tag
   // inside each `article` tag include an `h1` with the name of the land
}    // append `middle-earth` to your document `body`
body.appendChild(createMe);
return body;
};

makeMiddleEarth();

var makeHobbits = function () {
var shire = document.getElementsByTagName('article')[0];

for (var i = 0; i < hobbits.length; i++) {
  var createHobbits = document.createElement('ul');
  createHobbits.setAttribute('class', 'The-Hobbits');
  createHobbits.innerText = hobbits[i];
  shire.appendChild(createHobbits);
  }
};
makeHobbits();

//
// var keepItSecretKeepItSafe = function () {
// var frodo = document.getElementsByTagName('class')[0];
//
//   var ring = document.createElement('div');
//   ring.setAttribute('id', 'The-Ring');
//   ring.innerText = ('ring');
//   frodo.appendChild(ring);
//
// };
// keepItSecretKeepItSafe();

var makeBuddies = function () {
var rivendell = document.getElementsByTagName('article')[1];

for (var i = 0; i < buddies.length; i++) {
  var friends = document.createElement('aside');
  friends.setAttribute('ul', 'buddies');
  friends.innerText = buddies[i];
  rivendell.appendChild(friends);
}
   // create an `aside` tag
   // attach an `unordered list` of the `'buddies'` in the aside
   // insert your aside as a child element of `rivendell`
}; makeBuddies();






var leaveTheShire = function () {

   // assemble the `hobbits` and move them to `rivendell`
   var rivendellTwo = document.getElementsByTagName('article')[1];

   for (var i = 0; i < hobbits.length; i++) {

     var createHobbits = document.createElement('ul');
     createHobbits.setAttribute('class', 'The-Hobbits');
     createHobbits.innerText = hobbits[i];
     rivendellTwo.appendChild(createHobbits);
   }
 }; leaveTheShire();

var forgeTheFellowShip = function () {

  var  rivendellThree = document.getElementsByTagName('article')[1];

  for (var i = 0; i < hobbits.length; i++) {
    var createHobbits = document.createElement('div');
    createHobbits.setAttribute('id', 'the-fellowship');
    createHobbits.innerText = hobbits[i];
    rivendellThree.appendChild(createHobbits);
  }
  var  rivendellFour = document.getElementsByTagName('article')[1];

  for (var i = 0; i < buddies.length; i++) {
    var createBuddies = document.createElement('div');
    createBuddies.setAttribute('id', 'the-fellowship');
    createBuddies.innerText = buddies[i];
    rivendellFour.appendChild(createBuddies);
}
alert("The Buddies and Hobbits have joined your team!");
}; forgeTheFellowShip();



var theBalrog = function () {

    var changeNameTwo = document.getElementsByTagName('div')[4];
    changeNameTwo.innerText = 'Gandalf the White';
   // change the `'Gandalf'` text to `'Gandalf the White'`
   // apply the following style to the element, make the // background 'white', add a grey border
}; theBalrog();


var hornOfGondor = function () {
alert("The Horn of Gondor has been blown! Boromir's been killed by the Uruk-hai!");

var death = document.getElementById('the-fellowship')[8];
// the-fellowship.removeChild(createBuddies);

   // pop up an alert that the horn of gondor has been blown
   // Boromir's been killed by the Uruk-hai!
   // Remove `Boromir` from the Fellowship
}; hornOfGondor();

var itsDangerousToGoAlone = function (){
  var frodoSam = document.getElementsByTagName('article')[2];
  var leave = document.createElement('div');
  leave.setAttribute('id', 'mount-doom');
  leave.innerText = 'Frodo and Sam.';
  frodoSam.appendChild(leave);
   // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
   // add a div with an id of `'mount-doom'` to `Mordor`
}; itsDangerousToGoAlone();

 var weWantsIt = function () {

   // Create a div with an id of `'gollum'` and add it to Mordor
   // Remove `the ring` from `Frodo` and give it to `Gollum`
   // Move Gollum into Mount Doom
};

var thereAndBackAgain = function () {
  var  shireTwo = document.getElementsByTagName('article')[1];

  for (var i = 0; i < hobbits.length; i++) {
    var createHobbits = document.createElement('div');
    createHobbits.setAttribute('id', 'the-fellowship');
    createHobbits.innerText = hobbits[i];
    rivendellThree.appendChild(createHobbits);
  }
   // remove `Gollum` and `the Ring` from the document
   // Move all the `hobbits` back to `the shire`
};






// // mordor.removeChild(Gollum);
