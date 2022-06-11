import { getItemLocalStorage } from "./getItemLocalStorage.js";

export function getAllUserLists() {
  debugger;
  return JSON.parse(getItemLocalStorage("USER_LISTS"));
}
