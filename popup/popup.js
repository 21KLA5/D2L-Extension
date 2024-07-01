chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs){
  var url = String(tabs[0].url)
  var header = document.getElementById("text");
  if (url.includes("https://onq.queensu.ca/d2l/lms/grades/my_grades")){ 
    header.textContent = "What would you like to do? "
  }else{
    header.textContent = "No Data Found!\n You may be on the wrong page.\n Please navigate to onQ grades tab!"; 
    document.getElementById("myButton1").style.display = 'none';
    document.getElementById("myButton2").style.display = 'none';
    document.getElementById("myButton3").style.display = 'none';
  }


  document.getElementById('myButton1').addEventListener('click', function() {
    chrome.storage.local.get(['number1'], function(result) {
      if (result.number1) {
        var button1 = document.getElementById("myButton1");
        button1.textContent = result.number1 + '%';
        button1.id = "normalButton"; 

      } else {
        document.getElementById("myButton1").textContent = "No data found";
      }
    });
  })

  document.getElementById('myButton3').addEventListener('click', function() {
    chrome.storage.local.get(['number3'], function(result) {
      if (result.number3) {
        var button1 = document.getElementById("myButton3");
        button1.textContent = result.number3;
        button1.id = "normalButton"; 

      } else {
        document.getElementById("myButton3").textContent = "No data found";
      }
    });
  })
  
});

  


