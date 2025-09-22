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
    "screenshotAlt": "Atomic-t480s Screenshot",
    "devType": null,
    "description": "Optimized Fedora Silverblue image tailored for ThinkPad T480s hardware." 
  },
  {
    "name": "Blue9",
    "creator": "ledif",
    "base": "Vauxite",
    "template": "BlueBuild",
    "feedback": "🤷‍♂️",
    "link": "https://github.com/winblues/blue9",
    "screenshot": "screenshots/blue9.png",
    "screenshotAlt": "Blue9 Screenshot",
    "devType": "bb-dev",
    "description": "A modern and lightweight Linux desktop experience with the look of classic Macs." 
  },
  {
    "name": "Blue95",
    "creator": "ledif",
    "base": "Vauxite",
    "template": "BlueBuild",
    "feedback": "🤷‍♂️",
    "link": "https://github.com/winblues/blue95",
    "screenshot": "screenshots/blue95.png",
    "screenshotAlt": "Blue95 Screenshot",
    "devType": null,
    "description": "A modern and lightweight desktop experience that is reminiscent of a bygone era of computing."
  },
  {
    "name": "BlueXP",
    "creator": "ledif",
    "base": "Vauxite",
    "template": "BlueBuild",
    "feedback": "🤷‍♂️",
    "link": "https://github.com/winblues/bluexp",
    "screenshot": "screenshots/bluexp.png",
    "screenshotAlt": "BlueXP Screenshot",
    "devType": "ublue-dev"
  },
  {
    "name": "BourbonOS",
    "creator": "certifiedfoolio",
    "base": "CentOS Stream + Fedora 42",
    "template": "BlueBuild",
    "feedback": "✅",
    "link": "https://github.com/bourbonOS/bourbonOS-devel",
    "screenshot": "screenshots/bourbonos.png",
    "screenshotAlt": "BourbonOS Screenshot",
    "devType": null,
    "description": "A custom image focused on containerization, in a way similar to that of vanillaOS."
  },
  {
    "name": "Galtzo-OS",
    "creator": "pboling",
    "base": "Aurora DX (HWE)",
    "template": "BlueBuild",
    "feedback": "🤷‍♂️",
    "link": "https://github.com/fiftydinar/galtzo-os",
    "screenshot": "screenshots/galtzo-os.png",
    "screenshotAlt": "Galtzo-os Screenshot",
    "devType": null,
    "description": "Aurora DX (HWE) with NordVPN, 1Password, and other tweaks."
  },
  {
    "name": "Gidro-OS",
    "creator": "fiftydinar",
    "base": "Fedora Silverblue",
    "template": "BlueBuild",
    "feedback": "🤷‍♂️",
    "link": "https://github.com/fiftydinar/gidro-os",
    "screenshot": "screenshots/gidro-os.png",
    "screenshotAlt": "Gidro-os Screenshot",
      "devType": "bb-dev",
      "description": "My customized image, based on Fedora Silverblue."
  },
  {
    "name": "KompassOS",
    "creator": "L0g0ff",
    "base": "Aurora",
    "template": "BlueBuild",
    "feedback": "✅",
    "link": "https://github.com/L0g0ff/KompassOS",
    "screenshot": "screenshots/kompassos.png",
    "screenshotAlt": "KompassOS Screenshot",
    "devType": null,
    "description": "A developer-friendly operating system based on Fedora Silverblue Aurora"
  },
  {
    "name": "LinuXYZ",
    "creator": "xynydev",
    "base": "Fedora Silverblue Nvidia",
    "template": "BlueBuild",
    "feedback": "🤷‍♂️",
    "link": "https://github.com/xynydev/linuXYZ",
    "screenshot": "screenshots/linuxyz.png",
    "screenshotAlt": "LinuXYZ Screenshot",
    "devType": "bb-dev",
    "description": "My personal custom image of Fedora Silverblue + Universal Blue"
  },
  {
    "name": "Secureblue",
    "creator": "RoyalOughtness",
    "base": "Fedora Silverblue",
    "template": "BlueBuild",
    "feedback": "🤷‍♂️",
    "link": "https://github.com/secureblue/secureblue",
    "screenshot": "screenshots/secureblue.png",
    "screenshotAlt": "secureblue Screenshot",
    "devType": null,
    "description": "A security-focused desktop and server Linux operating system."
  },
  {
    "name": "Stellarite",
    "creator": "BillyAddlers",
    "base": "Fedora Silverblue",
    "template": "uBlue",
    "feedback": "🤷‍♂️",
    "link": "https://github.com/BillyAddlers/stellarite",
    "screenshot": "screenshots/stellarite.png",
    "screenshotAlt": "stellarite Screenshot",
    "devType": null,
    "description": "An opinionated Linux gaming distribution, powered by Fedora and Universal Blue."
  },
  {
    "name": "Sticky-OS",
    "creator": "MrStickyPiston",
    "base": "Fedora Kinoite",
    "template": "BlueBuild",
    "feedback": "🤷‍♂️",
    "link": "https://github.com/MrStickyPiston/Sticky-OS",
    "screenshot": "screenshots/sticky-os.png",
    "screenshotAlt": "Sticky-OS screenshot",
    "devType": null,
    "description": "An atomic Linux distro based on Fedora Kinoite optimized for productivity and ease of use."
  },
  {
    "name": "Vauxite",
    "creator": "ledif",
    "base": "xfce-Atomic",
    "template": "BlueBuild",
    "feedback": "🤷‍♂️",
    "link": "https://github.com/winblues/vauxite",
    "screenshot": "screenshots/vauxite.png",
    "screenshotAlt": "Vauxite Screenshot",
    "devType": "ublue-dev",
    "description": "A modern and lightweight desktop experience based on Fedora Xfce Atomic. Batteries included."
  },
  {
    "name": "VexHTPC",
    "creator": "Victorytek",
    "base": "Fedora Silverblue",
    "template": "BlueBuild",
    "feedback": "🤷‍♂️",
    "link": "https://github.com/VictoryTek/vex-htpc",
    "screenshot": "screenshots/vex-htpc.png",
    "screenshotAlt": "VexHTPC Screenshot",
  },
  {
    "name": "VexOS",
    "creator": "Victorytek",
    "base": "bazzite",
    "template": "BlueBuild",
    "feedback": "🤷‍♂️",
    "link": "https://github.com/VictoryTek/vex-os",
    "screenshot": "screenshots/vex.png",
    "screenshotAlt": "VexOS Screenshot",
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
    "screenshotAlt": "Winblues7 Screenshot"
  },
  {
    "name": "Wunker OS",
    "creator": "gmpinder",
    "base": "bazzite-nvidia-open",
    "template": "BlueBuild",
    "feedback": "🤷‍♂️",
    "link": "https://gitlab.com/wunker-bunker/wunker-os",
    "screenshot": "screenshots/no-screenshot.png",
    "screenshotAlt": "Wunker OS Screenshot"
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
        <p class="project-creator">
          by ${project.creator}
          ${project.devType === 'bb-dev' ? '<img src="icons/bb-dev-icon.png" alt="BlueBuild Developer" class="dev-icon bb-dev" title="BlueBuild Developer">' : ''}
          ${project.devType === 'ublue-dev' ? '<img src="icons/ublue-dev-icon.png" alt="uBlue Developer" class="dev-icon ublue-dev" title="uBlue Developer">' : ''}
        </p>
        ${project.description ? `<div class="project-description-block"><div class="project-section-header">DESCRIPTION</div><p class="project-description">${project.description}</p></div>` : ''}
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

