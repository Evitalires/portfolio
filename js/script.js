/* 
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

document.addEventListener("DOMContentLoaded", () => {
  ScrollingNav();
  setListeners();
});
 */
const dataProjects = [
  {
    name: "name",
    video: {
      src: "urlvideo",
      description: "description",
      links: {
        gitHub: "linkGit",
        site: "rulsite",
      },
    },
  },
  {
    name: "name.2",
    video: {
      src: "urlvideo",
      description: "description",
      links: {
        gitHub: "linkGit",
        site: "rulsite",
      },
    },
  },
  {
    name: "name.3",
    video: {
      src: "urlvideo",
      description: "description",
      links: {
        gitHub: "linkGit",
        site: "rulsite",
      },
    },
  },
];
let newDataProjects = dataProjects.slice();

function newProject(project, lastElement) {
  console.log(project);
  // Create the main article element
  let article = document.createElement("article");
  article.className = "project";

  // Create the video section
  let videoSection = document.createElement("section");
  videoSection.className = "video";

  let video = document.createElement("video");
  video.className = "shadow";
  video.setAttribute("muted", "");

  let videoSource = document.createElement("source");
  videoSource.src = "./assets/media/platziVideo.webm";
  videoSource.type = "video/webm";

  video.appendChild(videoSource);
  videoSection.appendChild(video);

  // Create the video description section
  let descriptionSection = document.createElement("section");
  descriptionSection.className = "videoDescription shadow";

  let description = document.createElement("p");
  description.textContent =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime veritatis commodi magnam laboriosam quo. Accusamus, assumenda. Officia velit quae illo, consectetur accusantium veritatis recusandae placeat debitis eveniet vero aperiam fugiat.";

  let linksContainer = document.createElement("div");
  linksContainer.className = "videoLinksContainer";

  let links = document.createElement("div");
  links.className = "videoLinks";

  let githubButton = document.createElement("button");
  githubButton.className = "btnGitHub shadow";
  let githubLink = document.createElement("a");
  githubLink.href = "#"; // Add GitHub link URL here
  githubLink.target = "_blank";
  githubButton.appendChild(githubLink);

  let siteButton = document.createElement("button");
  siteButton.className = "btnSite shadow";
  let siteLink = document.createElement("a");
  siteLink.href = "#"; // Add site link URL here
  siteLink.target = "_blank";
  siteLink.textContent = project.name;
  siteButton.appendChild(siteLink);

  links.appendChild(githubButton);
  links.appendChild(siteButton);
  linksContainer.appendChild(links);
  descriptionSection.appendChild(description);
  descriptionSection.appendChild(linksContainer);

  // Append sections to the main article
  article.appendChild(videoSection);
  article.appendChild(descriptionSection);

  newDataProjects.shift();

  if (newDataProjects[0] === undefined) {
    lastElement.textContent = "See less";
  }

  return article;
}

function newSibbling(e) {
  let projects = document.getElementById("projects");
  let allProjects = projects.getElementsByTagName("article");
  console.log(allProjects.length);
  console.log(newDataProjects[0] === undefined);

  var lastElement = projects.lastElementChild;

  if (allProjects.length === 2 && lastElement.textContent == "See less") {
    lastElement.textContent = " See More";
    newDataProjects = dataProjects.slice();
    return;
  } else if (newDataProjects[0] === undefined) {
    if (allProjects.length >= 1) {
      var penulProject = allProjects[allProjects.length - 1];
      penulProject.parentNode.removeChild(penulProject);
      console.log("Penultimo elemento eliminado.");
    }
    console.log("Remover elementos");
  } else if (lastElement) {
    projects.insertBefore(
      newProject(newDataProjects[0], lastElement),
      lastElement
    );
    return;
  }
}
document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("projectsMore")
    .addEventListener("click", newSibbling);
});
