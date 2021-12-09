var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos >= currentScrollPos) {
    document.getElementById("navbar").style.position = ` fixed `
    document.getElementById("navbar").style.top = "0";

  } else {
    document.getElementById("navbar").style.position = ` fixed `
    document.getElementById("navbar").style.top = "-8.5rem";
  }
  prevScrollpos = currentScrollPos;

}