_currentItems=[];
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
});

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

let form = document.querySelector('form');

form.addEventListener('submit', e =>{
  e.preventDefault();
  const name = form.name.value;

  name.value.push(_currentItems)
})

//the photo upload pour noms input
/*const input = document.getElementById("item");
const submitButton = document.getElementById("submit");

const list = document.getElementById("list");
const generateButton = document.getElementById("generate");
const generated = document.getElementById("generated");

let itemsArray = [];

submitButton.addEventListener("click", () => {
	let itemName = input.value;

	if (itemName != "") {
		itemsArray.push(itemName);
		let itemElem = document.createElement("div");
		itemElem.classList.add("list-item");
		itemElem.innerText = itemName;
		list.appendChild(itemElem);
		input.value = "";
		return;
	}

	alert("Please enter an item");
});

generateButton.addEventListener("click", () => {
	generated.innerText = itemsArray[randomIndex(0, itemsArray.length)];
});
