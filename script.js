var form = document.getElementById("form");
var email = document.getElementById("email");
var button = document.querySelector("button");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  var emailVal = email.value;

  // Check if it is a valid email
  if (!validateEmail(emailVal)) {
    form.classList.add("error");
  } else {
    form.classList.remove("error");
    button.innerHTML = "Thank you";
    button.classList.add("thank-you");
    document.forms['form'].reset()
  }

});

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
