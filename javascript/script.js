// js pour navbar
var open = document.getElementById('hamburger');
var changeIcon = true;

open.addEventListener("click", function(){

    var overlay = document.querySelector('.overlay');
    var nav = document.querySelector('nav');
    var icon = document.querySelector('.menu-toggle i');

    overlay.classList.toggle("menu-open");
    nav.classList.toggle("menu-open");

    if (changeIcon) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");

        changeIcon = false;
    }
    else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        changeIcon = true;
    }
});
//fin js pour navbar


/*random*/
let _key = "array";
let _currentItems = [];
function _shuffle(array) {
  for (i = array.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
var form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let input = document.getElementById('name');
  _currentItems.push(input.value);
  console.log(_currentItems);
});
function clickRandom() {
  let randomItem = (function (allItems) {
    try {
      _currentItems = JSON.parse(localStorage.getItem(_key) || "[]");
    } catch (e) {
      _currentItems = [];
    }
    if (!Array.isArray(_currentItems) || _currentItems.length === 0) {
      console.log("resetting");
      _currentItems = _shuffle(allItems.slice());
    }
    let _selectedItem = _currentItems.pop();
    localStorage.setItem(_key, JSON.stringify(_currentItems));
    return _selectedItem;
  })(_currentItems);


/*trigger btn*/
const personnage1 =  document.querySelector('.container');
personnage1.innerHTML += `<div class="slideoutX"><img src="../img/personnages.png" alt="personnages"></div>`;


document.getElementById("noms").innerHTML = randomItem;
let element = document.getElementById("cellphone"); 
element.classList.add("motion");
let element2 = document.querySelector(".secouezmoi"); 
element2.classList.add("motion2");
setTimeout(function(){noms.style.filter = "blur()"; }, 3000);
element.style.animation = 'motion';
element2.style.animation = 'motion2';

/*const displayNone = document.querySelector('.logoanim');
console.log(displayNone.style.visibility);
displayNone.style.visibility = "hidden";*/


/* trigger reflow */ 
noms.offsetHeight;
element.offsetHeight; 
element.style.animation = null;
element2.offsetHeight; 
element2.style.animation = null;  
noms.style.filter = null;




}
/*click*/
document.getElementById("callTOaction").addEventListener("click", () => {
  clickRandom();

});

/*document.getElementById("callTOaction").addEventListener("mouseout", () => {
  displayNone.style.visibility = "visible";

});*/
let input = document.getElementById('name');
var form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  _currentItems.push(input.value);
  console.log(_currentItems);
});

/*shake phone */
let shakeEvent = new Shake({threshold: 15});
shakeEvent.start();
window.addEventListener('shake', function(){
  clickRandom();

}, false);

//stop listening
function stopShake(){
    shakeEvent.stop();
}

