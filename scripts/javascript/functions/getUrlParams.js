export default function getUrlParams(queryString) {
  const urlParams = new URLSearchParams(window.location.search);
  return parseInt(urlParams.get(queryString));
}
