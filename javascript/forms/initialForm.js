import { verifyFormFields } from "../functions/verifyFormFields.js";
import { changeMainColors } from "../functions/changeMainColors.js";
import { getItemLocalStorage } from "../functions/getLocalStorage.js";

window.addEventListener("load", () => {
  (function setInputColorValue() {
    document.getElementById("initial-color-input").value = getItemLocalStorage(
      "USER_FAVORITE_COLOR"
    );
  })();
});

window.addEventListener("keypress", (ev) => {
  if (ev.code === "Enter") {
    createUser(ev);
  }
});

document
  .getElementById("initial-color-input")
  .addEventListener("change", (e) => {
    localStorage.setItem("USER_FAVORITE_COLOR", e.target.value);
    changeMainColors();
  });

function createUser(ev) {
  ev.preventDefault(ev);

  if (verifyFormFields("initial-form")) {
    const user = {
      username: document.getElementById("username").value,
    };

    try {
      localStorage.setItem("USER", JSON.stringify(user));
      window.location.replace("/views/pages/listagemListas/telaListagem.html");
    } catch (e) {
      alert(
        `Ocorreu um erro: ${e} - Se isso parece um problema técnico, entre em contato com o desenvolvedor ou tente novamente mais tarde.`
      );
    }
  }
}
