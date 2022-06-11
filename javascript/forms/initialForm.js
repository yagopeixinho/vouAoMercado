import { verifyFormFields } from "../functions/verifyFormFields.js";
import { changeMainColors } from "../functions/changeMainColors.js";
import { getItemLocalStorage } from "../functions/getItemLocalStorage.js";
import { setItemLocalStorage } from "../functions/setItemLocalStorage.js";

window.addEventListener("load", () => {
  debugger;
  (function setInputColorValue() {
    debugger;
    const color = getItemLocalStorage("USER_FAVORITE_COLOR");

    if (color === null) {
      document.getElementById("initial-color-input").value = "#fecf10";
      setItemLocalStorage("USER_FAVORITE_COLOR", "#fecf10");
    } else {
      document.getElementById("initial-color-input").value = color;
    }
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
  debugger;

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
