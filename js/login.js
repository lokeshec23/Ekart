// import {userName} from './signup'
const loginFormEl = document.forms.loginForm;
const { email, password } = loginFormEl;
// const namechangeEl = document.getElementById("user-name-change");

loginFormEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const cEmail = email.value;
  const cpassword = password.value;

  var getEmail = localStorage.getItem("email", email.value);
  var getPwd = localStorage.getItem("password", password.value);
  //get data from local
  if (cEmail === "" && cpassword === "") {
    setMessage(
      "Please Enter Email and Password",
      "bg-warning text-white p-2 w-100"
    );
  } else if (getEmail === cEmail && getPwd === cpassword) {
    setMessage(`Login successfully!`, `bg-success text-white p-2 w-100`);
    setMessage(
      "you redirect to Home page in few second",
      "bg-info text-white p-2 w-100"
    );
    // namechangeEl.innerText = `Hi ${userName}`;
    setTimeout(() => {
      document.location.href = "http://127.0.0.1:5500/index.html";
    }, 4000);
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
  }, 3000);
}


