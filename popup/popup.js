chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs){
  var url = String(tabs[0].url)
  var header = document.getElementById("text");
  if (url.includes("https://onq.queensu.ca/d2l/lms/grades/my_grades")){ 
    header.textContent = "calculating grade in course..."
  }else{
    header.textContent = "navigate to onQ grades tab!"; 
  }
})
