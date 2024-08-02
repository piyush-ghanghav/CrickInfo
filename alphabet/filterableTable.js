// Function to build the table
function buildTable(data, filterLetter) {
  const table = document.getElementById('data_output');
  table.innerHTML = ''; // Clear previous data

  data.forEach(player => {
      if (player.Name[0] === filterLetter) {
          const row = `
              <tr>
                  <td>${player.Player_id}</td>
                  <td class="Name">${player.Name}</td>
                  <td>${player.age}</td>
                  <td>${player.matches}</td>
                  <td>${player.bat_innings}</td>
                  <td>${player.runs}</td>
                  <td>${player.HS}</td>
                  <td>${player.avg}</td>
                  <td>${player.strike_rate}</td>
                  <td>${player.six}</td>
                  <td>${player.four}</td>
                  <td>${player.hundreds}</td>
                  <td>${player.fifty}</td>
                  <td>${player.bat_style}</td>
                  <td>${player.bowl_innings}</td>
                  <td>${player.wickets}</td>
                  <td>${player.Ball_bowled}</td>
                  <td>${player.runs_given}</td>
                  <td>${player.econ}</td>
                  <td>${player.hattricks}</td>
                  <td>${player.bowl_strate}</td>
                  <td>${player.bowl_avg}</td>
              </tr>
          `;
          table.innerHTML += row;
      }
  });
}

// Fetch data and initialize filtering
fetch('../data.json')
  .then(response => response.json())
  .then(data => {
      if (Array.isArray(data.myData)) {
          // Initialize with a default letter if needed
          buildTable(data.myData, 'A');
      } else {
          console.error('Data is not an array:', data);
      }
  })
  .catch(error => console.error('Error fetching the data:', error));

// Function to handle button click and filter data
function filterByLetter(letter) {
  fetch('../data.json')
      .then(response => response.json())
      .then(data => {
          if (Array.isArray(data.myData)) {
              buildTable(data.myData, letter);
          } else {
              console.error('Data is not an array:', data);
          }
      })
      .catch(error => console.error('Error fetching the data:', error));
}
