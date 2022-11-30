var posD = 1    // 设置朝向：0为左；1为右
var moveX = 0; 
var stepX = 5;
var zhinSoupStepY = 7;  //鸡汤的速度
var zhinSoupMoveX = 0;
var zhinSoupMoveY = 0;
var TGpos = 0;
var canThough = 1;
var score = 0;

window.onload = changePosCXK;

function changePosCXK() {
    timer = setInterval(function () {
        var cxk = document.getElementById("cxk"); 
        //var height = document.documentElement.clientHeight;     //浏览器的高度
        var width = document.documentElement.clientWidth;   //浏览器的宽度
        //var imgHeight = document.getElementById("cxkImg").height;   //飘浮图片的高度
        var imgWidth = document.getElementById("cxkImg").width;     //瓢浮图片的宽度
        cxk.style.left = parseInt(moveX + document.documentElement.scrollLeft) + "px";
        if (posD == 0) {
            moveX += stepX;
        } else {
            moveX -= stepX;
        }
        if (moveX < 0) {
            posD = 0;
            moveX = 0;
        }
        if (moveX > (width - imgWidth)) {
            posD = 1;
            moveX = (width - imgWidth);
        }
    }, 30)
}

function changePosTG(n){
    var TG = document.getElementById("TG")
    TGpos = n;
    switch (TGpos) {
        case 1 : TG.style.left = "0"; break;
        case 2 : TG.style.left = "25%"; break;
        case 3 : TG.style.left = "50%"; break;
        case 4 : TG.style.left = "75%"; break;
    }
}

function thougtZhinSoup(){
    var ZhinSoup = document.getElementById("ZhinSoup");
    var hit = 0;
    if (canThough == 1) {
        ZhinSoup.style.display = "inline";
        playSounds(1);
        switch (TGpos) {
            case 1 : ZhinSoup.style.left = "0"; break;
            case 2 : ZhinSoup.style.left = "25%"; break;
            case 3 : ZhinSoup.style.left = "50%"; break;
            case 4 : ZhinSoup.style.left = "75%"; break;
        }
        //zhinSoupStepY = 5;
        canThough = 0;
        timer2 = setInterval(function() {
            //var gameSpanHeight = document.getElementById("gameSpan").height;
            var ZhinSoup = document.getElementById("ZhinSoup");
            var ZhinSoupHeight = document.getElementById("ZhinSoupImg").height;
                ZhinSoup.style.marginTop = parseInt(zhinSoupMoveY) + "px";
                zhinSoupMoveY += zhinSoupStepY;
                hit = hitCXK();
                if (hit == 1) {
                    ZhinSoup.style.display = "none";
                    ZhinSoup.style.marginTop = "0";
                    zhinSoupMoveY = 0;
                    canThough = 1;
                    stepX = Math.floor(Math.random()*10) + 5;
                    clearInterval(timer2);
                }
        }, 30)
    }
}

function hitCXK(){
    var ZhinSoup = document.getElementById("ZhinSoup");
    //var ZhinSoupHeight = document.getElementById("ZhinSoupImg").height;
    //var ZhinSoupwidth = document.getElementById("ZhinSoupImg").width;
    //var height = document.documentElement.clientHeight;     //浏览器的高度
    //var CXKwidth = document.documentElement.clientWidth;   //浏览器的宽度
    //var imgHeight = document.getElementById("cxkImg").height;   //飘浮图片的高度
    //var cxkWidth = document.getElementById("cxkImg").width;     //瓢浮图片的宽度
    //var cxkHeight = document.getElementById("cxkImg").height;
    var cxk = document.getElementById("cxk");
    var ZhinSoupLeft = ZhinSoup.offsetLeft;
    var ZhinSoupRight = ZhinSoup.offsetLeft + ZhinSoup.offsetWidth;
    var ZhinSoupBottom = ZhinSoup.offsetTop + ZhinSoup.offsetHeight;
    var cxkLeft = cxk.offsetLeft;
    var cxkRight = cxk.offsetLeft + cxk.offsetWidth;
    var cxkTop = cxk.offsetTop
    var scoreboard = document.getElementById("scoreboard");
    if(Math.abs(cxkLeft - ZhinSoupLeft) < 50 || Math.abs(ZhinSoupRight - cxkRight) < 50) {
        if((cxkTop - ZhinSoupBottom) < 0) {
        score++;
        playSounds(2);
        scoreboard.innerText = "任务完成次数：" + score;
        return 1;
        }
    } else {
        if(zhinSoupMoveY > 320){
            return 1;
        } else {
            return 0;
        }
    }
}

function playSounds(n){
    var audio1 = document.getElementById("click");
    var audio2 = document.getElementById("hit");
    if(n == 1){
        audio1.play()
    }
    if(n == 2){
        audio2.play();
    }
}