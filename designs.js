// Select color input
//const submit = document.querySelector('form')
const theColor = document.getElementById("colorPicker").value;
const table = document.getElementById("pixelCanvas")
const size = document.getElementById("sizePicker");
const height = document.getElementById("inputHeight");
const width = document.getElementById("inputWidth");

function makeGrid(height, width) {
    //table.deleteCell(y);
    //table.remove();
    
    for (let x = 0;  x < height; x++ ) {
        var row = table.insertRow(x);
        for(let y = 0; y < width; y++ ) {
            var cell = row.insertCell(y);
            //cell.width = '50';
            cell.addEventListener("click", function(event) {
                const theColor = document.getElementById("colorPicker").value;
                event.target.style.backgroundColor = theColor;
            });
        }
    }

}
size.addEventListener("submit", function(event){
    event.preventDefault();
    makeGrid(height.value, width.value);
    //table.remove();
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


