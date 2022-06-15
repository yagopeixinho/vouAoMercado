import { changeUserFavoriteColor } from "../functions/changeUserFavoriteColor.js";
import { getLocalStorageItem } from "../functions/getLocalStorageItem.js";
import { setLocalStorageItem } from "../functions/setLocalStorageItem.js";
import { verifyFormFields } from "../functions/verifyFormFields.js";

const userFavoriteColor = getComputedStyle(
  document.documentElement
).getPropertyValue("--main-bg-color-1");
const inputColorLogin = document.getElementById("user-favorite-color");

(function init() {
  const initialColor = getLocalStorageItem("USER_FAVORITE_COLOR");

  inputColorLogin.addEventListener("change", (ev) => {
    changeUserFavoriteColor(ev.target.value);
    setLocalStorageItem("USER_FAVORITE_COLOR", ev.target.value);
  });

  window.addEventListener("keypress", (ev) => {
    if (ev.key === "Enter") {
      if (verifyFormFields("login-form")) {
        createUser(ev);
      }
    }
  });

  if (initialColor === null) {
    inputColorLogin.value = userFavoriteColor;
  } else {
    inputColorLogin.value = initialColor;
    changeUserFavoriteColor(initialColor);
  }
})();

function createUser(ev) {
  ev.preventDefault();

  const form = document.forms.loginForm;
  const { username } = form;

  const newUser = {
    username: username.value,
  };

  try {
    setLocalStorageItem("USER", JSON.stringify(newUser));
    window.location.replace("/views/listViews.html");
  } catch (error) {
    alert(
      `Ocorreu um erro: ${error} - Se isso parece um problema técnico, entre em contato com o desenvolvedor ou tente novamente mais tarde.`
    );
  }
}
