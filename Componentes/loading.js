var i = setInterval(function () {
    clearInterval(i);

    // O código desejado é apenas isto:
    document.getElementById("loading").style.visibility = "hidden";
    document.getElementById("body").style.visibility = "visible";

}, 3000);