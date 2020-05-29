
var appsPopupSection1 = document.getElementById("apps-popup-section1");
var appsPopupSection2 = document.getElementById("apps-popup-section2");

const googleAppsDataSection1 = [
    {
        image: "images/apps-icons/account-icon.png",
        name: "Account"
    },
    {
        image: "images/apps-icons/search-icon.png",
        name: "Search"
    },
    {
        image: "images/apps-icons/maps-icon.png",
        name: "Maps"
    },
    {
        image: "images/apps-icons/youtube-icon.png",
        name: "Youtube"
    },
    {
        image: "images/apps-icons/play-icon.png",
        name: "Play"
    },
    {
        image: "images/apps-icons/news-icon.png",
        name: "News"
    },
    {
        image: "images/apps-icons/gmail-icon.png",
        name: "Gmail"
    },
    {
        image: "images/apps-icons/contacts-icon.png",
        name: "Contacts"
    },
    {
        image: "images/apps-icons/drive-icon.png",
        name: "Drive"
    },
    {
        image: "images/apps-icons/calendar-icon.png",
        name: "Calendar"
    },
    {
        image: "images/apps-icons/translate-icon.png",
        name: "Translate"
    },
    {
        image: "images/apps-icons/photo-icon.png",
        name: "Photos"
    },
    {
        image: "images/apps-icons/shopping-icon.png",
        name: "Shopping"
    },
    {
        image: "images/apps-icons/duo-icon.png",
        name: "Duo"
    },
    {
        image: "images/apps-icons/meet-icon.png",
        name: "Meet"
    }
];

const googleAppsDataSection2 = [
    {
        image: "images/apps-icons/finance-icon.png",
        name: "Finance"
    },
    {
        image: "images/apps-icons/docs-icon.png",
        name: "Docs"
    },
    {
        image: "images/apps-icons/sheet-icon.png",
        name: "Sheets"
    },
    {
        image: "images/apps-icons/slides-icon.png",
        name: "Slides"
    },
    {
        image: "images/apps-icons/books-icon.png",
        name: "Books"
    },
    {
        image: "images/apps-icons/blogger-icon.png",
        name: "Blogger"
    },
    {
        image: "images/apps-icons/hangouts-icon.png",
        name: "Hangouts"
    },
    {
        image: "images/apps-icons/keep-icon.png",
        name: "Keep"
    },
    {
        image: "images/apps-icons/jamboard-icon.png",
        name: "Jamboard"
    },
    {
        image: "images/apps-icons/earth-icon.png",
        name: "Earth"
    },
    {
        image: "images/apps-icons/collections-icon.png",
        name: "Collections"
    },
    {
        image: "images/apps-icons/arts-icon.png",
        name: "Arts and Cultures"
    }
];

// More from Google


/** 
 * Append this data structure
 * <a href="#">
        <img src="images/apps-icons/account-icon.png">
        <span>Account</span>
    </a>
 */
function addIcons(dataSection, targetArea) {
    for ( var i = 0; i < dataSection.length; i++ ) {
        var aTag = document.createElement("a");
        aTag.setAttribute("href", "#");
        

        var src = dataSection[i].image;
        var name = dataSection[i].name;
    
        var imgTag = document.createElement("img");
        imgTag.setAttribute("src",src);
        var spanTag = document.createElement("span");
        spanTag.innerText = name;
        
        aTag.appendChild(imgTag);
        aTag.appendChild(spanTag);
    
        targetArea.appendChild(aTag);
    }
}

addIcons(googleAppsDataSection1,appsPopupSection1);
addIcons(googleAppsDataSection2,appsPopupSection2);
