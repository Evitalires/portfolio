let data = {
  projects: {},
};
let values = {};

let projects = document.getElementsByClassName("project").length;

function settingCarousel() {
  console.log("update");

  document.addEventListener("DOMContentLoaded", function () {
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
    "containerCarousel"
  )[0].offsetWidth;

  let aboutMeFunctionsHeight = document.getElementsByClassName(
    "containerCarousel"
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

function resetCarousel() {
  M.Carousel.init(document.querySelectorAll(".carousel"), {
    dist: -35,
    fullWidth: !1,
    shift: -20,
    padding: 10,
    duration: 25,
  });

  settingSizeCarousel();
}

settingCarousel();

window.addEventListener("resize", () => {
  /* setGrid(values); */
  resetCarousel();
});
