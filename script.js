/* Event listener for goole apps popup window */
var googleAppsIcon = document.getElementById("head-right-google-apps");
var googleAppsPopup = document.getElementById("apps-popup");

googleAppsIcon.addEventListener("click", showGoogleAppsPopup);
googleAppsPopup.addEventListener("click", function stopClickPropagation(event) { event.stopPropagation() });

function showGoogleAppsPopup() {
    if ( googleAppsPopup.style.display == "block" ) {
        googleAppsPopup.style.display = "none";
    }
    else {
        googleAppsPopup.style.display = "block";
        event.stopPropagation();
        document.addEventListener("click", function clearAppsPopup() {
            googleAppsPopup.style.display = "none";
            document.removeEventListener("click", clearAppsPopup);
        });
    }
}

/* Event listener for setting */
var setting = document.getElementById("setting");
var settingPopup = document.getElementById("setting-floating-popup");

/* EventListener */
setting.addEventListener("click", showSettingPopup)
settingPopup.addEventListener("click", function stopClickPropagation(event) { event.stopPropagation()} );

function showSettingPopup() {
    if ( settingPopup.style.display == "block" ) {
        settingPopup.style.display = "none";
    }
    else {
        settingPopup.style.display = "block";
        event.stopPropagation();
        document.addEventListener("click", function clearSettingPopup() {
            settingPopup.style.display = "none";
            document.removeEventListener("click", clearSettingPopup);
        });
    }
}

/* Event listener for search text */
var searchTextBox = document.getElementById("search-text");
var searchBarWrap = document.getElementsByClassName("search-bar-wrap")[0];
searchTextBox.addEventListener("focus", showSearchPopup);

var isBlur = false;
function showSearchPopup() {
    var searchPopup = document.getElementById("search-floating-popup");
    searchPopup.style.display = "block";
    
    var searchBarWrap = document.getElementsByClassName("search-bar-wrap")[0];
    searchBarWrap.style.borderRadius = "24px 24px 0 0";
    isBlur = false;

    searchBarWrap.style.boxShadow = "0 4px 6px 0 rgba(32,33,36,0.28)";
    searchBarWrap.removeEventListener("mouseout", hideSearchBarShadow);

}

searchTextBox.addEventListener("blur", function() {
    isBlur = true;
    /* 比如说点击搜索框的时候 是点击的目标区域外 所以不应该删掉popup window */
});

/* make the search popup window disappear */
document.addEventListener("click", function clearSearchPopup(event) {

    var clientX = event.clientX;
    var clientY = event.clientY;

    var searchPopup = document.getElementById("search-floating-popup");
    var position = searchPopup.getBoundingClientRect();

    if ( isBlur && (clientX < position.left || clientX > position.right || 
        clientY > position.bottom || clientY < position.top) ) {
        searchPopup.style.display = "none";     
        searchBarWrap.style.borderRadius = "24px";
        searchBarWrap.style.boxShadow = "none";
        searchBarWrap.addEventListener("mouseover", showSearchBarShadow);
        searchBarWrap.addEventListener("mouseout", hideSearchBarShadow);
    }
});

/* mouseover for search box */
searchBarWrap.addEventListener("mouseover", showSearchBarShadow);
function showSearchBarShadow() {
    searchBarWrap.style.boxShadow = "0 4px 6px 0 rgba(32,33,36,0.28)";
}

/* mouseout for search box */
searchBarWrap.addEventListener("mouseout", hideSearchBarShadow);
function hideSearchBarShadow() {
    searchBarWrap.style.boxShadow = "none";
}

/* Add listener to show the sign out button and remove button */
var account = document.getElementById("account");
account.addEventListener("click", showOrHideThridRow);

function showOrHideThridRow() {
    var arrow = document.getElementById("arrow-popup");
    var thirdRow = document.getElementById("sign-in-remove-popup");

    if ( thirdRow.style.display == "flex" ) {
        thirdRow.style.display = "none";
        arrow.style.transform = "none";
        account.style.background = "#fff";
    }
    else {
        thirdRow.style.display = "flex";
        arrow.style.transform = "rotate(0.5turn)";
        account.style.background = "rgba(60,64,67,0.1)";
    }
}

/* Add listener to Sign in */ 
var signIn = document.getElementById("sign-in");
var accountProfile = document.getElementById("account-profile");

signIn.addEventListener("click", showPopupProfile);
accountProfile.addEventListener("click", function stopClickPropagation(event) { event.stopPropagation() } );

function showPopupProfile() {
    if ( accountProfile.style.display == "block" ) {
        accountProfile.style.display = "none";  
    }
    else {
        accountProfile.style.display = "block";  
        event.stopPropagation();    /* 阻止事件冒泡汇报给上一级元素 */
        document.addEventListener("click", function clearPopupProfile() {
            accountProfile.style.display = "none";    
            document.removeEventListener("click", clearPopupProfile);
        });
    }
}

