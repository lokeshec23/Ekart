import { userName } from "./signup"
const getUserName = localStorage.getItem('userName', userName.value)
console.log(getUserName);

