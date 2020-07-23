// DOM Elements of HTML 
const table = document.getElementById("pixelCanvas")
const size = document.getElementById("sizePicker");
const height = document.getElementById("inputHeight");
const width = document.getElementById("inputWidth");

// getting size for table and adding color to selected cell 
function makeGrid(height, width) {
	for (let x = 0; x < height; x++) {
		var row = table.insertRow(x);
		for (let y = 0; y < width; y++) {
			var cell = row.insertCell(y);
			cell.addEventListener("click", function (event) {
				const theColor = document.getElementById("colorPicker").value;
				event.target.style.backgroundColor = theColor;
			});
		}
	}
}
// event listener function to Submit button
size.addEventListener("submit", function (event) {
	event.preventDefault();
	table.innerHTML = "";
	makeGrid(height.value, width.value);
});