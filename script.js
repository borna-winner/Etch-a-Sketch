// eslint-disable-next-line prettier/prettier
// make gridContainer useable, 
const gridContainer = document.querySelector("#gridContainer"); 
const divColor = document.querySelectorAll("#divBlock");

function createGrid(){
    for(let i = 0; i<255; i += 1){    
    // create div with id and classname on variable(div)
        const divBlock = document.createElement('div');
        divBlock.id = 'blockGrid';
        divBlock.className = 'colorpad';
        gridContainer.append(divBlock);
    }
}
createGrid()
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i += 1) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
function setRandomColor() {
    for(let i = 0; i <255; i += 1){

        let colorPad = document.getElementsByName("colorpad").css("background-color", getRandomColor());

    }
}

divColor.addEventListener("mouseover",(setRandomColor()));


