import { getLocalStorageItem } from "../functions/getLocalStorageItem.js";
import { setLocalStorageItem } from "../functions/setLocalStorageItem.js";

export function createNewItemModal() {
  const lists = JSON.parse(getLocalStorageItem("LISTS"));
  const urlParams = new URLSearchParams(window.location.search);

  const listId = parseInt(urlParams.get("item"));
  const openList = lists[listId];

  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.innerHTML = `
    <div class="modal-container">
                <div class="modal-container-body">
                    <div class="modal-container-header">
                        <span class="title-and-icone">
                            <img src="../assets/media/icons/cart-emoji-icon.svg" />
                            <h1 class="main-font-h1">Criando um novo produto!</h1>
                        </span>
                    </div>
                    <form name="newProduct">
                        <div class="modal-container-main">
                            <div class="modal-new-item-form-container">
                                <div class="modal-new-list-input-text-container">
                                    <h2 class="main-font-h2">
                                        Vamos adicionar mais produtos a esse carrinho!
                                    </h2>
                                    <input class="main-input-text input-modal-new-list" type="text"
                                        placeholder="Insira o nome do produto" id="productName" name="productName"/>
                                </div>
                                <div class="modal-new-list-input-text-container">
                                    <textarea type="textarea" id="productDescription" class="main-input-text-area"
                                        rows="5"
                                        placeholder="Insira aqui uma descrição mais prolongada a respeito do produto, alguma observação ou algo específico que você precisa lembrar."
                                        name="productDescription"
                                        cols="33"></textarea>
                                </div>

                                <div class="price-amount-options">
                                    <div class="modal-new-list-input-text-container product-price-container">
                                        <input class="main-input-text input-modal-new-list" type="number"
                                            placeholder="R$12,00" id="productPrice"  name="productPrice"/>
                                    </div>
                                    <div class="amount-itens-container">
                                        <div class="amount-container">
                                            <span id="product-amount-plus">
                                                <img src="../assets/media/icons/plus-icon.svg">
                                            </span>
                                            <span>
                                                <input type="number" id="product-amount" value="1"
                                                    class="amount-itens-input-text" disabled name="productAmount">
                                            </span>

                                            <span id="product-amount-minus">
                                                <img src="../assets/media/icons/minus-icon.svg">
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div class="modal-container-footer">
                        <div class="new-list-btn-container">
                            <button class="btn-main-color-3" style="background-color: ${openList.colorList}"; id="btn-close-modal">Cancelar</button>
                            <button class="btn-main-color-1" id="btn-create-list" type="submit">Salvar</button>
                        </div>
                    </div>
                </div>
            </div>
`;

  document.getElementById("products-container-body").appendChild(modal);

  function closeNewItemModal() {
    modal.remove();
  }

  function createNewItem() {
    const form = document.forms.newProduct;
    const [productName, productDescription, productPrice, productAmount] = form;

    const newItem = {
      productName: productName.value,
      productDescription: productDescription.value,
      productPrice: parseFloat(productPrice.value),
      productAmount: parseInt(productAmount.value),
    };

    try {
      openList?.products.push(newItem);
      lists[listId] = openList;
      setLocalStorageItem("LISTS", JSON.stringify(lists));
    } catch (error) {
      alert(
        `Ocorreu um erro: ${error} - Se isso parece um problema técnico, entre em contato com o desenvolvedor ou tente novamente mais tarde.`
      );
    }
  }

  document
    .getElementById("btn-close-modal")
    .addEventListener("click", closeNewItemModal);

  document
    .getElementById("product-amount-plus")
    .addEventListener("click", () => {
      const productAmount = document.getElementById("product-amount");
      productAmount.value = parseInt(productAmount.value) + 1;
    });

  document
    .getElementById("product-amount-minus")
    .addEventListener("click", () => {
      const productAmount = document.getElementById("product-amount");
      if (productAmount.value > 1) {
        productAmount.value = parseInt(productAmount.value) - 1;
      }
    });

  document
    .getElementById("btn-create-list")
    .addEventListener("click", createNewItem);
}
