import { getIndividualList } from "../functions/getIndividualList.js";
import { getLocalStorageItem } from "../functions/getLocalStorageItem.js";
import getUrlParams from "../functions/getUrlParams.js";
import { setLocalStorageItem } from "../functions/setLocalStorageItem.js";
import { confirmationDialog } from "../modals/confirmationDialog.js";
import { createNewItemModal } from "../modals/createNewItemModal.js";

document
  .getElementById("new-item-icon-product")
  .addEventListener("click", createNewItemModal);

const localStorageList = JSON.parse(getLocalStorageItem("LISTS"));
const idList = getUrlParams("listId");
var list = getIndividualList();

function refreshTotalPrice() {
  var totalPrice = 0;
  list.products.forEach((item) => {
    totalPrice = totalPrice + item.productPrice * item.productAmount;
  });
  document.getElementById("span-total-price").innerText = `R$${totalPrice}`;
}

function refreshProductsList() {
  document.getElementById("product-lists").innerText = "";
  getProducts();
}

function getProducts() {
  list = getIndividualList();
  document.getElementById("span-total-itens").innerText = list.products.length;
  document.getElementById("products-title").innerText = list.listName;

  list?.products?.forEach((item, index) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.dataset.index = index;

    productCard.innerHTML = `
      <div class="product-card" id="product-card">
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
                <div class="options-card">
                    <div>
                      <img src="../assets/media/icons/edit-icon.svg" data-info-type="edit" data-index="${index}" class="icon-card-product"/>
                    </div>
                    <div>
                      <img src="../assets/media/icons/delete-icon.svg" data-info-type="delete" data-index="${index}" class="icon-card-product"/>
                    </div>
                  </div>

                  <div class="product-card-amount">
                      <div class="product-card-amount-flex">
                          <img src="../assets/media/icons/minus-icon.svg" id="product-card-minus-icon" data-signal="minus" data-index="${index}" data-info-type="amount">

                          <span class="product-card-amount-input-container">
                              <input type="number" disabled value="${item.productAmount}" class="product-card-amount-input" id="input-amount-${index}"/>
                          </span>

                          <img src="../assets/media/icons/plus-icon.svg" id="product-card-plus-icon" data-signal="plus" data-index="${index}" data-info-type="amount">
                      </div>
                  </div>
              </div>
          </div>                           
      </div>`;
    document.getElementById("product-lists").appendChild(productCard);
  });
}

(function init() {
  refreshTotalPrice();
  getProducts();

  function removeProduct(ev) {
    localStorageList[idList].products.splice(ev.target.dataset.index, 1);
    setLocalStorageItem("LISTS", JSON.stringify(localStorageList));
    refreshProductsList();
  }

  document.getElementById("product-lists").addEventListener("click", (ev) => {
    switch (ev.target.dataset.infoType) {
      case "edit":
        createNewItemModal(ev);
        break;

      case "delete":
        confirmationDialog(
          ev,
          removeProduct,
          "Cuidado! Você está retirando um produto da lista!",
          "Lembre-se! Remover esse produto o fará desaparecer completamente do sistema. Tem certeza que deseja fazer isso?"
        );

        break;

      case "amount":
        const inputAmount = document.getElementById(
          `input-amount-${ev.target.dataset.index}`
        );
        switch (ev.target.dataset.signal) {
          case "plus":
            (list.products[ev.target.dataset.index].productAmount =
              parseInt(inputAmount.value) + 1),
              (inputAmount.value =
                list.products[ev.target.dataset.index].productAmount);

            localStorageList[idList] = list;
            setLocalStorageItem("LISTS", JSON.stringify(localStorageList));
            refreshTotalPrice();
            break;

          case "minus":
            if (list.products[ev.target.dataset.index].productAmount > 1) {
              (list.products[ev.target.dataset.index].productAmount =
                parseInt(inputAmount.value) - 1),
                (inputAmount.value =
                  list.products[ev.target.dataset.index].productAmount);

              localStorageList[idList] = list;
              setLocalStorageItem("LISTS", JSON.stringify(localStorageList));
              refreshTotalPrice();
            } else {
              break;
            }
            break;
        }
        break;
    }
  });
})();

document.getElementById("go-back-icon").addEventListener("click", () => {
  window.location.replace(`/views/listViews.html`);
});
