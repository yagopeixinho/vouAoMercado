import { getLocalStorageItem } from "../functions/getLocalStorageItem.js";
import { setLocalStorageItem } from "../functions/setLocalStorageItem.js";
import { createNewListModal } from "../modals/createNewListModal.js";
import { confirmationDialog } from "../modals/confirmationDialog.js";

const user = JSON.parse(getLocalStorageItem("USER"));
var localStorageLists = JSON.parse(getLocalStorageItem("LISTS"));

function getListViews() {
  const lists = JSON.parse(getLocalStorageItem("LISTS"));

  lists?.forEach((item, index) => {
    const userLists = document.createElement("div");
    userLists.classList.add("card-list");
    userLists.style.backgroundColor = item.colorList;
    userLists.dataset.index = index;

    userLists.innerHTML = `
      <div class="title-card">
        <div>
          <h4 class="main-font-h4"><textarea type="text" class="input-card-title" id="card-input-title-${index}" data-index="${index}" rows="5" cols="33" style="overflow:hidden"/>${item.listName}</textarea><h4/>
        </div>
      </div>

        <div class="card-footer">
          <div>
            <img src="../../../../assets/media/icons/delete-icon.svg" width="30px" id="card-input-trash-${index}" data-index="${index}"/>
          </div>

          <div>
            <input type="color" class="card-input-color" value="${item.colorList}" id="card-input-color-${index}" data-index="${index}"/>
          </div>
        </div>
    `;

    document.getElementById("user-lists").appendChild(userLists);
  });
}

function refreshListViews() {
  document.getElementById("user-lists").innerHTML = "";
  getListViews();
}

function deleteList(ev) {
  localStorageLists.splice(ev.target.dataset.index, 1);
  setLocalStorageItem("LISTS", JSON.stringify(localStorageLists));
  refreshListViews();
}

(function init() {
  getListViews();

  document.getElementById("lists-container").addEventListener("click", (ev) => {
    const listId = ev.target.dataset.index;

    if (ev.target.dataset.index && ev.target.className === "card-list") {
      window.location.replace(`/views/individualList.html?listId=${listId}`);
    }

    if (ev.target.id === `card-input-color-${ev.target.dataset.index}`) {
      document
        .getElementById(`card-input-color-${ev.target.dataset.index}`)
        .addEventListener("change", (ev) => {
          const idList = ev.target.dataset.index;

          localStorageLists[idList].colorList = ev.target.value;
          setLocalStorageItem("LISTS", JSON.stringify(localStorageLists));
          refreshListViews();
        });
    }

    if (ev.target.id === `card-input-trash-${ev.target.dataset.index}`) {
      confirmationDialog(
        ev,
        deleteList,
        "Eita, você está deletando uma lista inteirinha!",
        "Ao confirmar, toda a lista e seus itens serão deletados permanentemente do sistema. Deseja continuar mesmo assim?"
      );
    }

    if (ev.target.id === `card-input-title-${ev.target.dataset.index}`) {
      document.getElementById(ev.target.id).addEventListener("change", (ev) => {
        console.log(ev.target.value);

        const idList = ev.target.dataset.index;
        localStorageLists[idList].listName = ev.target.value;
        setLocalStorageItem("LISTS", JSON.stringify(localStorageLists));
      });
    }
  });

  document
    .getElementById("new-item-icon")
    .addEventListener("click", createNewListModal);

  document.getElementById(
    "list-view-title"
  ).innerText = `Olá, ${user.username}! Vamos ao mercado?`;
})();
