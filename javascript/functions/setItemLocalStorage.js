export function setItemLocalStorage(key, item) {
  const regexFilter = /\s/g;
  const modifiedKey = key.replace(regexFilter, "_");

  localStorage.setItem(modifiedKey.toUpperCase(), JSON.stringify(item));
}
