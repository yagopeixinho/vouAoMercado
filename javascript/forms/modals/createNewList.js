import { getItemLocalStorage } from "../../functions/getItemLocalStorage.js";
import { setItemLocalStorage } from "../../functions/setItemLocalStorage.js";

const favoriteColor = getItemLocalStorage("USER_FAVORITE_COLOR");

export function openModalNewList() {
  const modalCreateNewList = document.createElement("div");

  modalCreateNewList.classList.add("create-new-list-modal");
  modalCreateNewList.innerHTML = `
        <div class="modal-new-list-container-form">
        <div class="modal-new-list-header" id="modal-new-list-header">
          <div class="container-image-close-modal">
            <img src="../../../assets/icons/close-x-icon.svg" id="x-close-modal" />
          </div>
        </div>

        <div class="modal-new-list-form">
          <form name="newList">
            <input
              type="text"
              placeholder="Nome da lista"
              id="list-name"
              name="listName"
              class="modal-new-list-form-input-text"
              required
            />

            <div class="container-color-input">
              <label class="modal-new-list-form-input-color-label"
                >Qual a cor dessa lista?</label
              >
              <input
                type="color"
                id="list-color"
                name="listColor"
                class="modal-new-list-form-input-color"
              />
            </div>
          </form>
        </div>

        <div class="modal-new-list-footer" id="modal-new-list-footer">
          <div class="modal-new-list-btn-row">
            <button
              class="main-button-color-white btn-modal-new-list"
              id="btn-new-list"
              style="background-color:${favoriteColor};"
            >
              Salvar
            </button>
          </div>
        </div>
      </div>
    `;
  document.getElementById("body-listing").appendChild(modalCreateNewList);

  const form = document.forms.newList;
  const listName = document.getElementById("list-name");

  document.getElementById("btn-new-list").addEventListener("click", (ev) => {
    if (form.reportValidity()) {
      createNewList(ev);
    }
  });

  document.getElementById("x-close-modal").addEventListener("click", () => {
    modalCreateNewList.remove();
  });

  document.getElementById("list-color").addEventListener("change", (ev) => {
    const listColor = ev.target.value;
    document.getElementById("modal-new-list-header").style.backgroundColor =
      listColor;
    document.getElementById("modal-new-list-footer").style.backgroundColor =
      listColor;
  });

  listName.addEventListener("focusin", () => {
    listName.style.borderBottom = `1px solid ${favoriteColor}`;
  });

  listName.addEventListener("focusout", () => {
    listName.style.borderBottom = `1px solid rgb(233, 227, 227)`;
  });

  function createNewList(ev) {
    ev.preventDefault();
    const localStorageTotalList =
      JSON.parse(getItemLocalStorage("USER_LISTS")) ?? [];

    const { listName, listColor } = form;
    const newList = {
      listName: listName.value,
      listColor: listColor.value,
      totalPrice: 0,
      totalItens: 0,
      productsList: [{}],
    };

    localStorageTotalList.push(newList);

    try {
      setItemLocalStorage(`USER_LISTS`, localStorageTotalList);
      modalCreateNewList.remove();
    } catch {
      alert(
        `Ocorreu um erro ao tentar criar a lista de nome ${newList.listName}`
      );
    }
  }
}
