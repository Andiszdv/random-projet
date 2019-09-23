
/*random*/
function _shuffle (array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array;
}
function clickRandom() {
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
})(["MOHAMED S.","MOHAMED K.","HERVÉ","SALIM","ANDRÉA","HADIBÉRÉ","YANNICK","AUDREY","SIKA","AMEL"]);

/*trigger btn*/
document.getElementById("noms").innerHTML = randomItem;
let element = document.getElementById("cellphone");
element.classList.add("motion");
setTimeout(function(){noms.style.filter = "blur()"; }, 3000);
element.style.animation = 'motion';

/* trigger reflow */
element.offsetHeight; 
noms.offsetHeight;
element.style.animation = null; 
noms.style.filter = null;
}
/*click*/ 
document.getElementById("callTOaction").addEventListener("click", () => {
  clickRandom();
  
});


