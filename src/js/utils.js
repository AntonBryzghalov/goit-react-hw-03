function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function writeToLocalStorage(itemName, value) {
  localStorage.setItem(itemName, JSON.stringify(value));
}

function readFromLocalStorage(itemName, defaultValue = null) {
  const result = localStorage.getItem(itemName);
  return result === null ? defaultValue : JSON.parse(result);
}

export { capitalizeFirstLetter, writeToLocalStorage, readFromLocalStorage };
