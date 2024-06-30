const grid = document.getElementsByClassName("d2l-table d2l-grid d_gl");
const myTable = grid[0];
const numRows = myTable.rows.length;
const weightIndex = 2; 
const headerRow = myTable.rows[1];

console.log(headerRow.cells[weightIndex].innerText); 

// Store the data in chrome.storage.local
chrome.storage.local.set({ number: grid }, () => {
});