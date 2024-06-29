chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs){
  var url = String(tabs[0].url)
  if (url.includes("https://onq.queensu.ca/d2l/lms/grades/my_grades")){
    chrome.runtime.sendMessage({action: "getGrades()"}
    )
  }
})
