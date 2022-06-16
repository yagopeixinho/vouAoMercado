import { getLocalStorageItem } from "../functions/getLocalStorageItem.js";
import { createNewListModal } from "../modals/createNewListModal.js";

(function init() {
  const user = JSON.parse(getLocalStorageItem("USER"));
  debugger;
  const lists = JSON.parse(getLocalStorageItem("LISTS"));

  lists?.forEach((item) => {
    debugger;

    const userLists = document.createElement("div");
    userLists.classList.add("card-list");
    userLists.style.backgroundColor = item.colorList;

    userLists.innerHTML = `
      <div class="title-card">
        <h4 class="main-font-h4">${item.listName}<h4/>
      </div>
    `;

    document.getElementById("user-lists").appendChild(userLists);
  });

  document
    .getElementById("new-item-icon")
    .addEventListener("click", createNewListModal);

  document.getElementById(
    "list-view-title"
  ).innerText = `Olá, ${user.username}! Vamos ao mercado?`;
})();
