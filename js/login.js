
const loginFormEl = document.forms.loginForm;
const { email, password } = loginFormEl;
const namechange = document.getElementById("user-name-change");

loginFormEl.addEventListener("submit", (event) => {

  event.preventDefault();

  const cEmail = email.value;
  const cpassword = password.value;

  var getEmail = localStorage.getItem("email", email.value);
  var getPwd = localStorage.getItem("password", password.value);
  //get data from local
  if (getEmail === cEmail && getPwd === cpassword) {
    setMessage(`Login successfully!`, `bg-success text-white p-2 w-100`);
  } else {
    setMessage("Invalid Email or Password!", "bg-danger text-white p-2 w-100");
  }
});

function setMessage(msg, className) {
  const div = document.createElement("div");
  const p = document.createElement("p");
  p.textContent = msg;
  p.className = className;
  div.append(p);
  loginFormEl.append(div);
  setTimeout(() => {
    div.remove();
  }, 2000);
}
