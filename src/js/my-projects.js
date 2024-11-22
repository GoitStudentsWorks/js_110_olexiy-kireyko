const projects = [
  {
    title: "power pulse webservice",
    techStack: "React, JavaScript, Node JS, Git",
    images: {
      regular: "../images/my-project/power-pulse-1x.jpg",
      retina: "../images/my-project/power-pulse-2x.jpg"
    },
    link: "#"
  },
  {
    title: "vyshyvanka vibes Landing Page",
    techStack: "React, JavaScript, Node JS, Git",
    images: {
      regular: "../images/my-project/vyshyvanka-1x.jpg",
      retina: "../images/my-project/vyshyvanka-2x.jpg"
    },
    link: "#"
  },
  {
    title: "energy flow webservice",
    techStack: "React, JavaScript, Node JS, Git",
    images: {
      regular: "../images/my-project/energy-flow-1x.jpg",
      retina: "../images/my-project/energy-flow-2x.jpg"
    },
    link: "#"
  },
  {
    title: "mimino website",
    techStack: "React, JavaScript, Node JS, Git",
    images: {
      regular: "../images/my-project/mimino-1x.jpg",
      retina: "../images/my-project/mimino-2x.jpg"
    },
    link: "#"
  },
  {
    title: "chego jewelry website",
    techStack: "React, JavaScript, Node JS, Git",
    images: {
      regular: "../images/my-project/chego-jewelry-1x.jpg",
      retina: "../images/my-project/chego-jewelry-2x.jpg"
    },
    link: "#"
  },
  {
    title: "fruitbox online store",
    techStack: "React, JavaScript, Node JS, Git",
    images: {
      regular: "../images/my-project/fruitbox-1x.jpg",
      retina: "../images/my-project/fruitbox-2x.jpg"
    },
    link: "#"
  },
  {
    title: "starlight studio landing page",
    techStack: "React, JavaScript, Node JS, Git",
    images: {
      regular: "../images/my-project/starlight-1x.jpg",
      retina: "../images/my-project/starlight-2x.jpg"
    },
    link: "#"
  },
  
];

const projectList = document.querySelector(".project-list");
const loadMoreButton = document.getElementById("load-more");
const hideProjectsButton = document.getElementById("hide-projects");

loadMoreButton.addEventListener("click", event => {
    event.preventDefault();
    loadMoreProjects();
});

hideProjectsButton.addEventListener("click", event => {
    event.preventDefault();
    hideProjects();
});

let visibleProjects = 0;

function createProjectMarkup(project) {
  return `
    <li class="project-item">
      <img 
        src="${project.images.regular}" 
        srcset="${project.images.regular} 1x, ${project.images.retina} 2x" 
        alt="${project.title}" 
        class="project-image" 
      />
      <div class="project-info">
        <p class="project-tech-stack">${project.techStack}</p>
        <div class="project-info-item">
          <h3 class="project-subtitle">${project.title}</h3>
          <a href="${project.link}" class="visit-btn" target="_blank">VISIT
              <svg class="project-svg" width="15" height="15">
                  <use href="/images/icons.svg#icon-arr-right"></use>
              </svg>
          </a>
        </div>
      </div>
    </li>
  `;
}

function loadMoreProjects() {
  const nextProjects = projects.slice(visibleProjects, visibleProjects + 3);

  nextProjects.forEach((project) => {
    const projectMarkup = createProjectMarkup(project);
    projectList.insertAdjacentHTML("beforeend", projectMarkup);
  });

  visibleProjects += nextProjects.length;

  if (visibleProjects >= projects.length) {
    loadMoreButton.style.display = "none";
    hideProjectsButton.style.display = "inline-block";
  }
}

function hideProjects() {
  const projectItems = document.querySelectorAll(".project-item");

  projectItems.forEach((item, index) => {
    if (index >= 3) item.remove();
  });

  visibleProjects = 0;

  loadMoreButton.style.display = "inline-block";
  hideProjectsButton.style.display = "none";
    
  const projectsTitle = document.querySelector(".load-more");
  projectsTitle.focus();
}






