const form = document.querySelector("form");
const inputEmail = document.querySelector("#email");

const errorText = document.createElement("p");
form.appendChild(errorText);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let valueForEmailAddress = inputEmail.value;
  let isValidEmail = validateEmail(valueForEmailAddress);
  if (valueForEmailAddress === "") {
    errorText.classList.add("error");
    errorText.innerText = "Oops! Please add your email";
  } else if (!isValidEmail) {
    errorText.classList.add("error");
    errorText.innerText = "Oops! Please check your email";
  } else {
    errorText.classList.remove("error");
    errorText.innerText = "";
  }
});

function validateEmail(email) {
  // Regular expression pattern for validating email addresses
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Test the email against the pattern
  return emailPattern.test(email);
}
