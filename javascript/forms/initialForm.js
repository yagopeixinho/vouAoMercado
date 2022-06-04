import { verifyFormFields } from "../functions/verifyFormFields.js";
import { changeMainColors } from "../functions/changeMainColors.js";

document.getElementById("log-in-button").addEventListener("click", createUser);

document
  .getElementById("initial-color-input")
  .addEventListener("change", (e) => {
    localStorage.setItem("USER_FAVORITE_COLOR", e.target.value);
    changeMainColors();
  });

function createUser(e) {
  e.preventDefault();

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
