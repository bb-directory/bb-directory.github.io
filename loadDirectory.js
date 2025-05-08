// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Fetch the directory data from the JSON file
    fetch('directory.json')
      .then(response => response.json())
      .then(data => {
        // Get the table body element
        const tableBody = document.querySelector('table tbody');
        
        // Loop through the data and add a new row for each entry
        data.forEach(project => {
          const row = document.createElement('tr');
          
          // Add each piece of data to the row
          row.innerHTML = `
            <td>
              <a href="${project.screenshot}" target="_blank">
                <img src="${project.screenshot}" alt="${project.screenshotAlt}" />
              </a>
            </td>
            <td>${project.name}</td>
            <td>${project.creator}</td>
            <td>${project.base}</td>
            <td>${project.feedback}</td>
            <td><a href="${project.link}" target="_blank">Visit</a></td>
          `;
          
          // Append the row to the table body
          tableBody.appendChild(row);
        });
      })
      .catch(error => console.error('Error loading JSON:', error));
  });
  