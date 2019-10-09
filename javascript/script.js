
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
  
  })([`<p>Salim</p><img src="img/salim1.png ">`, `<p>Hervé</p><img src="img/herve1.png ">`, `<p>Andréa</p><img src="img/andrea1.png ">`,`<p>Hadibéré</p><img src="img/hadibere1.png ">`,`<p>Mohamed K</p><img src="img/mohamedK1.png ">`, `<p>Mohamed S</p><img src="img/mohameds1.png ">`,`<p>Sika</p><img src="img/sika1.png ">`,`<p>Audrey</p><img src="img/audrey1.png ">`, `<p> Amel</p><img src="img/amel1.png ">`,`<p>Yannick</p><img src="img/yannick1.png ">`,`<p>Quentin</p><img src="img/quentin.png ">`]);
  
  
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
document.getElementById("contactform").addEventListener("click", () => {
  contactHtml();
});

/*list names
let input = document.getElementById('name');
var form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  _currentItems.push(input.value);
  console.log(_currentItems);
});*/

function infoHtml(){
const infoList = document.querySelector('.test');
infoList.innerHTML =`<div class="grid-container">
        <div class="left">
          <div id="info" class="titre">
            <h2> Ils sont dix et DÉTERMINÉS</h2>
          </div>
          <div  class="txt">Cliquez parmi une liste de 10 développeurs en devenir, motivé(e)s, passionné(e)s, acharné(e)s, déterminé(e)s, courageux(ses), vaillant(e)s, aux profils divers et atypiques. A chaque click apparaîtra, au bout de 3 secondes, un nom au hasard. <strong>Maintenant à vous de jouer!!!</strong></div>
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
function contactHtml(){
  const formContact = document.querySelector('.test');
  formContact.innerHTML =`<div class="grid-container2">
  <div class="formaera">
              <h2>Contactez-nous</h2>
              <form action="https://formspree.io/unicorncat.r.us@gmail.com" method="POST">
                <p><label>E-mail :</label>
                  <input type="email" name="email" class="email" /></p>
                <p><label> Sujet : </label>
                  <input type="text" name="subject" class="subject"></p>
                <p><label id="contact">Message : </label>
                  <textarea name="message" class="message" cols="30" rows="3"></textarea></p>
                <p><button type="submit" class="submit">Envoyer</button></p>
              </form>
            </div>
            <div class="hand2">
              <div class="laissez"><img src="img/main2.png" width="100%" height="auto" alt="main">
              </div>
            </div>
          </div>
</div>`;
  }
$(document).ready(function (){
  $('.submit').click(function (event) {
     console.log('Clicked button')
     var email = $('.email').val()
     var subject = $('.subject').val()
     var message = $('.message').val()
     var statusElm = $('.status')
     statusElm.empty()
     if(email.length > 5 && email.includes('@') && email.includes('.')) {
       statusElm.append('<div>Email is valid</div>')
  } else  {
        event.preventDefault()
        statusElm.append('<div>Email is not valid</div>')
  }
   if(subject.length >= 2) {
        statusElm.append('<div>Subject is valid</div>')
   } else {
      event.preventDefault()
       statusElm.append('<div>Subject is not valid</div>')
   }
   if(message.length >= 10) {
       statusElm.append('<div>Message is valid</div>')
   } else {
      event.preventDefault()
       statusElm.append('<div>Message is not valid</div>')
   }
 })
})
