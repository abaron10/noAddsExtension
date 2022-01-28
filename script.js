var button = document.getElementById('ID')
if (button){
    button.addEventListener('click', remove);
}
function remove(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        if (tabs[0].url.includes("youtube.com")){
            document.getElementById("ID").style.display = 'none';
            document.getElementById('round').style.display = "unset";
            
            chrome.scripting.executeScript({
                target: {tabId: tabs[0].id, allFrames: true},
                files: ['popup.js'],
            });
        }
        else{
            document.getElementById("ID").style.display = 'none';
            document.getElementById('notIn').style.display = "unset";
        }
       
    });   
}