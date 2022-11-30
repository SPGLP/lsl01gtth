function liked(){
    var likeImg = document.getElementById("likeImg");
    var likeImgSrc = likeImg.getAttribute("src");
    if (likeImgSrc == "images\\A\\like.png") {
        likeImg.setAttribute("src","images\\A\\like-2.png");
        alert("感谢支持！");
    } else {
        likeImg.setAttribute("src","images\\A\\like.png");
    }
}