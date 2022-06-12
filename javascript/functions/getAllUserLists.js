import { getItemLocalStorage } from "./getItemLocalStorage.js";

export function getAllUserLists() {
  ;
  return JSON.parse(getItemLocalStorage("USER_LISTS"));
}
