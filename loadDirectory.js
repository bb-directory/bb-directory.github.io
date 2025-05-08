fetch('projects.json')
  .then(response => response.json())
  .then(data => {
    const tableBody = document.getElementById('project-table-body');

    data.forEach(project => {
      const row = document.createElement('tr');

      row.innerHTML = `
        <td><a href="${project.screenshot}" target="_blank"><img src="${project.screenshot}" alt="${project.name} Screenshot" /></a></td>
        <td>${project.name}</td>
        <td>${project.creator}</td>
        <td>${project.base}</td>
        <td>${project.feedback}</td>
        <td><a href="${project.link}" target="_blank">Visit</a></td>
      `;

      tableBody.appendChild(row);
    });
  })
  .catch(error => {
    console.error('Error loading project data:', error);
  });
