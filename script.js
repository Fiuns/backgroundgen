var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var il = document.querySelector("li");
var del = document.getElementsByClassName("Selected");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var bu = document.createElement("button");
	bu.appendChild(document.createTextNode("Delete"));
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(bu);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function strikeThrough(e){
	
	if (e.target.tagName === 'LI'){
		e.target.classList.toggle("done");
	}
	else if (e.target.tagName === 'BUTTON'){
		     e.target.parentNode.parentNode.removeChild(e.target.parentNode);
		}
	
	
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", strikeThrough);