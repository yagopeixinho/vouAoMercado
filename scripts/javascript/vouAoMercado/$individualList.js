import { getIndividualList } from "../functions/getIndividualList.js";
import { getLocalStorageItem } from "../functions/getLocalStorageItem.js";
import getUrlParams from "../functions/getUrlParams.js";
import { setLocalStorageItem } from "../functions/setLocalStorageItem.js";
import { createNewItemModal } from "../modals/createNewItemModal.js";

document
  .getElementById("new-item-icon-product")
  .addEventListener("click", createNewItemModal);

(function init() {
  const list = getIndividualList();

  document.getElementById("products-title").innerText = list.listName;

  list?.products?.forEach((item, index) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.dataset.index = index;

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
                        <img src="../assets/media/icons/minus-icon.svg" id="product-card-minus-icon-${index}" data-signal="minus" data-index=${index}>

                        <span class="product-card-amount-input-container">
                            <input type="number" disabled value="${item.productAmount}" class="product-card-amount-input" id="input-amount-${index}"/>
                        </span>

                        <img src="../assets/media/icons/plus-icon.svg" id="product-card-plus-icon-${index}" data-signal="plus" data-index=${index}>
                     </div>
                </div>
            </div>
        </div>                           
    </div>`;

    document.getElementById("product-lists").appendChild(productCard);

    document.getElementById("product-lists").addEventListener("click", (ev) => {
      const localStorageList = JSON.parse(getLocalStorageItem("LISTS"));
      const idList = getUrlParams("listId");
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
          break;

        case "minus":
          (list.products[ev.target.dataset.index].productAmount =
            parseInt(inputAmount.value) - 1),
            (inputAmount.value =
              list.products[ev.target.dataset.index].productAmount);

          localStorageList[idList] = list;
          setLocalStorageItem("LISTS", JSON.stringify(localStorageList));

          break;

        default:
          break;
      }
    });
  });
})();
