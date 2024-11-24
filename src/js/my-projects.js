import powerPulse1x from '/images/my-project/power-pulse-1x.jpg';
import powerPulse2x from '/images/my-project/power-pulse-2x.jpg';
import vyshyvanka1x from '/images/my-project/vyshyvanka-1x.jpg';
import vyshyvanka2x from '/images/my-project/vyshyvanka-2x.jpg';
import energy1x from '/images/my-project/energy-flow-1x.jpg';
import energy2x from '/images/my-project/energy-flow-2x.jpg';
import mimino1x from '/images/my-project/mimino-1x.jpg';
import mimino2x from '/images/my-project/mimino-2x.jpg';
import chegoJewelry1x from '/images/my-project/chego-jewelry-1x.jpg';
import chegoJewelry2x from '/images/my-project/chego-jewelry-2x.jpg';
import fruitbox1x from '/images/my-project/fruitbox-1x.jpg';
import fruitbox2x from '/images/my-project/fruitbox-2x.jpg';
import starligh1x from '/images/my-project/starlight-1x.jpg';
import starligh2x from '/images/my-project/starlight-2x.jpg';

const projects = [
  {
    title: 'power pulse webservice',
    techStack: 'React, JavaScript, Node JS, Git',
    images: {
      regular: powerPulse1x,
      retina: powerPulse2x,
    },
    link: '#',
  },
  {
    title: 'vyshyvanka vibes Landing page',
    techStack: 'React, JavaScript, Node JS, Git',
    images: {
      regular: vyshyvanka1x,
      retina:  vyshyvanka2x,
    },
    link: '#',
  },
  {
    title: 'energy flow webservice',
    techStack: 'React, JavaScript, Node JS, Git',
    images: {
      regular: energy1x,
      retina: energy2x,
    },
    link: '#',
  },
  {
    title: 'mimino website',
    techStack: 'React, JavaScript, Node JS, Git',
    images: {
      regular: mimino1x,
      retina: mimino2x,
    },
    link: '#',
  },
  {
    title: 'chego jewelry website',
    techStack: 'React, JavaScript, Node JS, Git',
    images: {
      regular: chegoJewelry1x,
      retina: chegoJewelry2x,
    },
    link: '#',
  },
  {
    title: 'fruitbox online store',
    techStack: 'React, JavaScript, Node JS, Git',
    images: {
      regular: fruitbox1x,
      retina: fruitbox2x,
    },
    link: '#',
  },
  {
    title: 'starlight studio landing page',
    techStack: 'React, JavaScript, Node JS, Git',
    images: {
      regular: starligh1x,
      retina: starligh2x,
    },
    link: '#',
  },
];

const projectList = document.querySelector('.project__list');
const loadMoreButton = document.getElementById('load-more');
const hideProjectsButton = document.getElementById('hide-projects');

loadMoreButton.addEventListener('click', loadMoreProjects);

hideProjectsButton.addEventListener('click', hideProjects);

let visibleProjects = 0;

function createProjectMarkup(project) {
  return `
    <li class="project__item">
      <img 
        src="${project.images.regular}" 
        srcset="${project.images.regular} 1x, ${project.images.retina} 2x" 
        alt="${project.title}" 
        class="project__image"
        title="${project.title}" 
      />
      <div class="project__info">
        <p class="project__tech__stack p-l">${project.techStack}</p>
        <div class="project__info__item">
          <h3 class="project__subtitle">${project.title}</h3>
          <a href="${project.link}" class="visit__btn p-l" target="_blank">VISIT
              <svg class="project__svg" width="15" height="15">
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

  nextProjects.forEach(project => {
    const projectMarkup = createProjectMarkup(project);
    projectList.insertAdjacentHTML('beforeend', projectMarkup);
  });

  visibleProjects += nextProjects.length;

  if (visibleProjects >= projects.length) {
    loadMoreButton.style.display = 'none';
    hideProjectsButton.style.display = 'inline-block';
  }
}

function hideProjects() {
  const projectItems = document.querySelectorAll('.project__item');

  projectItems.forEach((item, index) => {
    if (index >= 3) item.remove();
  });

  visibleProjects = 0;

  loadMoreButton.style.display = 'inline-block';
  hideProjectsButton.style.display = 'none';

  const projectsTitle = document.querySelector('.load__more');
  projectsTitle.focus();
}
