function dropDown() {
    var lists = document.getElementsByClassName('get-li');
    if (lists[0].classList.contains("displayNone")) {
        for(var i = 0; i < lists.length; i++) {
            lists[i].classList.replace("displayNone", "displayBlock")
        }
    }
    else if (lists[0].classList.contains("displayBlock")) {
        for(var i = 0; i < lists.length; i++) {
            lists[i].classList.replace("displayBlock", "displayNone")
        }
    }
}