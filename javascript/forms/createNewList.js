import { getItemLocalStorage } from "../functions/getItemLocalStorage.js";
import { setItemLocalStorage } from "../functions/setItemLocalStorage.js";

const favoriteColor = getItemLocalStorage("USER_FAVORITE_COLOR");

export function openModalNewList() {
  const modalCreateNewList = document.createElement("div");

  modalCreateNewList.classList.add("create-new-list-modal");
  modalCreateNewList.innerHTML = `
   <div class="modal-new-list-container-form">
      <div class="modal-new-list-header">
      
      </div>

        <div class="modal-new-list-form">
          <form name="newList">
            <input type="text" placeholder="Nome da lista" id="list-name" name="listName"/>
          </form>
        </div>

        <div class="modal-new-list-footer">
          <div class="modal-new-list-btn-row">
            <button class="main-button-color-white btn-modal-new-list" id="btn-new-list">Salvar</button>
          </div>
        </div>
    </div>
    `;
  document.getElementById("body-listing").appendChild(modalCreateNewList);

  const form = document.forms.newList;
  const listName = document.getElementById("list-name");

  form.addEventListener("submit", createNewList);

  listName.addEventListener("focusin", () => {
    listName.style.borderBottom = `1px solid ${favoriteColor}`;
  });

  listName.addEventListener("focusout", () => {
    listName.style.borderBottom = `1px solid rgb(233, 227, 227)`;
  });

  function createNewList(ev) {
    ev.preventDefault();

    const { listName } = form;
    const newList = {
      listName: listName.value,
      totalPrice: 0,
      totalItens: 0,
      productsList: [{}],
    };

    try {
      setItemLocalStorage(newList);
      modalCreateNewList.remove();
    } catch {
      alert(
        `Ocorreu um erro ao tentar criar a lista de nome ${newList.listName}`
      );
    }
  }
}
