let data = {
  projects: [
    (project = [
      {
        title: "Purpose",
        description: "Hola, purpose 0",
      },
      {
        title: "Objective",
        description: "Hola, Objective 0",
      },
      {
        title: "Approach",
        description: "Hola, Approach 0",
      },
      {
        title: "Time",
        description: "Hola, Time 0",
      },
      {
        title: "My Role",
        description: "Hola, MyRole 0",
      },
    ]),
    (project = [
      {
        title: "Purpose",
        description: "Hola, purpose 1",
      },
      {
        title: "Objective",
        description: "Hola, Objective 1",
      },
      {
        title: "Approach",
        description: "Hola, Approach 1",
      },
      {
        title: "Time",
        description: "Hola, Time 1",
      },
      {
        title: "My Role",
        description: "Hola, MyRole 1",
      },
    ]),
  ],
};

let test = 0;

let parentProject = {
  element: 0,
  index: 0,
};

let projects = document.getElementsByClassName("project");

function listenerForProject(projects) {
  for (let index = 0; index < projects.length; index++) {
    let project = projects[index];

    project.addEventListener("mouseenter", () => {
      parentProject = {
        element: project,
        index: index,
      };
    });
  }
}

function listenersForPickers() {
  let pickers = document.getElementsByClassName("btn picker");
  for (let index = 0; index < pickers.length; index++) {
    let picker = pickers[index];
    picker.addEventListener("click", () => {
      givingData(parentProject, picker);
      picker.className = "btn picker active";
      removeClass(picker, pickers, "btn picker");
    });
  }
}

function removeClass(main, siblings, className) {
  for (let index = 0; index < siblings.length; index++) {
    let sibling = siblings[index];
    if (sibling.innerText != main.innerText) {
      sibling.className = className;
    }
  }
}

function givingData(project, picker) {
  let aboutProjectDescription =
    project.element.children[1].children[1].firstElementChild;
  let arrayProject = data.projects[parentProject.index];

  arrayProject.map((el, i) => {
    if (picker.innerText == el.title) {
      aboutProjectDescription.innerText = el.description;
    }
  });
}

function initialDataProjects(projects) {
  let dataProjects = data.projects;
  for (let index = 0; index < projects.length; index++) {
    let project = projects[index];
    let picker = project.children[1].firstElementChild.firstElementChild;
    let aboutProjectDescription =
      project.children[1].children[1].firstElementChild;

    picker.className = "btn picker active";
    aboutProjectDescription.innerText = dataProjects[index][index].description;
  }
}
initialDataProjects(projects);

function settingCarousel() {
  console.log("actualizado");

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
function lineInHeader() {
  let links = document.getElementsByClassName("linkPage");
  let parents = document.getElementsByTagName("li");
  for (let index = 0; index < links.length; index++) {
    let link = links[index];
    link.addEventListener("click", () => {
      let parent = link.parentElement;
      parent.className = "clicked";
      removeClass(parent, parents, " ");
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  settingCarousel();
  listenerForProject(projects);
  listenersForPickers();
  lineInHeader();
});

window.addEventListener("resize", () => {
  resetCarousel();
});
