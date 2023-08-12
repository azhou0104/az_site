// Get the modal
var modal1 = document.getElementById("modal-portfolio1");
var modal2 = document.getElementById("modal-portfolio2");
var modal3 = document.getElementById("modal-portfolio3");
var modal4 = document.getElementById("modal-portfolio4");
var modal5 = document.getElementById("modal-portfolio5");
var modal6 = document.getElementById("modal-portfolio6");

// Get the button that opens the modal
var btn1 = document.getElementById("portfolio_btn1");
var btn2 = document.getElementById("portfolio_btn2");
var btn3 = document.getElementById("portfolio_btn3");
var btn4 = document.getElementById("portfolio_btn4");
var btn5 = document.getElementById("portfolio_btn5");
var btn6 = document.getElementById("portfolio_btn6");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var span3 = document.getElementsByClassName("close")[2];
var span4 = document.getElementsByClassName("close")[3];
var span5 = document.getElementsByClassName("close")[4];
var span6 = document.getElementsByClassName("close")[5];

// When the user clicks the button, open the modal 
btn1.onclick = function () {
  modal1.style.display = "block";
}
btn2.onclick = function () {
  modal2.style.display = "block";
}
btn3.onclick = function () {
  modal3.style.display = "block";
}
btn4.onclick = function () {
  modal4.style.display = "block";
}
btn5.onclick = function () {
  modal5.style.display = "block";
}
btn6.onclick = function () {
  modal6.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal1.style.display = "none";
}
span2.onclick = function () {
  modal2.style.display = "none";
}
span3.onclick = function () {
  modal3.style.display = "none";
}
span4.onclick = function () {
  modal4.style.display = "none";
}
span5.onclick = function () {
  modal5.style.display = "none";
}
span6.onclick = function () {
  modal6.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
  if (event.target == modal5) {
    modal5.style.display = "none";
  }
  if (event.target == modal6) {
    modal6.style.display = "none";
  }
}