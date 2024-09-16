// Get form element by id
const registerForm = document.getElementById('register');
// handle form submit event
registerForm.onsubmit = function() {
    event.preventDefault()
    console.log(event);
}