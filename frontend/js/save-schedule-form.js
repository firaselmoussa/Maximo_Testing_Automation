document.addEventListener("DOMContentLoaded", function() {
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("save-schedule-process");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

/////////////////////////////////////////////////////////////

// document.addEventListener("DOMContentLoaded", function() {
  // Get the modal
  var modal2 = document.getElementById("customModal");

  // Get the button that opens the modal
  var btn2 = document.getElementById("open-modal-button");

  // Get the <span> element that closes the modal
  var span2 = document.getElementsByClassName("custom-close")[0];

  // When the user clicks the button, open the modal
  btn2.onclick = function() {
    modal2.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span2.onclick = function() {
      modal2.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal2) {
          modal2.style.display = "none";
      }
  }
});