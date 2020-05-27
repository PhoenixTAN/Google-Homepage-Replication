
var googleAppsIcon = document.getElementById("head-right-google-apps");
var googleAppsModal = document.getElementById("apps-modal");
var setting = document.getElementById("setting");
var settingPopupModal = document.getElementById("setting-floating-popup-modal");

/* EventListener */
googleAppsIcon.addEventListener("click", showGoogleApps); 
setting.addEventListener("click", showSettingPopup)
document.addEventListener("click", clearPopup);


function clearPopup(event) {
    if ( event.target == googleAppsModal ) {
        googleAppsModal.style.display = "none";
    }
    if ( event.target == settingPopupModal ) {
        settingPopupModal.style.display = "none";
    }
}

function showGoogleApps() {
   googleAppsModal.style.display = "block";
}

function showSettingPopup() {
    settingPopupModal.style.display = "block";

}

var searchTextBox = document.getElementById("search-text");
searchTextBox.onfocus = function(event) {
    var searchPopup = document.getElementById("search-floating-popup");
    searchPopup.style.display = "block";
    
    var searchBarWrap = document.getElementsByClassName("search-bar-wrap")[0];
    searchBarWrap.style.borderRadius = "24px 24px 0 0";
    
    event.stopPropagation();
}


searchTextBox.onblur = function(event) {
    var searchPopup = document.getElementById("search-floating-popup");
    searchPopup.style.display = "none";

    var searchBarWrap = document.getElementsByClassName("search-bar-wrap")[0];
    searchBarWrap.style.borderRadius = "24px";
    
    event.stopPropagation();
}



