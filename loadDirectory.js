document.addEventListener('DOMContentLoaded', () => {
    fetch('directory.json')
      .then(response => response.json())
      .then(data => {
        const tbody = document.querySelector('.projects table tbody');
        tbody.innerHTML = ''; // Clear existing rows
  
        data.forEach(project => {
          const tr = document.createElement('tr');
  
          tr.innerHTML = `
            <td>
              <a href="${project.screenshot}" target="_blank">
                <img src="${project.screenshot}" alt="${project.screenshotAlt}" />
              </a>
            </td>
            <td>${project.name}</td>
            <td>${project.creator}</td>
            <td>${project.base}</td>
            <td>${project.template}</td>
            <td>${project.DE || ''}</td>
            <td>${project.feedback}</td>
            <td><a href="${project.link}" target="_blank">Visit</a></td>
          `;
  
          tbody.appendChild(tr);
        });
      })
      .catch(error => {
        console.error('Error loading project data:', error);
      });
  });
