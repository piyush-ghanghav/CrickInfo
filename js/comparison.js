function searchData() {
  const searchInput1 = document.getElementById('searchInput1').value.trim();
  const searchInput2 = document.getElementById('searchInput2').value.trim();
  const comparisonResults = document.getElementById('comparisonResults');

  fetch('../data/data.json')
    .then(response => response.json())
    .then(data => {
      const player1 = data.myData.find(player => player.Name.toLowerCase() === searchInput1.toLowerCase());
      const player2 = data.myData.find(player => player.Name.toLowerCase() === searchInput2.toLowerCase());

      if (player1 && player2) {
        // Render comparison table
        generateComparisonTable(player1, player2);
      } else {
        alert('One or both players not found in JSON data');
      }
    })
    .catch(error => {
      alert('Error retrieving JSON data: ' + error.message);
    });
}

function generateComparisonTable(player1, player2) {
  const comparisonResults = document.getElementById('comparisonResults');
  
  let tableHTML = `
    <table border="1" cellpadding="5" cellspacing="0">
      <thead>
        <tr>
          <th>Stat Name</th>
          <th>${player1.Name}</th>
          <th>${player2.Name}</th>
        </tr>
      </thead>
      <tbody>
  `;

  // Updated stats array including new attributes
  const stats = [
    'age', 'matches', 'bat_innings', 'runs', 'HS', 'avg', 
    'strike_rate', 'six', 'four', 'hundreds', 'fifty', 
    'bat_style', 'bowl_innings', 'wickets', 'Ball_bowled', 
    'runs_given', 'econ', 'hattricks', 'bowl_strate', 
    'bowl_avg', 'bowl_style'
  ];

  stats.forEach(stat => {
    tableHTML += `
      <tr>
        <td>${capitalizeFirstLetter(stat)}</td>
        <td>${player1[stat] || 'N/A'}</td>
        <td>${player2[stat] || 'N/A'}</td>
      </tr>
    `;
  });

  tableHTML += `
      </tbody>
    </table>
  `;

  comparisonResults.innerHTML = tableHTML;

  // Highlight the comparison based on the better stat
  highlightComparison(player1, player2);
}

function highlightComparison(player1, player2) {
  const rows = document.querySelectorAll('#comparisonResults tbody tr');
  
  rows.forEach(row => {
    const statName = row.cells[0].textContent.toLowerCase();
    const player1Stat = parseFloat(row.cells[1].textContent);
    const player2Stat = parseFloat(row.cells[2].textContent);

    // Skip non-numeric stats for comparison highlighting
    if (!isNaN(player1Stat) && !isNaN(player2Stat)) {
      if (player1Stat > player2Stat) {
        row.cells[1].style.backgroundColor = 'lightgreen';
      } else if (player2Stat > player1Stat) {
        row.cells[2].style.backgroundColor = 'lightgreen';
      }
    }
  });
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

document.getElementById('compareButton').addEventListener('click', searchData);
