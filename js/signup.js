const formElement = document.forms.formApplication;
const {
  userName,
  email,
  phoneNumber,
  password,
  confirmPassword,
  submitButton,
} = formApplication.elements;

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  if (
    userName.value === "" ||
    email.value === "" ||
    phoneNumber.value === "" ||
    password.value === "" ||
    confirmPassword.value === ""
  ) {
    setMessage(`Please fill all fields!`, `bg-warning text-white p-2 `);
    return;
  } else if (password.value != confirmPassword.value) {
    setMessage(`Password doesn't match`, `bg-danger text-white p-2 `);
    password.value = "";
    confirmPassword.value = "";
    return;
  } else {
    setLocalStorage(); // Set local storage
    setMessage(`Account Created Successfully!`, `bg-success text-white p-2 `);
  }
  resetInput(); // Reset Input
});

function setLocalStorage() {
  localStorage.setItem("userName", userName.value);
  localStorage.setItem("email", email.value);
  localStorage.setItem("phoneNumber", phoneNumber.value);
  localStorage.setItem("password", password.value);
}

export function resetInput() {
  userName.value = "";
  email.value = "";
  phoneNumber.value = "";
  password.value = "";
  confirmPassword.value = "";
}

function setMessage(msg, className) {
  const div = document.createElement("div");
  const p = document.createElement("p");
  p.textContent = msg;
  p.className = className;
  div.append(p);
  formElement.prepend(div);
  setTimeout(() => {
    div.remove();
  }, 2000);
}

// function setLocalStorage() {
//   localStorage.setItem(
//     `${email.value}`,
//     JSON.stringify([
//       ...JSON.parse(localStorage.getItem(userName) || "[]"),
//       {
//         userName: userName.value,
//         email: email.value,
//         phoneNumber: phoneNumber.value,
//         password: password.value,
//       },
//     ])
//   );
// }
