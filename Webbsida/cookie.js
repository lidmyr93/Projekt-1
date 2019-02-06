/* defining variables */
let cookieBox = document.getElementById('cookieBox');
let button = document.getElementById("cookies");
let span = document.getElementById("close");

/* To display cookiebox */
button.onclick = function() {
  cookieBox.style.display = "block";
}

/* Hides box when clicking on span (x) */
span.onclick = function() {
  cookieBox.style.display = "none";
}

/* Close when click on outside cookiebox */
window.onclick = function(event) {
  if (event.target == cookieBox) {
    cookieBox.style.display = "none";
  }
}
