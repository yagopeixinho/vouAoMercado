import { openModalNewList } from "../forms/createNewList.js";
import { getItemLocalStorage } from "../functions/getItemLocalStorage.js";

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

document
  .getElementById("icon-create-list")
  .addEventListener("click", openModalNewList);
