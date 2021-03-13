import User from "./user.js";
import NullUser from "./null-user.js";

document.querySelector("#loginBtn").addEventListener("click", loginClick);

function loginClick() {
  const userSelect = document.querySelector("#user-select");
  let name = userSelect.value;
  if (name === "") {
    name = null;
  }
  loginUser(getUser(name));
}

loginClick();

function getUser(name) {
  if (name == null) {
    return new NullUser();
  } else {
    return new User(name);
  }
}

function loginUser(user) {
  let content = `<p class="text-danger">Usted debe iniciar sesión para ver esto</p>`;
  if (user.hasAccess()) {
    content = `<p>Felicidades, usted inicio sesión</p>`;
  }
  document.querySelector("#content").innerHTML = `          
    <hr>
    <h3 class="text-center">Welcome ${user.name}</h3>
    ${content}`;
}
