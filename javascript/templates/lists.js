import { getItemLocalStorage } from "../functions/getIemLocalStorage.js";

(function createTitleList() {
  const user = JSON.parse(getItemLocalStorage("USER"));

  const h1 = document.createElement("h1");
  h1.innerHTML = `
    <h1 class="main-font-h1" id="lists-title">
        Olá, ${user.username}, essas são suas listas...
    </h1>
  `;

  document.getElementById("lists-title").appendChild(h1);
})();
