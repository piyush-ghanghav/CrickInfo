function buildTableHeader() {
    const tableHead = document.getElementById('data_output_head');
    tableHead.innerHTML = `
        <tr>
            <th>Player ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Matches</th>
            <th>Batting Innings</th>
            <th>Runs</th>
            <th>HS</th>
            <th>Average</th>
            <th>Strike Rate</th>
            <th>Sixes</th>
            <th>Fours</th>
            <th>Hundreds</th>
            <th>Fifties</th>
            <th>Bat Style</th>
            <th>Bowling Innings</th>
            <th>Wickets</th>
            <th>Balls Bowled</th>
            <th>Runs Given</th>
            <th>Economy Rate</th>
            <th>Hat-tricks</th>
            <th>Bowling Strategy</th>
            <th>Bowling Average</th>
        </tr>
    `;
}

function buildTable(data) {
    const tableBody = document.getElementById('data_output_body');
    tableBody.innerHTML = ''; // Clear previous data

    data.forEach(player => {
        const row = `
            <tr>
                <td>${player.Player_id}</td>
                <td>${player.Name}</td>
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
        tableBody.innerHTML += row;
    });
}

function loadFilteredPlayers() {
    const input = document.getElementById("input1").value.trim().toLowerCase();
    fetch('../data/data.json')
        .then(response => response.json())
        .then(data => {
            const filteredData = data.myData.filter(player => player.type.toLowerCase() === input);
            const count = filteredData.length;
            const output = document.getElementById("output");
            output.innerText = count > 0 ? `Total number of players of type '${input}' is ${count}` : `No players found for type '${input}'`;
            
            if (count > 0) {
                buildTableHeader();
                buildTable(filteredData);
            }
        })
        .catch(error => console.error('Error fetching the data:', error));
}

function loadAllPlayers() {
    fetch('../data/data.json')
        .then(response => response.json())
        .then(data => {
            const count = data.myData.length;
            const output = document.getElementById("output");
            output.innerText = `Total number of players is ${count}`;
            
            if (count > 0) {
                buildTableHeader();
                buildTable(data.myData);
            }
        })
        .catch(error => console.error('Error fetching the data:', error));
}
