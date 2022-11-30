var objHeight = 0;

window.onload = setSideBarHeight;
window.onresize = setSideBarHeight;

function setSideBarHeight(){
    var wordDiv = document.getElementById("word");
    var wordEndDiv = document.getElementById("wordEnd");
    var sideBarLeft = document.getElementById("sideBarLeft");
    var sideBarRight = document.getElementById("sideBarRight");
    objHeight = wordEndDiv.offsetTop + wordEndDiv.offsetHeight + 30;
    sideBarLeft.style.height = objHeight + "px";
    sideBarRight.style.height = objHeight + "px";
}