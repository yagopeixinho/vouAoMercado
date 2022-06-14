export function inputChangeUserFavoriteColor(ev) {
  document.documentElement.style.setProperty(
    "--main-bg-color-1",
    `${ev.target.value}`
  );
}

export function changeUserFavoriteColor(ev) {
  document.documentElement.style.setProperty("--main-bg-color-1", `${ev}`);
}
