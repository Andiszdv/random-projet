
/*random*/
let _key = "array";

function _shuffle(array) {
  for (i = array.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
/*var form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let input = document.getElementById('name');
  _currentItems.push(input.value);
  console.log(_currentItems);
});*/
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
  
  })(["  salim", "  Hervé", "  Andrea","Hadibéré", "Mohamed K", "Mohamed S","   Sika", "  Audrey", "   Amel","Yannick"]);
  
  
/*trigger btn*/


document.getElementById("noms").innerHTML = randomItem;
const element = document.getElementById("cellphone"); 
element.classList.add("motion");
const element2 = document.querySelector(".secouezmoi"); 
element2.classList.add("motion2");

setTimeout(function(){noms.style.filter = "blur()"; }, 3000);
element.style.animation = 'motion';
element2.style.animation = 'motion2';




/*const personnage1 = document.querySelector('.container')
personnage1.innerHTML += `<div class="slideoutX"><img src="../img/personnages.png" alt="personnages"></div>`;*/

/*for(let k = 0; k < _currentItems.length; k++ ){
  let html = `<div> Bonjour ${_currentItems[k]}</div>`;
  document.getElementById("noms").innerHTML = `Bonjour ${_currentItems[k]}`;

  console.log(html);
};/*



/* trigger reflow */ 
noms.offsetHeight;
element.offsetHeight; 
element.style.animation = null;
element2.offsetHeight; 
element2.style.animation = null;  
noms.style.filter = null;
/*setTimeout(function(){personnage1.innerHTML  = `<div></div>`; }, 1000);*/





}
/*click*/
document.getElementById("callTOaction").addEventListener("click", () => {
  clickRandom();
});
document.getElementById("information").addEventListener("click", () => {
  infoHtml();
});
document.getElementById("iconeinfo").addEventListener("click", () => {
  infoHtml();
});

/*list names
let input = document.getElementById('name');
var form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  _currentItems.push(input.value);
  console.log(_currentItems);
});*/

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
function infoHtml(){
const essai = document.querySelector('.test');
essai.innerHTML =`<div class="grid-container">
        <div class="left">
          <div id="info" class="titre">
            <h2> Ils sont dix et DÉTERMINÉS</h2>
          </div>
          <div  class="txt">Cliquez parmi une liste de 10 développeurs en devenir, motivé(e)s, passionné(e)s, acharné(e)s, déterminé(e)s, courageux(ses), vaillant(e)s, aux profils divers et atypiques. A chaque click apparaîtra, au bout de 3 secondes, un nom au hasard. Maintenant à vous de jouer!!!</div>
        </div>
        <div  class="fo1"><img src="img/hadibere.png"  alt="Hadibéré"><p>Hadibéré</p></div>
        <div class="fo2"><img src="img/amel.png"  alt="Amel"><p>Amel</p></div>
        <div class="fo4"><img src="img/yannick.png"  alt="Yannick"><p>Yannick</p></div>
        <div  class="fo5"><img src="img/andrea.png" alt="Andréa"><p>Andréa</p></div>
        <div class="fo3"><img src="img/mohameds.png"  alt="Mohamed S"><p>Mohamed S</p></div>
        <div class="fo6"><img src="img/sika.png" alt="Sika"><p>Sika</p></div>
        <div class="fo7"><img src="img/mohamedk.png" alt="Mohamed K"><p>Mohamed K</p></div>
        <div class="fo8"><img src="img/salim.png" alt="Salim"><p>Salim</p></div>
        <div class="fo9"><img src="img/audrey.png" alt="Audrey"><p>Audrey</p></div>
        <div class="fo10"><img src="img/herve.png" alt="Hervé"><p>Hervé</p></div>
      </div>`;
}
