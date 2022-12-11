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