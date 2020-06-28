/* let columns = getComputedStyle(document.documentElement).getPropertyValue(
  "--columnsBody"
);
let row = getComputedStyle(document.documentElement).getPropertyValue(
  "--rowBody"
); */

let values = {};

let projects = document.getElementsByClassName("project").length;
let elInterlude = document.getElementsByClassName("interlude").length;
let rowsProject = projects * 5;
document.body.style.setProperty(
  "--rowsProject",
  `${rowsProject + elInterlude}`
);

function settingCarousel() {
  document.addEventListener("DOMContentLoaded", () => {
    let elems = document.querySelectorAll(".carousel");
    let instances = M.Carousel.init(elems, {
      dist: -70,
      fullWidth: !1,
      shift: -100,
      padding: 10,
      numVisible: 7,
      duration: 100,
    });
  });
  settingSizeCarousel();
}

function settingSizeCarousel() {
  let aboutMeFunctionsWidth = document.getElementsByClassName(
    "aboutMeFunctions"
  )[0].offsetWidth;
  let aboutMeFunctionsHeight = document.getElementsByClassName(
    "aboutMeFunctions"
  )[0].offsetHeight;

  //Because the element wil rotate 90deg i will change the value
  document.body.style.setProperty(
    "--carousel-height",
    `${aboutMeFunctionsWidth}px`
  );
  document.body.style.setProperty(
    "--carousel-width",
    `${aboutMeFunctionsHeight}px`
  );
}

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
  val.rows = document.body.childElementCount;
}

function setGrid(val) {
  setValues(val);
  changeSizeFont(val);

  //widthCell
  document.body.style.setProperty("--widthCell", `${val.widthCell}px`);
  document.body.style.setProperty("--heightCell", `${val.heightCell}px`);

  document.body.style.setProperty(
    "--columnsBody",
    `${val.fontSize * 3}px repeat(${val.columns}, 1fr) ${val.fontSize * 3}px`
  );

  document.body.style.setProperty(
    "--rowsBody",
    `90px repeat(${val.rows * 6}, ${val.heightCell}px)`
  );
}

setGrid(values);
settingCarousel();

window.addEventListener("resize", () => {
  setGrid(values);
  settingSizeCarousel();
});
