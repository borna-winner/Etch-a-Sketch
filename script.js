const body = document.body
const div = document.createElement("div")
function createGrid(){
    for(let i = 0; i<16; i++){
        document.createElement("div")
        div.setAttribute('id', 'blockGrid');
        body.append(div);
    }
}
createGrid()        