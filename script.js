

// setInterval(function(){
//     var skip = document.getElementsByClassName("ytp-ad-text ytp-ad-skip-button-text");
//     if(skip != undefined && skip.length > 0){
//         console.log("Add");
//         skip[0].click();
//     }
// },3000)
document.getElementById('ID').addEventListener('click', remove);

function remove(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // query the active tab, which will be only one tab
        //and inject the script in iit
        document.getElementById("ID").style.display = 'none';
        document.getElementById('round').style.display = "unset";
        chrome.tabs.executeScript(tabs[0].id, {file: "popup.js"});
    });
    
}