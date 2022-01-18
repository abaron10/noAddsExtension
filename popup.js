

function test(){
    setInterval(function(){
    var skip = document.getElementsByClassName("ytp-ad-text ytp-ad-skip-button-text");
    if(skip != undefined && skip.length > 0){
        console.log("Add");
        skip[0].click();
    }
},3000)
}

test();