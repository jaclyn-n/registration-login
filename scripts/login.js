// get element by id
const loginForm = document.getElementById("login");
console.log("loginForm");
// handle login event
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // collect form data
  const formData = new FormData(loginForm);
  // send data to backend
  // display success image to the user
  const messageH1 = document.getElementById("login");
  messageH1.textContent = "Login Successfull";

  console.log(messageH1);
});

// write a fullname function
function fullName(firstName, lastName) {
  // return firstName + lastName;
  return `${firstName} ${lastName}`;
}

const myName = fullName("Jacqueline", " offei");
console.log(myName);
