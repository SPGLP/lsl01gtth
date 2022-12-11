function selectBar(n){
    var meun1 = document.getElementById("meun1");
    var meun2 = document.getElementById("meun2");
    var meun3 = document.getElementById("meun3");
    outBar();
    switch(n){
        case 1 : meun1.style.display = "inline"; break;
        case 2 : meun2.style.display = "inline"; break;
        case 3 : meun3.style.display = "inline"; break;
    }
    aniShow();
}

function outBar(){
    var meun1 = document.getElementById("meun1");
    var meun2 = document.getElementById("meun2");
    var meun3 = document.getElementById("meun3");
    meun1.style.height = 0;
    meun2.style.height = 0;
    meun3.style.height = 0;
    meun1.style.display = "none";
    meun2.style.display = "none";
    meun3.style.display = "none";
}

function aniShow(){
    var meun1 = document.getElementById("meun1");
    var meun2 = document.getElementById("meun2");
    var meun3 = document.getElementById("meun3");
    /*
    var t = 0;
    timer = setInterval(function(){
        if (meun1.offsetHeight < 200 && meun2.offsetHeight < 200 && meun3.offsetHeight < 200) {
            t += 20;
            meun1.style.height = t + "px";
            meun2.style.height = t + "px";
            meun3.style.height = t + "px";
        } else {
            clearInterval(timer);
        }
    },30)
    */
   meun1.style.animationPlayState = "running";
   meun2.style.animationPlayState = "running";
   meun3.style.animationPlayState = "running";
}

//Edge和谷歌浏览器似乎已经不开放相关权限了
function AddFavorite(title, url) {
    try {
        window.external.addFavorite(url, title);
    } catch (e) {
        try {
            window.sidebar.addPanel(title, url, "");
        } catch (e) {
            alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加");
        }
    }
}