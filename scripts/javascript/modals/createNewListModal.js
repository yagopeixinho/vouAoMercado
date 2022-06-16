import { getLocalStorageItem } from "../functions/getLocalStorageItem.js";
import { setLocalStorageItem } from "../functions/setLocalStorageItem.js";

export function createNewListModal() {
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.innerHTML = `

      <div class="modal-container">
        <div class="modal-container-body">
          <div class="modal-container-header">
            <span class="title-and-icone">
              <img src="../assets/media/icons/list-icon.svg" />
              <h1 class="main-font-h1">Criando uma nova lista!</h1>
            </span>
          </div>
          <form name="newList">
            <div class="modal-container-main">
              <div class="modal-new-list-form-container">
                <div class="modal-new-list-input-text-container">
                  <h2 class="main-font-h2">
                    Você vai ao mercado? Então vamos criar uma lista para você!
                  </h2>
                  <input
                    class="main-input-text input-modal-new-list"
                    type="text"
                    placeholder="Insira o nome da nova lista"
                    id="listName"
                  />
                </div>
                <div class="modal-new-list-input-color-container">
                  <h2 class="main-font-h2">Qual cor combina com essa lista?</h2>
                  <input
                    class="main-input-color input-modal-new-list modal-new-list-input-color"
                    type="color"
                    placeholder="Insira o nome da nova lista"
                    value="#00D8FF"
                    id="colorList"
                  />
                </div>
              </div>          
  
            </div>  
          </form>
          <div class="modal-container-footer">
            <div class="new-list-btn-container">
                <button class="btn-main-color-3" id="btn-close-modal">Cancelar</button>
                <button class="btn-main-color-1" id="btn-create-list" type="submit">Salvar</button>
              </div>
            </div>
          </div>
        </div>
      </div>

 `;

  function createNewList() {
    debugger;
    const lists = JSON.parse(getLocalStorageItem("LISTS")) ?? [];

    const form = document.forms.newList;

    const [colorList, listName] = form;

    const newList = {
      colorList: colorList.value,
      listName: listName.value,
    };

    lists.push(newList);

    try {
      setLocalStorageItem("LISTS", JSON.stringify(lists));
      closeNewListModal();
    } catch (error) {
      alert(
        `Ocorreu um erro: ${error} - Se isso parece um problema técnico, entre em contato com o desenvolvedor ou tente novamente mais tarde.`
      );
    }
  }

  function closeNewListModal() {
    modal.remove();
  }

  document.getElementById("list-views").appendChild(modal);

  document
    .getElementById("btn-close-modal")
    .addEventListener("click", closeNewListModal);

  document
    .getElementById("btn-create-list")
    .addEventListener("click", createNewList);
}
