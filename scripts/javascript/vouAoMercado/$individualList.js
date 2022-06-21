import { createNewItemModal } from "../modals/createNewItemModal.js";

(function init() {
  document
    .getElementById("new-item-icon-product")
    .addEventListener("click", createNewItemModal);
})();
