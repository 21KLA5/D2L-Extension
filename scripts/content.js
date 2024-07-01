//Calculate Current Grade Functionality

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

var gpa; 
if (sumWeight <50){
    gpa = "F";
}else if (sumWeight >= 50 && sumWeight < 53 ){
    gpa = "D-";
}else if (sumWeight >= 53 && sumWeight < 57){
    gpa ="D";
}else if (sumWeight >= 57 && sumWeight < 60){
    gpa = "D+";
}else if (sumWeight >= 60 && sumWeight < 63){
    gpa = "C-";
}else if (sumWeight >= 63 && sumWeight < 67){
    gpa = "C";
}else if (sumWeight >= 67 && sumWeight < 70){
    gpa ="C+";
}else if (sumWeight >= 70 && sumWeight < 73){
    gpa = "B-";
}else if (sumWeight >= 73 && sumWeight < 77){
    gpa = "B";
}else if (sumWeight >= 77 && sumWeight < 80){
    gpa = "B+";
}else if (sumWeight >= 80 && sumWeight < 85){
    gpa = "A-";
}else if (sumWeight >= 85 && sumWeight < 90){
    gpa = "A";
}else{
    gpa="A+";
}

console.log(sumWeight, gpa);
chrome.storage.local.set({ number1: sumWeight }, () => {
});

chrome.storage.local.set({ number3: gpa }, () => {
});