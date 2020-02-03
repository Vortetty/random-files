window.onload = function() {
    window.setInterval(function() {
        Smile();
    }, 10000);
};

function Smile() {
    var imgs = document.getElementsByTagName("img");
    var paths = document.getElementsByTagName("path");
    for (var i = 0, l = imgs.length; i < l; i++) {
        imgs[i].src = "https://raw.githubusercontent.com/Vortetty/Vortetty.github.io/master/images/unsettly.png";
        imgs[i].srcset = "https://raw.githubusercontent.com/Vortetty/Vortetty.github.io/master/images/unsettly.png";
    }
    for (var i = 0, l = paths.length; i < l; i++) {
        paths[i].d = "https://raw.githubusercontent.com/Vortetty/Vortetty.github.io/master/images/unsettly.png";
    }
}
