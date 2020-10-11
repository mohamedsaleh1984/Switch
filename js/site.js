
let btn_scroll_up = document.getElementById("btn_scroll_up");
let btn_scroll_down = document.getElementById("btn_scroll_down");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction()
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn_scroll_up.style.display = "block";
  } else {
    btn_scroll_up.style.display = "none";
  }

  if (document.body.scrollDown == 0 || document.documentElement.scrollDown == 0) {
    btn_scroll_down.display = "none";
  }
  else {
    btn_scroll_down.display = "block";
  }
}

// When the user clicks on the button, scroll to the top of the document
function scrollDown() {
  window.scrollTo(0, document.body.scrollHeight);
}

// When the user clicks on the button, scroll to the top of the document
function scrollUp() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

