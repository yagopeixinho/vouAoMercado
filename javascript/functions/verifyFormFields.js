export function verifyFormFields(id) {
  return document.getElementById(`${id}`).reportValidity();
}
