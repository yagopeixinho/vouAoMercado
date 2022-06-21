import { getLocalStorageItem } from "../functions/getLocalStorageItem.js";
import { createNewItemModal } from "../modals/createNewItemModal.js";

(function init() {
  const lists = JSON.parse(getLocalStorageItem("LISTS"));
  const urlParams = new URLSearchParams(window.location.search);

  const listId = parseInt(urlParams.get("item"));
  const openList = lists[listId];

  document.getElementById("products-title").innerText = openList.listName;

  openList?.products?.forEach((item) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
    
    <div class="product-card">
        <div class="product-card-body">
            <div class="product-card-header">
                <div class="product-name">
                    <h2 class="main-font-h4">${item.productName}</h2>
                </div class="product-price">

                <span class="price-label">R$${item.productPrice}</span>
            </div>
            <div class="product-card-main">
                <div>
                    <p>${item.productDescription}</p>
                </div>
            </div>
        </div>

        <div class="product-card-footer">
            <div class="product-card-amount-container">
                <div class="product-card-amount">
                    <div class="product-card-amount-flex">
                        <img src="../assets/media/icons/minus-icon.svg">
                        <span class="product-card-amount-input-container">
                            <input type="number" disabled value="${item.productAmount}" class="product-card-amount-input" />
                        </span>
                        <img src="../assets/media/icons/plus-icon.svg">
                     </div>
                </div>
            </div>
        </div>                           
    </div>`;

    document.getElementById("product-lists").appendChild(productCard);
  });

  document
    .getElementById("new-item-icon-product")
    .addEventListener("click", createNewItemModal);
})();
