//Calculate Current Grade Functionality

const grid = document.getElementsByClassName("d2l-table d2l-grid d_gl");
const myTable = grid[0];
const numRows = myTable.rows.length;
var weightIndex; 
var weightsList = []; 

var tempWeight;
var tempTotalWeight = 0; 
var tempFloatWeight;
var sumWeight = 0; 
var totalWeight; 


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

        //For the current grades part

        totalWeight = parseFloat(weightsList[i].split(" / ")[1]);
        if (isNaN(totalWeight) || tempWeight == 0){
            totalWeight = 0; 
        }
        tempTotalWeight = tempTotalWeight + totalWeight;
        
    }   
}


var currentGrade = (sumWeight/tempTotalWeight) * 100; 
currentGrade = currentGrade.toFixed(2);

sumWeight = sumWeight.toFixed(2);

var gpa; 
if (sumWeight <50){
    gpa = "F : 0.0";
}else if (sumWeight >= 50 && sumWeight < 53 ){
    gpa = "D- : 0.7";
}else if (sumWeight >= 53 && sumWeight < 57){
    gpa ="D : 1.0";
}else if (sumWeight >= 57 && sumWeight < 60){
    gpa = "D+ : 1.3";
}else if (sumWeight >= 60 && sumWeight < 63){
    gpa = "C- : 1.7";
}else if (sumWeight >= 63 && sumWeight < 67){
    gpa = "C : 2.0";
}else if (sumWeight >= 67 && sumWeight < 70){
    gpa ="C+ : 2.3";
}else if (sumWeight >= 70 && sumWeight < 73){
    gpa = "B- : 2.7";
}else if (sumWeight >= 73 && sumWeight < 77){
    gpa = "B : 3.0";
}else if (sumWeight >= 77 && sumWeight < 80){
    gpa = "B+ : 3.3";
}else if (sumWeight >= 80 && sumWeight < 85){
    gpa = "A- : 3.7";
}else if (sumWeight >= 85 && sumWeight < 90){
    gpa = "A : 4.0";
}else{
    gpa="A+ : 4.3";
}
*/

chrome.storage.local.set({ number1: sumWeight }, () => {
});

chrome.storage.local.set({ number2: gpa }, () => {
});

chrome.storage.local.set({ number3: currentGrade }, () => {
});

