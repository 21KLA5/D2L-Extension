chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs){
  var url = String(tabs[0].url)
  var header = document.getElementById("text");
  if (url.includes("https://onq.queensu.ca/d2l/lms/grades/my_grades")){ 
    header.textContent = "Click below to find out your grade in this class: "
  }else{
    header.textContent = "Please navigate to onQ grades tab!"; 
    document.getElementById("myButton").style.display = 'none';
  }


  document.getElementById('myButton').addEventListener('click', function() {
    console.log('test');
    // Retrieve the stored data when the popup is loaded
    chrome.storage.local.get(['number'], function(result) {
      if (result.number) {
        document.getElementById("grades").textContent = result.number;
      } else {
        document.getElementById("grades").textContent = "No data found";
      }
    });
  })

  
});

  


