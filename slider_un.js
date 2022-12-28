var index = 0;

show_slide_un = (i) => {
index += i;

var tovar = document.getElementsByClassName("slider_un");

for (i = 0; i < tovar.length; i++)
tovar[i].style.display = "none";


if (index > tovar.length - 1)
index = 0 ;

if (index < 0)
index = tovar.length - 1;

tovar[index].style.display = "flex";
}

window.addEventListener("onload", show_slide(index));
 