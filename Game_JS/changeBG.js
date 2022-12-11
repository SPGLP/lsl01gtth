var ImgNumber = 1;

function changeBG(n) {
    var backgroundImg = document.getElementById("backgroundImg");
    switch(n) {
        case 1: backgroundImg.setAttribute("src","images\\BGImg1.webp"); break;
        case 2: backgroundImg.setAttribute("src","images\\BGImg2.jpg"); break;
        case 3: backgroundImg.setAttribute("src","images\\BGImg3.jpg"); break;
        case 4: backgroundImg.setAttribute("src","images\\BGImg4.jpg"); break;
    }
}

function changeImgNumber() {
    if (ImgNumber < 4) {
        ImgNumber ++;
    } else {
        ImgNumber = 1;
    }
    changeBG(ImgNumber);
}

function changeBGTimer() {
    var timeNumber = 0;
    var backgroundImgPan = document.getElementById("backgroundImgPan");
    timer = setInterval(function() {
        switch (timeNumber) {
            case 1 : backgroundImgPan.style.animationPlayState = "paused"; break;
            case 2 : break
            case 3 : break;
            case 4 : backgroundImgPan.style.animationPlayState = "running"; break;
            case 5 : changeImgNumber(); timeNumber = 0; break;
        }
        timeNumber ++;
    },1000);
}