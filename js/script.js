/* let columns = getComputedStyle(document.documentElement).getPropertyValue(
  "--columnsBody"
);
let row = getComputedStyle(document.documentElement).getPropertyValue(
  "--rowBody"
); */

let values = {};

function changeSizeFont(val) {
  val.widthWindow = val.widthWindow / 92.83 - 1;
  if (val.columns == 10) {
    val.widthWindow = val.widthWindow > 18 ? val.widthWindow : 18;
  } else if (val.columns == 8) {
    val.widthWindow = val.widthWindow > 16 ? val.widthWindow : 16;
  } else if (val.columns == 5) {
    val.widthWindow = val.widthWindow > 14.6 ? val.widthWindow : 14.6;
  } else if (val.columns == 3) {
    val.widthWindow = val.widthWindow > 12 ? val.widthWindow : 12;
  }
  document.body.style.setProperty("font-size", `${val.widthWindow}px`);
}

function setValues(val) {
  val.widthWindow = window.innerWidth;
  val.proportion = 92.83;
  val.fontSize = val.widthWindow / val.proportion; //changeSizeFont
  val.margin = 3 * val.fontSize;
  val.columns = getComputedStyle(document.documentElement).getPropertyValue(
    "--columns"
  );
  val.widthCell = val.widthWindow / val.columns;
  val.heightCell = (val.widthCell * 9) / 16;
  val.totalGutter = val.fontSize * (val.columns - 1);
}

function setGrid(val) {
  setValues(val);
  changeSizeFont(val);

  //widthCell
  document.body.style.setProperty("--widthCell", `${val.widthCell}px`);

  document.body.style.setProperty(
    "--columnsBodyTemplate",
    `${val.fontSize * 3}px repeat(${val.columns}, 1fr) ${val.fontSize * 3}px`
  );

  document.body.style.setProperty(
    "grid-template-rows",
    `90px repeat(63, ${val.heightCell}px)`
  );
}

setGrid(values);

window.addEventListener("resize", () => {
  setGrid(values);
});
