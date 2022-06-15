import { getLocalStorageItem } from "./getLocalStorageItem.js";
import { setLocalStorageItem } from "./setLocalStorageItem.js";

export function setMainColorBackground() {
  const color = getLocalStorageItem("USER_FAVORITE_COLOR");

  if (color === null) {
    document.documentElement.style.setProperty("--main-bg-color-1", `#fecf10`);
    setLocalStorageItem("USER_FAVORITE_COLOR", "#fecf10")
  } else {
    document.documentElement.style.setProperty("--main-bg-color-1", `${color}`);
  }
}
