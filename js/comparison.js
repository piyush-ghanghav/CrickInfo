
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
  