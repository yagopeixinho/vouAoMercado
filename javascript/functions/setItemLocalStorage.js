export function setItemLocalStorage(item) {
  localStorage.setItem(`LISTA_${item.listName}`, JSON.stringify(item));
}
