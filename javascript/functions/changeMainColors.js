export function changeMainColors() {
  const userFavoriteColor = localStorage.getItem("USER_FAVORITE_COLOR");
  const userClass = document.getElementsByClassName("favorite-user-color");

  for (let index = 0; index < userClass.length; index++) {
    const element = userClass[index];
    element.style.backgroundColor = userFavoriteColor;
  }
}
