document.addEventListener("DOMContentLoaded", function() {

var modal = document.getElementById("myModal");

var btn = document.getElementById("save-schedule-process");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

/////////////////////////////////////////////////////////////

// document.addEventListener("DOMContentLoaded", function() {

  var modal2 = document.getElementById("customModal");

  var btn2 = document.getElementById("open-modal-button");

  var span2 = document.getElementsByClassName("custom-close")[0];

  btn2.onclick = function() {
    modal2.style.display = "block";
  }

  span2.onclick = function() {
      modal2.style.display = "none";
  }

  window.onclick = function(event) {
      if (event.target == modal2) {
          modal2.style.display = "none";
      }
  }
});