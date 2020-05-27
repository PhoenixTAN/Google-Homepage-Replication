
function showGoogleApps() {
    var googleApps = document.getElementById("floating-popup-apps");

    if ( googleApps.style.display == "block" ) {
        googleApps.style.display = "none";
        console.log("return");
        return ;
    }

    googleApps.style.display = "block";

    /* 全局鼠标点击的监听器 */ 
    /*
    var clientX = window.event.clientX;
    var clientY = window.event.clientY;
    var position = googleApps.getBoundingClientRect();
    if ( clientX < position.left || clientX > position.right || 
        clientY > position.bottom || clientY < position.top ) {
        console.log("outside");
        googleApps.style.display = "none"
    }
    else {
        console.log("inside");
    }
    */

}

