var index = 0;

show_slide = (i) => {
index += i;

var images = document.getElementsByClassName("image");
var dots = document.getElementsByClassName("dot");

for (i = 0; i < images.length; i++)
images[i].style.display = "none";

for (i = 0; i < dots.length; i++)
dots[i].className = dots[i].className.replace(" active", "");

if (index > images.length - 1)
index = 0 ;

if (index < 0)
index = images.length - 1;

images[index].style.display = "block";
dots[index].className += " active";

}

window.addEventListener("onload", show_slide(index));
 
function readmore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("readmore_btn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Читать полностью";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Скрыть";
    moreText.style.display = "inline";
  }
}

