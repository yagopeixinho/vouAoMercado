import { getAllUserLists } from "../functions/getAllUserLists.js";
import { openModalCreateNewProduct } from "../forms/modals/createNewProduct.js";

const userList = getAllUserLists() ?? [];
const urlParams = new URLSearchParams(window.location.search);
const params = parseInt(urlParams.get("item"));
const thisList = userList[params];

debugger;

(function createProductList() {
  debugger;

  thisList.productsList.forEach((list) => {
    const cardProduct = document.createElement("div");
    cardProduct.classList.add("card-product");

    cardProduct.innerHTML = `
          <div class="card-product-body">
            <div class="card-product-header">
              <div class="card-product-header-title">
                <h1>Nome do produto</h1>
              </div>
              <div class="card-product-header-price">
                <label class="card-product-header-price-label">
                  R$99,99
                </label>
              </div>
            </div>
            <div class="card-product-main">
              <div class="card-product-main-description">
                <p>
                  Product description. It could be the minimum price or
                  something related to the product
                </p>
              </div>
            </div>
            <div class="card-product-footer">
              <div class="card-product-footer-amount">
                <span class="card-product-footer-icons">
                  <img src="../../../assets/icons/minus-icon.svg" />
                </span>
                <h2 class="card-product-footer-amount-number">1</h2>
                <span class="card-product-footer-icons">
                  <img src="../../../assets/icons/plus-icon.svg" />
                </span>
              </div>
            </div>
          </div>
      `;

    document
      .getElementById("list-container-individual")
      .appendChild(cardProduct);
  });
})();

document.getElementById("icon-create-product").addEventListener("click", () => {
  openModalCreateNewProduct(thisList);
});
