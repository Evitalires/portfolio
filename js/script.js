// Init
/* let rellax = new Rellax(".relax");
window.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key == "F5") {
    e.preventDefault();
    rellax.destroy();
    location.reload();
  }
}); */
//Crear un evento para la sección break. Cuando haya hover, destruir el objeto rellax por defecto y usar la función reflex

//Setting css variables
let columns = getComputedStyle(document.documentElement).getPropertyValue(
  "--columnsBody"
);
let row = getComputedStyle(document.documentElement).getPropertyValue(
  "--rowBody"
);
let minSize = 18;
let totalGutter = minSize * (columns - 1);
let widthContent =
  (document.getElementsByTagName("header")[0].offsetWidth - totalGutter) /
  columns;
let rowLength = ((widthContent * 9) / 16).toString();

document.body.style.setProperty(
  "grid-template-rows",
  `repeat(${64}, ${rowLength}px )`
);
