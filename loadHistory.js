
var d = "M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z";


var submitbar = document.getElementById("submitbar");

const searchHistoryData = [
    "javascript floating popup window",
    "document addEventListener",
    "svg",
    "HelloWorld",
    "createElementNS",
    "Use javascript to set up svg path",
    "This will cause overflow"
];

const maxNumOfHistory = 6;

function appendHistory(searchHistory) {
    for ( var i = 0; i < searchHistory.length; i++ ) {
        var divSearchHistory = document.createElement("div");
        var divLeftSearchIcon = document.createElement("div");
        var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        var a = document.createElement("a");

        divSearchHistory.className = "search-history";
        divLeftSearchIcon.className = "left-search-icon";
        svg.setAttribute("focusable", "false");
        svg.setAttribute("viewBox", "0 0 24 24");
        path.setAttribute("d", d);

        a.setAttribute("href", "#");
        a.innerText = searchHistory[i];

        divSearchHistory.appendChild(divLeftSearchIcon);
        divLeftSearchIcon.appendChild(svg);
        svg.appendChild(path);
        divSearchHistory.appendChild(a);

        submitbar.parentNode.insertBefore(divSearchHistory, submitbar);
        if ( i == maxNumOfHistory - 1) {
            break;
        }
    }
}

appendHistory(searchHistoryData);
