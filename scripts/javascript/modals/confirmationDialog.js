export function confirmationDialog(event, idealFunction, header, description) {
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.innerHTML = `
    
     <div class="modal-container">
            <div class="modal-container-body">
                <div class="modal-container-header">
                    <span class="title-and-icone">
                        <h1 class="main-font-h1">${header}</h1>
                    </span>
                </div>
                <form name="newProduct">
                    <div class="modal-container-main">
                        <div>
                            <h3 class="main-font-h3">${description}</h3>
                        </div>
                    </div>
                </form>
                <div class="modal-container-footer">
                    <div class="new-list-btn-container">
                      <button class="btn-main-color-1" id="btn-confirm-dialog" style="background-color: #d14848	">Deletar</button>
                      <button class="btn-main-color-3" style="background-color: rgb(77, 201, 114);"
                          id="btn-cancel-dialog">Cancelar</button>
                    </div>
                </div>
            </div>
        </div>

    `;

  document.body.appendChild(modal);

  document.getElementById("btn-cancel-dialog").addEventListener("click", () => {
    modal.remove();
  });

  document
    .getElementById("btn-confirm-dialog")
    .addEventListener("click", () => {
      try {
        idealFunction(event);
        modal.remove();
      } catch (error) {
        alert(
          `Ocorreu um erro: ${error} - Se isso parece um problema técnico, entre em contato com o desenvolvedor ou tente novamente mais tarde.`
        );
      }
    });
}
