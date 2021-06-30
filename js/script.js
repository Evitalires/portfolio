/* let data = {
  projects: [
    (project = [
      {
        title: "Purpose",
        description: "create a simple social network for web developers."
      },
      {
        title: "Objective",
        description:
          " Each developer should see other developer's profiles and they can: \n Create a user. \n Log in ther user. \n See their profile. \n Add experience and educational credentials."
      },
      {
        title: "Approach",
        description:
          "Trought the curse of Sass.js from Traversy Media, I take their lesson and center my focus in create something different."
      },
      {
        title: "Time",
        description: "No time needed"
      },
      {
        title: "My Role",
        description: "Main FrontedDeveloper"
      }
    ]),
    (project = [
      {
        title: "Purpose",
        description:
          "Trought the course of React.js, create an application that teaches me why the patterns from React.js has become so popular in web development."
      },
      {
        title: "Objective",
        description:
          "Understand the main concepts:\n Rendering Elements.\n Components and Props \n State and Lifecycle\n Handling Events \nConditional Rendering \nLists and Keys \nComposition vs Inheritance"
      },
      {
        title: "Approach",
        description:
          "Trought the curse of React.js from Platzi, I get close to react.js as a learner. My focus was entirely center to follow the instructions from the professor having as result the project PlatziVideo which is web application center in play videos."
      },
      {
        title: "Time",
        description: "16 hours"
      },
      {
        title: "My Role",
        description:
          "As a student, my role was focusing on initially following the lessons and overcome the challenges. Then, after the course ended my role change from student to the main feature contributor in the project."
      }
    ]),
    (project = [
      {
        title: "Purpose",
        description:
          "Build a web page that serves as an example of how could look the webpage for"
      },
      {
        title: "Objective",
        description:
          "Applied my knowledge in HTML, CSS, JAVASCRIPT having in mind a mobile-first implementation."
      },
      {
        title: "Approach",
        description:
          "Ask the client what´re their necessities related for the web page\n From the project of web development from Platzi, I quickly built the prototype for the web page in CEUA S.A.S.\n I used my knowledge in GIT and GITHUB to deploy the web page."
      },
      {
        title: "Time",
        description: "16 hours"
      },
      {
        title: "My Role",
        description: "Main frontEnd Developer"
      }
    ]),
    (project = [
      {
        title: "Purpose",
        description: "Build my first web page"
      },
      {
        title: "Objective",
        description:
          "Applied my knowledge in HTML, CSS, JAVASCRIPT for a web page designed desktop-first, and then make the web page responsive."
      },
      {
        title: "Approach",
        description:
          "Follow the instructions from the course of web development at Platzi, overcome the challenges, and deploy the project."
      },
      {
        title: "Time",
        description: "14 hours"
      },
      {
        title: "My Role",
        description: "Student"
      }
    ])
  ]
};

//unused

let projects = document.getElementsByClassName("project");

function listenerForProject(projects) {
  for (let index = 0; index < projects.length; index++) {
    let project = projects[index];

    project.addEventListener("mouseenter", () => {
      parentProject = {
        element: project,
        index: index
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
    if (sibling.innerText !== main.innerText) {
      sibling.className = className;
    }
  }
}

function givingData(project, picker) {
  let aboutProjectDescription =
    project.element.children[1].children[1].firstElementChild;
  let arrayProject = data.projects[parentProject.index];

  arrayProject.map((el, i) => {
    if (picker.innerText === el.title) {
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
      duration: 25
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
    duration: 25
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
 */
/*  */

function setActiveLinkHover(elem) {
  console.log(elem.id);
  const sectionID = elem.id;
  const scrollElements = document.querySelectorAll(".scroll");

  scrollElements.forEach((el) => {
    let elRef = el.href.split("#")[1];

    if (el.classList.contains("active") && elRef === sectionID) {
      return console.log("same id and element y no es necesario hacer cambios");
    } else if (elRef === sectionID) {
      scrollElements.forEach((el) => el.classList.remove("active"));
      el.classList.add("active");
      return;
    }
  });
}

function ScrollingNav() {
  //Main method for scroll
  const easeInCubic = function (t) {
    return t * t * t;
  };

  const scrollToElem = (
    startTime,
    currentTime,
    duration,
    scrollEndElemTop,
    startScrollOffset
  ) => {
    const runtime = currentTime - startTime;
    let progress = runtime / duration;

    progress = Math.min(progress, 1);

    const ease = easeInCubic(progress);

    window.scroll(0, startScrollOffset + scrollEndElemTop * ease);
    if (runtime < duration) {
      requestAnimationFrame((timestamp) => {
        const currentTime = timestamp || new Date().getTime();
        scrollToElem(
          startTime,
          currentTime,
          duration,
          scrollEndElemTop,
          startScrollOffset
        );
      });
    }
  };

  const animatingNode = (elem) => {
    //1 getting the element id to scroll
    const scrollElemId = elem.target.href.split("#")[1];
    //2 Finding the node from the document
    const scrollEndElem = document.getElementById(scrollElemId);
    //3 animating the node
    const anim = requestAnimationFrame((timestamp) => {
      const stamp = timestamp || new Date().getTime();
      const duration = 600;
      const start = stamp;

      const startScrollOffset = window.pageYOffset;

      const scrollEndElemTop = scrollEndElem.getBoundingClientRect().top;

      scrollToElem(start, stamp, duration, scrollEndElemTop, startScrollOffset);
    });
  };

  const setActiveLink = (elem, elements) => {
    let links = document.querySelectorAll(".active");

    if (links.length > 0) {
      links.forEach((el) => {
        el.classList.remove("active");
      });
    }

    elem.target.classList.add("active");
  };

  //select all element with class 'Scroll'
  const scrollElements = document.querySelectorAll(".scroll");

  //Adding event to each element
  scrollElements.forEach((elem) => {
    elem.addEventListener("click", (elem) => {
      elem.preventDefault();
      animatingNode(elem);
      setActiveLink(elem, scrollElements);
    });
  });
}

function downloadCV() {
  const button = document.getElementsByClassName("cv-download")[0];
  console.log(button);

  button.addEventListener("click", (el) => {
    el.preventDefault();
    console.log("Donwloading cv...");
  });
}

function setListeners() {
  downloadCV();
}

document.addEventListener("DOMContentLoaded", () => {
  ScrollingNav();
  setListeners();
});
