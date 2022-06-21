import { getLocalStorageItem } from "./getLocalStorageItem.js";


export function getIndividualList() {
  const lists = JSON.parse(getLocalStorageItem("LISTS"));
  const urlParams = new URLSearchParams(window.location.search);

  const listId = parseInt(urlParams.get("item"));
  return lists[listId];
}
