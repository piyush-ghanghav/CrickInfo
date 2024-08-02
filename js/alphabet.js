function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    console.log('URL Parameters:', urlParams.toString()); // Debug log
    return urlParams.get(name);
}

function buildTableHeader() {
    const tableHead = document.querySelector('thead');
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

// Call the function to build the table header
buildTableHeader();


function buildTable(data, letter) {

    
    const tableBody = document.getElementById('data_output_body');
    tableBody.innerHTML = ''; // Clear previous data

    data.forEach(player => {
        if (player.Name[0].toUpperCase() === letter) {
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
        }
    });
}

// Fetch data and build the table based on query parameter
fetch('../data/data.json')
    .then(response => response.json())
    .then(data => {
        if (Array.isArray(data.myData)) {
            const letter = getQueryParameter('letter');
            console.log('Letter parameter:', letter); // Debug log
            if (letter) {
                document.getElementById('page-title').innerText = `Players Starting with ${letter}`;
                buildTable(data.myData, letter.toUpperCase());
            } else {
                console.error('No letter specified in query parameters.');
            }
        } else {
            console.error('Data is not an array:', data);
        }
    })
    .catch(error => console.error('Error fetching the data:', error));
