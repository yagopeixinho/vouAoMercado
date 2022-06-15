import { getLocalStorageItem } from "../functions/getLocalStorageItem.js";
import { setLocalStorageItem } from "../functions/setLocalStorageItem.js";
import { setMainColorBackground } from "../functions/setMainColorBackground.js";
import { verifyFormFields } from "../functions/verifyFormFields.js";

(function init() {
  const inputColorLogin = document.getElementById("user-favorite-color");
  const initialColor = getLocalStorageItem("USER_FAVORITE_COLOR");

  inputColorLogin.addEventListener("change", (ev) => {
    setLocalStorageItem("USER_FAVORITE_COLOR", ev.target.value);
    setMainColorBackground();
  });

  window.addEventListener("keypress", (ev) => {
    if (ev.key === "Enter") {
      if (verifyFormFields("login-form")) {
        createUser(ev);
      }
    }
  });

  inputColorLogin.value = initialColor;
  setMainColorBackground();
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
