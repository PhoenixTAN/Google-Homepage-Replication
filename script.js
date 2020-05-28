var googleAppsIcon = document.getElementById("head-right-google-apps");
var googleAppsModal = document.getElementById("apps-modal");
var setting = document.getElementById("setting");
var settingPopupModal = document.getElementById("setting-floating-popup-modal");
var searchTextBox = document.getElementById("search-text");
var searchBarWrap = document.getElementsByClassName("search-bar-wrap")[0];

/* EventListener */
googleAppsIcon.addEventListener("click", showGoogleApps); 
setting.addEventListener("click", showSettingPopup)
document.addEventListener("click", clearPopup);
searchTextBox.addEventListener("focus", showSearchPopup);


function clearPopup(event) {
    if ( event.target == googleAppsModal ) {
        googleAppsModal.style.display = "none";
    }
    else if ( event.target == settingPopupModal ) {
        settingPopupModal.style.display = "none";
    }

}

function showGoogleApps() {
   googleAppsModal.style.display = "block";
}

function showSettingPopup() {
    settingPopupModal.style.display = "block";
}


/* Event listener for search text */
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




var account = document.getElementById("account1");
account.addEventListener("click", showOrHideThridRow);

function showOrHideThridRow() {
    var arrow = document.getElementById("arrow-popup");
    var thirdRow = document.getElementById("sign-in-remove-popup");
    
    /* 为什么这里换过来不行 */
    /* 因为一开始这个sytle是空的值 */
    console.log(thirdRow.style.display);
    if ( thirdRow.style.display == "block" ) {
        thirdRow.style.display = "none";
        arrow.style.transform = "none";
        account.style.background = "#fff";
    }
    else {
        thirdRow.style.display = "block";
        arrow.style.transform = "rotate(0.5turn)";
        account.style.background = "rgba(60,64,67,0.1)";
    }
}



var signIn = document.getElementById("sign-in");
var accountProfile = document.getElementById("account-profile");

signIn.addEventListener("click", showPopupProfile);

function showPopupProfile(event) {
    if ( accountProfile.style.display == "block" ) {
        accountProfile.style.display = "none";
    }
    else {
        accountProfile.style.display = "block";  
        console.log("Here!");

        event.stopPropagation();    /* 阻止事件冒泡汇报给上一级元素？ */

        /*
        document.addEventListener("click", function clearPopupProfile(event) {
            hidePopupProfile(event);
            document.removeEventListener("click", clearPopupProfile);
        });
        */
    }
}


document.onclick = function hidePopupProfile(event) {
    var clientX = event.clientX;
    var clientY = event.clientY;

    var position = accountProfile.getBoundingClientRect();
    if ( clientX < position.left || clientX > position.right || 
        clientY > position.bottom || clientY < position.top ) {
        accountProfile.style.display = "none";    
        console.log("There!");
    }
}
