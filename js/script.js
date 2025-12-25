// --- Unified Script for Section Navigation & Interactions ---

/**
 * Premium Smooth Scroll with Easing
 */
function handleNavLinks() {
  const scrollLinks = document.querySelectorAll(".scroll");
  scrollLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);

      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}


/**
 * Contact Form Validation
 */
function validateContactForm() {
  const form = document.querySelector("#contact form");
  if (!form) return;

  const inputs = form.querySelectorAll("input, textarea");

  inputs.forEach(input => {
    input.addEventListener("input", () => {
      if (input.checkValidity()) {
        input.style.borderColor = "var(--color-blue)";
        input.classList.remove("invalid");
      } else {
        input.style.borderColor = "red";
        input.classList.add("invalid");
      }
    });

    input.addEventListener("blur", () => {
      if (!input.checkValidity()) {
        input.style.borderColor = "red";
      }
    });
  });

  form.addEventListener("submit", (e) => {
    let isValid = true;
    inputs.forEach(input => {
      if (!input.checkValidity()) {
        isValid = false;
        input.style.borderColor = "red";
      }
    });

    if (!isValid) {
      e.preventDefault();
      alert("Please fill out all fields correctly.");
    }
  });
}

// Update newDataProjects handling
let newDataProjects = typeof dataProjects !== 'undefined' ? dataProjects.slice() : [];

document.addEventListener("DOMContentLoaded", () => {
  handleNavLinks();
  validateContactForm();
  initNavColorObserver();

  // Set up "See More" listener
  const projectsMore = document.getElementById("projectsMore");
  if (projectsMore) {
    projectsMore.addEventListener("click", newSibbling);
  }
});

function svgPathBackground(videoLinksBackground) {
  let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "3802");
  svg.setAttribute("height", "100");
  svg.setAttribute("viewBox", "0 0 3802 100");
  svg.setAttribute("fill", "none");

  let paths = [
    "M0 28.8541C0 21.6839 5.15512 14.9512 13.9637 12.0775C151.765 -32.8783 327.806 79.789 535.351 81.1122C761.042 82.551 978.229 -63.8219 1079.51 33.3011C1082.81 36.4618 1084.47 40.4934 1084.47 44.4974V79.878C1084.47 90.7828 1072.62 99.6228 1057.99 99.6228H26.4763C11.8539 99.6228 0 90.7828 0 79.878V28.8541Z",
    "M901.254 29.2312C901.254 22.0611 906.409 15.3284 915.218 12.4547C1053.02 -32.5012 1229.06 80.1662 1436.61 81.4893C1662.3 82.9282 1879.48 -63.4448 1980.77 33.6783C1984.07 36.839 1985.72 40.8705 1985.72 44.8745V80.2551C1985.72 91.1599 1973.87 100 1959.25 100H927.73C913.108 100 901.254 91.1599 901.254 80.2551V29.2312Z",
    "M1816.28 28.8541C1816.28 21.6839 1821.43 14.9512 1830.24 12.0775C1968.04 -32.8783 2144.08 79.789 2351.63 81.1122C2577.32 82.551 2794.51 -63.8219 2895.79 33.3011C2899.09 36.4618 2900.75 40.4934 2900.75 44.4974V79.878C2900.75 90.7828 2888.89 99.6228 2874.27 99.6228H1842.75C1828.13 99.6228 1816.28 90.7828 1816.28 79.878V28.8541Z",
    "M2717.53 29.2312C2717.53 22.0611 2722.68 15.3284 2731.49 12.4547C2869.29 -32.5012 3045.34 80.1662 3252.88 81.4893C3478.57 82.9282 3695.76 -63.4448 3797.04 33.6783C3800.34 36.839 3802 40.8705 3802 44.8745V80.2551C3802 91.1599 3790.15 100 3775.52 100H2744.01C2729.38 100 2717.53 91.1599 2717.53 80.2551V29.2312Z",
  ];

  for (let i = 0; i < 4; i++) {
    // Create the path for the first SVG element
    let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", paths[i]);
    path.setAttribute("fill", "#AEB1CB");
    svg.appendChild(path);

    if (i == 3) {
      videoLinksBackground.appendChild(svg);
    }
  }
}

function newProject(project, lastElement) {
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

  videoSource.src = newDataProjects[0].video.src;
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

  //Create background
  let videoLinksBackground = document.createElement("div");
  videoLinksBackground.className = "videoLinksBackground";
  svgPathBackground(videoLinksBackground);
  svgPathBackground(videoLinksBackground);

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
  siteLink.textContent = "See Site";
  siteButton.appendChild(siteLink);

  links.appendChild(githubButton);
  links.appendChild(siteButton);
  linksContainer.appendChild(videoLinksBackground);
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
  console.log(newDataProjects[0], newDataProjects[0] === undefined);

  var lastElement = projects.lastElementChild;

  if (allProjects.length >= 1 && newDataProjects[0] === undefined) {
    console.log("Remover elementos");
    var penulProject = allProjects[allProjects.length - 1];
    penulProject.parentNode.removeChild(penulProject);
    console.log("Penultimo elemento eliminado.");

    if (allProjects.length === 2) {
      console.log("entre quedando tres");
      lastElement.textContent = " See More";
      newDataProjects = dataProjects.slice();
    }
  } else if (lastElement) {
    projects.insertBefore(
      newProject(newDataProjects[0], lastElement),
      lastElement
    );
    return;
  }
}
/**
 * Dynamic Navigation Color Observer
 */
function initNavColorObserver() {
  const nav = document.querySelector("nav");
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".linkPage");

  const sectionStyles = {
    hero: { bg: "var(--color-light)", color: "var(--color-black)", filter: "none" },
    projects: { bg: "var(--color-light-blue)", color: "var(--color-black)", filter: "none" },
    skills: { bg: "var(--color-black)", color: "var(--color-light)", filter: "brightness(0) invert(1)" },
    references: { bg: "var(--color-blue)", color: "var(--color-white)", filter: "brightness(0) invert(1)" },
    contact: { bg: "var(--color-black)", color: "var(--color-light)", filter: "brightness(0) invert(1)" }
  };

  const observerOptions = {
    root: null,
    rootMargin: "-20% 0px -75% 0px", // Adjusted margins for better active state detection
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        const styles = sectionStyles[id];

        // Update nav styles
        if (styles) {
          nav.style.setProperty("--nav-bg", styles.bg);
          nav.style.setProperty("--nav-color", styles.color);
          nav.style.setProperty("--nav-filter", styles.filter);
        }

        // Update active class on links
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}
