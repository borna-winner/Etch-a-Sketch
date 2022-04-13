const gridContainer = document.querySelector("#gridContainer");
function createGrid(){
    for(let i = 0; i<255; i += 1){    
    // create div with id and classname on variable(div)
        let divBlock = document.createElement('div');
        divBlock.className = 'blockGrid';
        gridContainer.append(divBlock);
}
}
createGrid()

function addEvent(){
  const squares = document.querySelectorAll('.blockGrid');
  squares.forEach(squares => squares.addEventListener('mouseover', changeColor));



}
addEvent()

let elements = document.getElementsByClassName('blockGrid');


for (let i = 0; i < elements.length; ++i) {
 elements[i].addEventListener('mouseover', changeColor)  
}

function changeColor() {
    this.style.backgroundColor = color[Math.floor(Math.random() * color.length)];
}
let color = [, "#3C9EE7", "#E7993C",
            "#E73C99", "#3CE746", "#E7993C"];
