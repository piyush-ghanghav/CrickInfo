function buildTable(headers, rows) {
  let table = '<table>';
  table += '<thead><tr>';
  headers.forEach(header => table += `<th>${header}</th>`);
  table += '</tr></thead>';
  table += '<tbody>';
  rows.forEach(row => {
    table += '<tr>';
    row.forEach(cell => table += `<td>${cell}</td>`);
    table += '</tr>';
  });
  table += '</tbody></table>';
  return table;
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
    });``
}

function searchData() {
  const searchInput1 = document.getElementById('searchInput1').value;
  const searchInput2 = document.getElementById('searchInput2').value;
  fetch('../data/data.json')
    .then(response => response.json())
    .then(data => {
      const index1 = data.myData.findIndex(myData => myData.Name === searchInput1);
      const index2 = data.myData.findIndex(myData => myData.Name === searchInput2);

      if (index1 !== -1 && index2 !== -1) {
        alert('Players found');
        const player1 = data.myData[index1];
        const player2 = data.myData[index2];

        renderPlayerData(player1, 'Player1_result');
        renderBowlingData(player1, 'Player1_result_bowling');
        renderPlayerData(player2, 'Player2_result');
        renderBowlingData(player2, 'Player2_result_bowling');

        highlightComparison(player1, player2);
      } else {
        alert('One or both players not found in JSON data');
      }
    })
    .catch(error => {
      alert('Error retrieving JSON data: ' + error.message);
    });
}

function highlightComparison(player1, player2) {
  const avg1 = document.getElementById('Player1_avg');
  const avg2 = document.getElementById('Player2_avg');
  const strikeRate1 = document.getElementById('Player1_strike_rate');
  const strikeRate2 = document.getElementById('Player2_strike_rate');

  if (player1.avg > player2.avg) {
    avg1.style.backgroundColor = 'yellow';
  } else if (player1.avg < player2.avg) {
    avg2.style.backgroundColor = 'yellow';
  }

  if (player1.strike_rate > player2.strike_rate) {
    strikeRate1.style.backgroundColor = 'yellow';
  } else if (player1.strike_rate < player2.strike_rate) {
    strikeRate2.style.backgroundColor = 'yellow';
  }
}
