////make gridContainer useable, 
const gridContainer = document.querySelector("#gridContainer"); 
const body = document.body;
function createGrid(){
    for(let i = 0; i<255; i++){    
    ////create div with id and classname on variable(div)
        let divBlock = document.createElement('div');
        divBlock.id = 'blockGrid';
        divBlock.className = 'block';
        ///make div a child of gridContainer
        gridContainer.append(divBlock);
    }
}
createGrid()        