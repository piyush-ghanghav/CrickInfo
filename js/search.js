function buildTable(headers, rows) {
  const table = document.createElement('table');
  table.classList.add('data-table'); // Add class for styling


  const tableHead = document.createElement('thead');
  tableHead.innerHTML = ` <tr> ${headers.map(header => `<th>${header}</th>`).join('')} </tr>`;
  table.appendChild(tableHead);

  const tableBody = document.createElement('tbody');
  rows.forEach(row => {
    const tableRow = document.createElement('tr');
    row.forEach(cell => {
      const tableCell = document.createElement('td');
      tableCell.textContent = cell;
      tableRow.appendChild(tableCell);
    });
    tableBody.appendChild(tableRow);
  });
  table.appendChild(tableBody);

  return table.outerHTML;
}

function renderPlayerData(player, tableId) {
  const table = document.getElementById(tableId);
  const headers = [
    'Player ID', 'Name', 'Age', 'Type', 'Matches', 'Innings', 'Runs', 'HS',
    'Average', 'Strike Rate', 'Sixes', 'Fours', 'Hundreds', 'Fifties', 'Bat Style'
  ];
  const rows = [
    [
      player.Player_id, player.Name, player.age, player.type, player.matches,
      player.bat_innings, player.runs, player.HS, player.avg, player.strike_rate,
      player.six, player.four, player.hundreds, player.fifty, player.bat_style
    ]
  ];
  table.innerHTML = buildTable(headers, rows);
}

function renderBowlingData(player, tableId) {
  const table = document.getElementById(tableId);
  const headers = [
    'Innings', 'Wickets', 'Balls Bowled', 'Runs Given', 'Economy', 'Hat-tricks',
    'Bowling Strategy', 'Average', 'Style'
  ];
  const rows = [
    [
      player.bowl_innings, player.wickets, player.Ball_bowled, player.runs_given,
      player.econ, player.hattricks, player.bowl_strate, player.bowl_avg, player.bowl_style
    ]
  ];
  table.innerHTML = buildTable(headers, rows);
}

function searchArray() {
  const searchInput = document.getElementById('searchInput').value;
  fetch('../data/data.json')
    .then(response => response.json())
    .then(data => {
      const index = data.myData.findIndex(myData => myData.Name === searchInput);
      if (index !== -1) {
        alert('Player found at index ' + index);
        renderPlayerData(data.myData[index], 'data_output');
        renderBowlingData(data.myData[index], 'Bowldata_output');
      } else {
        alert('Player not found in JSON data');
      }
    })
    .catch(error => {
      alert('Error retrieving JSON data: ' + error.message);
    });
}
