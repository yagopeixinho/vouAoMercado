import { getLocalStorageItem } from "../functions/getLocalStorageItem.js";
import { createNewListModal } from "../modals/createNewListModal.js";

(function init() {
  const user = JSON.parse(getLocalStorageItem("USER"));

  document
    .getElementById("new-item-icon")
    .addEventListener("click", createNewListModal());

  document.getElementById(
    "list-view-title"
  ).innerText = `Olá, ${user.username}! Vamos ao mercado?`;
})();
