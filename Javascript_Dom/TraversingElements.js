//Get parent elements
const note = document.querySelector(".note");
console.log(note.parentNode);

//Get child elements
const parentElement = document.querySelector("#menu");
let child = parentElement.firstChild.nodeName;
console.log(child); //text

//Get siblings of an element
