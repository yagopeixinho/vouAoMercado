export function createNewListModal() {
  debugger;
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
              />
            </div>
            <div class="modal-new-list-input-color-container">
              <h2 class="main-font-h2">Qual cor combina com essa lista?</h2>
              <input
                class="main-input-color input-modal-new-list modal-new-list-input-color"
                type="color"
                placeholder="Insira o nome da nova lista"
                value="#00D8FF"
              />
            </div>
          </div>
        </div>
        <div class="modal-container-footer">
          <div class="new-list-btn-container">
              <button class="btn-main-color-3">Cancelar</button>
              <button class="btn-main-color-1">Salvar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
 `;

  document.getElementById("list-views").appendChild(modal);
}