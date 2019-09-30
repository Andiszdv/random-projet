
_currentItems=[];
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
  })(["MOHAMED S.", "MOHAMED K.", "HERVÉ", "SALIM", "ANDRÉA", "HADIBÉRÉ", "YANNICK", "AUDREY", "SIKA", "AMEL"]);

var randomItem  = (function(allItems){
  var _key = "array";
  var _currentItems = [];
  try {
    _currentItems = JSON.parse(localStorage.getItem(_key) || "[]");
  } catch (e) {
    _currentItems = [];
  }
  if (!Array.isArray(_currentItems) || _currentItems.length === 0 ) {
    console.log("resetting");
    _currentItems = _shuffle(allItems.slice());
  }
  var _selectedItem = _currentItems.pop();
  localStorage.setItem(_key, JSON.stringify(_currentItems));
  return _selectedItem;
});

/*trigger btn*/
document.getElementById("noms").innerHTML = randomItem;
let element = document.getElementById("cellphone"); 
element.classList.add("motion");
const displayNone = document.querySelector('.logoanim');
setTimeout(function(){noms.style.filter = "blur()"; }, 3000);
element.style.animation = 'motion';
console.log(displayNone.style.visibility);
displayNone.style.visibility = "hidden";


/* trigger reflow */ 
noms.offsetHeight;
element.offsetHeight; 
element.style.animation = null; 
noms.style.filter = null;



}
/*click*/
document.getElementById("callTOaction").addEventListener("click", () => {
  clickRandom();

});

document.getElementById("callTOaction").addEventListener("mouseout", () => {
  displayNone.style.visibility = "visible";

});

var form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let input = document.getElementById('name');
  _currentItems.push(input.value);
  console.log(_currentItems);
});


  name.value.push(_currentItems)
})

