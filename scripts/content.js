const grid = document.getElementsByClassName("d2l-table d2l-grid d_gl");
const myTable = grid[0];
const numRows = myTable.rows.length;
var weightIndex; 
var weightsList = []; 

var tempWeight;
var tempFloatWeight;
var sumWeight = 0; 


/*var rows = myTable.getElementsByTagName('tr');
rows = Array.from(rows);
rows.forEach(function(row) {
  if (row.classList.contains('d_ggl1')) {
    row.parentNode.removeChild(row);
  }
});
*/

for (i = 1; i < numRows; i++){
    weightIndex = 2; 
    if (myTable.rows[i].cells[0].innerText.trim() === ''){
        weightIndex = 3; 
    }
    if (!myTable.rows[i].classList.contains('d_ggl1')){
        weightsList[i] = myTable.rows[i].cells[weightIndex].innerText; 
        tempWeight = weightsList[i].split(" / ")[0];
        tempFloatWeight = parseFloat(tempWeight);
        sumWeight = sumWeight + tempFloatWeight; 
    }
}

sumWeight = sumWeight.toFixed(2);

chrome.storage.local.set({ number: sumWeight }, () => {
});