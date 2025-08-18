let projectsData = [];

// Fallback data in case JSON file can't be loaded locally due to CORS
const fallbackData = [
  {
    "name": "Atomic-t480s",
    "creator": "askpng",
    "base": "Fedora Silverblue",
    "template": "BlueBuild",
    "feedback": "🤷‍♂️",
    "link": "https://github.com/askpng/atomic-t480s",
    "screenshot": "screenshots/atomic-t480s.png",
    "screenshotAlt": "Atomic-t480s Screenshot"
  },
  {
    "name": "Blue9",
    "creator": "ledif",
    "base": "Vauxite",
    "template": "BlueBuild",
    "feedback": "🤷‍♂️",
    "link": "https://github.com/winblues/blue9",
    "screenshot": "screenshots/blue9.png",
    "screenshotAlt": "Blue9 Screenshot"
  },
  {
    "name": "Blue95",
    "creator": "ledif",
    "base": "Vauxite",
    "template": "BlueBuild",
    "feedback": "🤷‍♂️",
    "link": "https://github.com/winblues/blue95",
    "screenshot": "screenshots/blue95.png",
    "screenshotAlt": "Blue95 Screenshot"
  },
  {
    "name": "BlueXP",
    "creator": "ledif",
    "base": "Vauxite",
    "template": "BlueBuild",
    "feedback": "🤷‍♂️",
    "link": "https://github.com/winblues/bluexp",
    "screenshot": "screenshots/bluexp.png",
    "screenshotAlt": "BlueXP Screenshot"
  },
  {
    "name": "BourbonOS",
    "creator": "certifiedfoolio",
    "base": "CentOS Stream + Fedora 42",
    "template": "BlueBuild",
    "feedback": "✅",
    "link": "https://github.com/bourbonOS/bourbonOS-devel",
    "screenshot": "screenshots/bourbonos.png",
    "screenshotAlt": "BourbonOS Screenshot"
  },
  {
    "name": "Gidro-OS",
    "creator": "fiftydinar",
    "base": "Fedora Silverblue",
    "template": "BlueBuild",
    "feedback": "🤷‍♂️",
    "link": "https://github.com/fiftydinar/gidro-os",
    "screenshot": "screenshots/gidro-os.png",
    "screenshotAlt": "Gidro-os Screenshot"
  },
  {
    "name": "KompassOS",
    "creator": "L0g0ff",
    "base": "Aurora",
    "template": "BlueBuild",
    "feedback": "✅",
    "link": "https://github.com/L0g0ff/KompassOS",
    "screenshot": "screenshots/kompassos.png",
    "screenshotAlt": "KompassOS Screenshot"
  },
  {
    "name": "LinuXYZ",
    "creator": "xynydev",
    "base": "Fedora Silverblue Nvidia",
    "template": "BlueBuild",
    "feedback": "🤷‍♂️",
    "link": "https://github.com/xynydev/linuXYZ",
    "screenshot": "screenshots/linuxyz.png",
    "screenshotAlt": "LinuXYZ Screenshot"
  },
  {
    "name": "Secureblue",
    "creator": "RoyalOughtness",
    "base": "Fedora Silverblue",
    "template": "BlueBuild",
    "feedback": "🤷‍♂️",
    "link": "https://github.com/secureblue/secureblue",
    "screenshot": "screenshots/secureblue.png",
    "screenshotAlt": "secureblue Screenshot"
  },
  {
    "name": "Stellarite",
    "creator": "BillyAddlers",
    "base": "Fedora Silverblue",
    "template": "uBlue",
    "feedback": "🤷‍♂️",
    "link": "https://github.com/BillyAddlers/stellarite",
    "screenshot": "screenshots/stellarite.png",
    "screenshotAlt": "stellarite Screenshot"
  },
  {
    "name": "Sticky-OS",
    "creator": "MrStickyPiston",
    "base": "Fedora Kinoite",
    "template": "BlueBuild",
    "feedback": "🤷‍♂️",
    "link": "https://github.com/MrStickyPiston/Sticky-OS",
    "screenshot": "screenshots/sticky-os.png",
    "screenshotAlt": "Sticky-OS screenshot"
  },
  {
    "name": "Vauxite",
    "creator": "ledif",
    "base": "xfce-Atomic",
    "template": "BlueBuild",
    "feedback": "🤷‍♂️",
    "link": "https://github.com/winblues/vauxite",
    "screenshot": "screenshots/vauxite.png",
    "screenshotAlt": "Vauxite Screenshot"
  },
  {
    "name": "Wayblue",
    "creator": "wayblueorg",
    "base": "Fedora Silverblue",
    "template": "BlueBuild",
    "feedback": "🤷‍♂️",
    "link": "https://github.com/wayblueorg/wayblue",
    "screenshot": "screenshots/wayblue.png",
    "screenshotAlt": "Wayblue Screenshot"
  },
  {
    "name": "Winblues7",
    "creator": "ledif",
    "base": "bazzite-dx",
    "template": "BlueBuild",
    "feedback": "🤷‍♂️",
    "link": "https://github.com/winblues/winblues7",
    "screenshot": "screenshots/winblues7.png",
    "screenshotAlt": "inblues7 Screenshot"
  }
];

document.addEventListener('DOMContentLoaded', () => {
    fetch('directory.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        projectsData = data;
        renderProjects(projectsData);
        setupSearchAndFilter();
      })
      .catch(error => {
        console.warn('Could not load directory.json, using fallback data:', error);
        // Use fallback data for local development
        projectsData = fallbackData;
        renderProjects(projectsData);
        setupSearchAndFilter();
      });
});

function renderProjects(projects) {
  const projectsGrid = document.getElementById('projects-grid');
  projectsGrid.innerHTML = ''; // Clear existing content

  if (projects.length === 0) {
    projectsGrid.innerHTML = '<p style="text-align: center; color: #ffffff; grid-column: 1 / -1;">No projects match your search criteria.</p>';
    return;
  }

  projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-template', project.template);
    card.setAttribute('data-feedback', project.feedback);
    
    // Determine feedback status class
    let feedbackClass = 'feedback-unknown';
    if (project.feedback === '✅') feedbackClass = 'feedback-yes';
    else if (project.feedback === '❌') feedbackClass = 'feedback-no';

    card.innerHTML = `
      <div class="project-screenshot">
        <a href="${project.screenshot}" target="_blank">
          <img src="${project.screenshot}" alt="${project.screenshotAlt}" loading="lazy" />
        </a>
      </div>
      
      <div class="project-info">
        <h3 class="project-name">${project.name}</h3>
        <p class="project-creator">by ${project.creator}</p>
        
        <div class="project-details">
          <div class="project-detail">
            <span class="project-detail-label">Base</span>
            <span class="project-detail-value">${project.base}</span>
          </div>
          <div class="project-detail">
            <span class="project-detail-label">Template</span>
            <span class="project-detail-value">${project.template}</span>
          </div>
        </div>
        
        <div class="feedback-container">
          <span class="project-detail-label">Seeking Feedback</span>
          <span class="feedback-status ${feedbackClass}">${project.feedback}</span>
        </div>
        
        <a href="${project.link}" target="_blank" class="project-link">
          View Project →
        </a>
      </div>
    `;

    projectsGrid.appendChild(card);
  });
}

function setupSearchAndFilter() {
  const searchInput = document.getElementById('search-input');
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  let currentFilter = 'all';
  
  // Search functionality
  searchInput.addEventListener('input', () => {
    filterAndSearch();
  });
  
  // Filter functionality
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      currentFilter = button.getAttribute('data-filter');
      filterAndSearch();
    });
  });
  
  function filterAndSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    
    let filteredProjects = projectsData.filter(project => {
      // Apply search filter
      const matchesSearch = searchTerm === '' || 
        project.name.toLowerCase().includes(searchTerm) ||
        project.creator.toLowerCase().includes(searchTerm) ||
        project.base.toLowerCase().includes(searchTerm);
      
      // Apply category filter
      let matchesFilter = true;
      if (currentFilter === 'BlueBuild') {
        matchesFilter = project.template === 'BlueBuild';
      } else if (currentFilter === 'uBlue') {
        matchesFilter = project.template === 'uBlue';
      } else if (currentFilter === 'feedback-yes') {
        matchesFilter = project.feedback === '✅';
      }
      
      return matchesSearch && matchesFilter;
    });
    
    renderProjects(filteredProjects);
  }
}
  
