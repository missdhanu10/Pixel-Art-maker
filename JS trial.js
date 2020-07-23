// Select color input
//const submit = document.querySelector('form')
const theColor = document.getElementById("colorPicker");
const table = document.getElementById("pixelCanvas")
const size = document.getElementById("sizePicker");
const height = document.getElementById("inputHeight").value;
const width = document.getElementById("inputWidth").value;

function makeGrid(height, width) {
    //table.deleteCell(y);
    //table.remove();
    
    for(let x = 0;  x < parseInt(height); x++ ) {
        var row = table.insertRow(x);
        for(let y = 0; y < parseInt(width); y++ ) {
            var cell = row.insertCell(y);
            //width(y).style.width = "50%";
            cell.addEventListener("click", function() {
                cell.style.backgroundColor = "Red";
            });
        }
    }

}

size.addEventListener("submit", function(event){
    event.preventDefault();
    makeGrid(height, width);
    table.remove();
});
//size.submit=makeGrid;
//size.childNodes.addEventListsener(onclick,makeGrid);
//console.log("Crazy wife");


/*size.addEventListener("click", makeGrid);
    //event.preventDefault();
    console.log("The submit was clicked");
    document.getElementById("sizePicker").style.backgroundColor = "red";
*/

// Select size input


// When size is submitted by the user, call makeGrid()

//function makeGrid() {

// Your code goes here!


