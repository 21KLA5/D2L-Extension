const grid = document.getElementsByClassName("d2l-table d2l-grid d_gl");
console.log(grid);

// Store the data in chrome.storage.local
chrome.storage.local.set({ number: grid }, () => {
  console.log("Grade stored");
});