import { getItemLocalStorage } from "../../functions/getItemLocalStorage.js";

const userFavoriteColor = getItemLocalStorage("USER_FAVORITE_COLOR");

export function openModalCreateNewProduct(list) {
  debugger;

  const modalCreateNewProduct = document.createElement("div");
  modalCreateNewProduct.classList.add("create-new-product-modal");
  modalCreateNewProduct.innerHTML = `
    <div class="modal-new-product-container-form">
    <div class="modal-new-product-header">
      <div class="container-image-close-modal" style="background-color:${list?.listColor}">
      <h2 class="modal-new-product-header-title">Você está criando um novo produto para a lista "${list?.listName}"</h2>

        <img src="../../../assets/icons/close-x-icon.svg"/>

      </div>
    </div>

    <div class="modal-new-product-form">
      <form name="newProduct">
        <input
          type="text"
          placeholder="Nome do produto"
          id="product-name"
          name="productPrice"
          class="modal-new-product-form-input-text"
          required
        />

        <input
        type="text"
        placeholder="Descrição do produto"
        id="product-description"
        name="productDescription"
        class="modal-new-product-form-input-text"
        required
      />

        <input
        type="number"
        placeholder="Preço do produto"
        id="product-price"
        name="productPrice"
        class="modal-new-product-form-input-text"
        required
      />

      <input
      type="number"
      placeholder="Quantidade do produto"
      id="product-amount"
      name="productAmount"
      class="modal-new-product-form-input-text"
      required
    />

      </form>
    </div>

    <div class="modal-new-product-footer" id="modal-new-product-footer" style="background-color:${list?.listColor}">
      <div class="modal-new-product-btn-row">
        <button
          class="main-button-color-white btn-modal-new-product"
          id="btn-new-product"
        >
          Salvar
        </button>
      </div>
    </div>
  </div>

    `;

  document
    .getElementById("body-individual-listing")
    .appendChild(modalCreateNewProduct);
}
