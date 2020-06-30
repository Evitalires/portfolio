/* let columns = getComputedStyle(document.documentElement).getPropertyValue(
  "--columnsBody"
);
let row = getComputedStyle(document.documentElement).getPropertyValue(
  "--rowBody"
); */

let values = {};

let projects = document.getElementsByClassName("project").length;

function settingCarousel() {
  document.addEventListener("DOMContentLoaded", () => {
    let elems = document.querySelectorAll(".carousel");
    let instances = M.Carousel.init(elems, {
      dist: -35,
      fullWidth: !1,
      shift: -20,
      padding: 10,
      duration: 25,
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

  //Because the element wil rotate 90deg I will change the value
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
  setRows(val);
}

function setRows(val) {
  //Calculating the total of rows necesary for the page
  val.rowsElements = {
    count: document.body.childElementCount,
    header: 1,
    project: 1,
    script: document.getElementsByTagName("script").length,
    break: document.getElementsByClassName("break").length,
  };

  val.rowsElements.total =
    val.rowsElements.count -
    val.rowsElements.header -
    val.rowsElements.break -
    val.rowsElements.script -
    val.rowsElements.project;

  val.rowsForSection = 5;
  val.rowsTotal = {
    header: 1,
    partial: val.rowsElements.total * val.rowsForSection,
    breaks: document.getElementsByClassName("break").length * 7,
    projects: document.getElementsByClassName("project").length * 6,
  };

  if (window.innerWidth <= 1113) {
    let contact = 5;
    val.rowsTotal = {
      header: 1 + contact,
      partial: val.rowsElements.total * val.rowsForSection,
      breaks: document.getElementsByClassName("break").length * 4,
      projects: document.getElementsByClassName("project").length * 6 * 2,
    };
  }
  if (window.innerWidth <= 740) {
    console.log(document.getElementsByClassName("break").length);
    val.rowsTotal.breaks = document.getElementsByClassName("break").length * 3;
    val.rowsTotal.projects =
      document.getElementsByClassName("project").length * 5 * 2;
  }

  val.rows =
    val.rowsTotal.header +
    val.rowsTotal.partial +
    val.rowsTotal.breaks +
    val.rowsTotal.projects;

  let elInterlude = document.getElementsByClassName("interlude").length;
  console.log(val);

  document.body.style.setProperty("--rowsProject", `${val.rowsTotal.projects}`);
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
    `90px repeat(${val.rows}, ${val.heightCell}px)`
  );
}

setGrid(values);
settingCarousel();

window.addEventListener("resize", () => {
  setGrid(values);
  settingSizeCarousel();
});
