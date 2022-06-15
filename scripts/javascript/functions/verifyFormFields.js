export function verifyFormFields(formId) {
  return document.getElementById(formId).reportValidity();
}
