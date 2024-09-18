// Get form element by id
const registerForm = document.querySelector("#register");
console.log(registerForm);
// handle form submit event
registerForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // collect form data
  const formData = new FormData(registerForm);
  //    send data to backend
  //   display success message to the user
  const messageH1 = document.querySelector("#message");
  messageH1.textContent = "Account Registered  Successfully";
  console.log(messageH1);
});
// declare variable age
// let age = 71
// define square age function
function squareAge(age) {
  return age ** 2;
}

const squaredAge = squareAge(54);
console.log(squaredAge);
