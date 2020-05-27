
var googleAppsIcon = document.getElementById("head-right-google-apps");

googleAppsIcon.onclick = function(event) {
    // document.removeEventListener("click", clearPopup);
    var googleApps = document.getElementById("floating-popup-apps");

    if ( googleApps.style.display == "block" ) {
        googleApps.style.display = "none";
        return ;
    }

    googleApps.style.display = "block";
    // document.addEventListener("click", clearPopup);
    
    event.stopPropagation();
    /* 
        prevents further propagation of the current event 
        in the capturing and bubbling phases.
    */
}

var setting = document.getElementById("setting");

setting.onclick = function(event) {
    var settingPopup = document.getElementById("setting-floating-popup");
    if ( settingPopup.style.display == "block" ) {
        settingPopup.style.display = "none";
        return ;
    }
    settingPopup.style.display = "block";
    event.stopPropagation();
}

var searchTextBox = document.getElementById("search-text");
searchTextBox.onfocus = function(event) {
    var searchPopup = document.getElementById("search-floating-popup");
    /*if (searchPopup.style.display == "block" ) {
        searchPopup.style.display = "none";
        return ;
    }*/
    var searchBarWrap = document.getElementsByClassName("search-bar-wrap")[0];
    searchBarWrap.style.borderRadius = "24px 24px 0 0";
    searchPopup.style.display = "block";
    event.stopPropagation();
}


searchTextBox.onblur = function(event) {
    var searchPopup = document.getElementById("search-floating-popup");
    var searchBarWrap = document.getElementsByClassName("search-bar-wrap")[0];
    searchBarWrap.style.borderRadius = "24px";
    searchPopup.style.display = "none";
    event.stopPropagation();
}


// document.addEventListener("click", clearPopup());

// window.onclick = function clearPopup(event) {

//     var clientX = event.clientX;
//     var clientY = event.clientY;

//     /* make the google apps popup window disappear */
//     var googleApps = document.getElementById("floating-popup-apps");
//     var position = googleApps.getBoundingClientRect();

//     if ( clientX < position.left || clientX > position.right || 
//         clientY > position.bottom || clientY < position.top ) {
//         googleApps.style.display = "none"
//     }

//     /* make the setting floating popup window disppear */
//     var settingPopup = document.getElementById("setting-floating-popup");
//     position = settingPopup.getBoundingClientRect();
//     if ( clientX < position.left || clientX > position.right || 
//         clientY > position.bottom || clientY < position.top ) {
//         settingPopup.style.display = "none"
//     }

//     /* make the search floating popup window disppear */

// }

document.addEventListener("click", clearPopup);
function clearPopup(event) {

    var clientX = event.clientX;
    var clientY = event.clientY;

    /* make the google apps popup window disappear */
    var googleApps = document.getElementById("floating-popup-apps");
    var position = googleApps.getBoundingClientRect();

    if ( clientX < position.left || clientX > position.right || 
        clientY > position.bottom || clientY < position.top ) {
        googleApps.style.display = "none"
    }

    /* make the setting floating popup window disppear */
    var settingPopup = document.getElementById("setting-floating-popup");
    position = settingPopup.getBoundingClientRect();
    if ( clientX < position.left || clientX > position.right || 
        clientY > position.bottom || clientY < position.top ) {
        settingPopup.style.display = "none"
    }

    /* make the search floating popup window disppear */

}
