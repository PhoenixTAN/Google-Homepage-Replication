
var googleAppsIcon = document.getElementsByClassName("head-right-google-apps")[0];
var setting = document.getElementById("setting");

googleAppsIcon.onclick = function(event) {
    var googleApps = document.getElementById("floating-popup-apps");

    if ( googleApps.style.display == "block" ) {
        googleApps.style.display = "none";
        return ;
    }

    googleApps.style.display = "block";
    event.stopPropagation();
    /* 
        prevents further propagation of the current event 
        in the capturing and bubbling phases.
    */
}

setting.onclick = function(event) {
    var settingPopup = document.getElementById("setting-floating-popup");
    if ( settingPopup.style.display == "block" ) {
        settingPopup.style.display = "none";
        return ;
    }
    settingPopup.style.display = "block";
    event.stopPropagation();
}

window.onclick = function(event) {

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
}



