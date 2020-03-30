const addContrast = document.querySelector(".addContrast");
const invertedMode = document.querySelector(".toggleInverted");
const html = document.getElementsByTagName("html")[0];

addContrast.addEventListener("click", () => {
  html.classList.toggle("contrast");
  addContrast.innerHTML = html.classList.contains("contrast")
    ? "Remove additional contrast"
    : "Add contrast";
});

invertedMode.addEventListener("click", () => {
  html.classList.toggle("inverted");
  invertedMode.innerHTML = html.classList.contains("inverted")
    ? "Normal mode"
    : "Inverted mode";
});
