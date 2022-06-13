import { openModalNewList } from "../forms/createNewList.js";
import { getAllUserLists } from "../functions/getAllUserLists.js";
import { getItemLocalStorage } from "../functions/getItemLocalStorage.js";

const user = JSON.parse(getItemLocalStorage("USER"));

(function createTitleList() {
  const h1 = document.createElement("h1");
  h1.innerHTML = `
    <h1 class="main-font-h1" id="lists-title">
        Olá, ${user.username}, essas são suas listas...
    </h1>
  `;

  document.getElementById("lists-title").appendChild(h1);
})();

(function createLists() {
  const userList = getAllUserLists() ?? [];

  userList.forEach((item, index) => {
    const individualList = document.createElement("div");
    individualList.classList.add("individual-list");
    individualList.style.backgroundColor = item.listColor;
    individualList.dataset.index = index;

    individualList.innerHTML = `
      <div class="individual-list-header">
        <h1 class="individual-list-header-title">${item.listName}</h1>
      </div>
      <div class="individual-list-footer">
        <div class="individual-list-footer-tools">
          <div class="individual-list-footer-tools-icons-container">
            <!-- img -->
          </div>
        </div>
      </div>
    `;

    document.getElementById("list-container").appendChild(individualList);
  });
})();

document
  .getElementById("icon-create-list")
  .addEventListener("click", openModalNewList);

document.getElementById("list-container").addEventListener("click", (ev) => {
  debugger;
  const listId = ev.target.dataset.index;
  window.location.replace(
    `../../pages/individualListing/individualListing.html?item=${listId}`
  );
});
