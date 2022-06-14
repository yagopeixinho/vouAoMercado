import {
  inputChangeUserFavoriteColor,
  changeUserFavoriteColor,
} from "../../functions/changeUserFavoriteColor.js";
import { getLocalStorageItem } from "../../functions/getLocalStorageItem.js";

(function init() {
  const initialColor = getLocalStorageItem("USER_FAVORITE_COLOR");
  const inputColorLogin = document.getElementById("user-favorite-color");
  const userFavoriteColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--main-bg-color-1");

  inputColorLogin.addEventListener("change", (ev) => {
    inputChangeUserFavoriteColor(ev);
  });

  if (initialColor === null) {
    inputColorLogin.value = userFavoriteColor;
  } else {
    inputColorLogin.value = initialColor;
    changeUserFavoriteColor(initialColor);
  }
})();
