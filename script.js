
document.getElementById('ID').addEventListener('click', remove);
function remove(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        document.getElementById("ID").style.display = 'none';
        document.getElementById('round').style.display = "unset";
        chrome.tabs.executeScript(tabs[0].id, {file: "popup.js"});
    });
    
}