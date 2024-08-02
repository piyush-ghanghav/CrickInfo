


function searchArray() {
  const searchInput = document.getElementById('searchInput').value;
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const index = data.myData.findIndex(myData => myData.Name === searchInput);
      if (index !== -1) {
        alert('Player found at index ' + index);
        var table = document.getElementById('data_output')
        var row = `
    <table >
    <thead>
        <th colspan="2">Batting statistics</th>
    </thead>
</table>
               <table> <thead>
                <th>Player ID</th>
                <th class="name">Name</th>
                <th>Age</th>
                <th>Role</th>
                <th>Matches</th>
                <th>Bat innings</th>
                <th>Runs</th>
                <th>HS</th>
                <th>AVG</th>
                <th>Strike rate</th>
                <th>6's</th>
                <th>4's</th>
                <th>100's</th>
                <th>50's</th>
                <th>Batting Style</th> 
            </thead>
    <tbody><tr>
                <td>${data.myData[index].Player_id}</td>
            <td>${data.myData[index].Name}</td>
            <td>${data.myData[index].age}</td>
            <td>${data.myData[index].type}</td>
            <td>${data.myData[index].matches}</td>
            
            <td>${data.myData[index].bat_innings}</td>
            <td>${data.myData[index].runs}</td>
            <td>${data.myData[index].HS}</td>
            <td>${data.myData[index].avg}</td>
            
            <td>${data.myData[index].strike_rate}</td>
            <td>${data.myData[index].six}</td>
            <td>${data.myData[index].four}</td>
            <td>${data.myData[index].hundreds}</td>
            <td>${data.myData[index].fifty}</td>
            <td>${data.myData[index].bat_style}</td>
            
            
                      </tr></tbody></table>
                   
             
               
            
           `
        table.innerHTML = row
        var table4 = document.getElementById('Bowldata_output')
        var row4 = `
   <table class="node">
    <thead>
        <th>Bowling statistics</th>
    </thead>
</table>
    
    <table>
                <thead>
                    
                    <th>Innings</th>
              <th>wickets</td> </th>
              
              <th>Balls</td></th>
              <th>Runs</td> </th>
              
              <th>econ</td> </th>
              <th>hattrick</td> </th>
              <th>Strike rate</td> </th>
              <th>AVG</td> </th>
              <th>Bowl Style</td> </th>
              </thead>
                <tbody>
                    <tr>
                        <td>${data.myData[index].bowl_innings}</td>
                        <td>${data.myData[index].wickets}</td>
                        <td>${data.myData[index].Ball_bowled}</td>
                        <td>${data.myData[index].runs_given}</td>
                        <td>${data.myData[index].econ}</td>
                        <td>${data.myData[index].hattricks}</td>
                        <td>${data.myData[index].bowl_strate}</td>
                        <td>${data.myData[index].bowl_avg}</td>
                        <td>${data.myData[index].bowl_style}</td>
                    </tr>
                </tbody>
            </table>
             
                `

        table4.innerHTML = row4

      } else {
        alert('Player not found in JSON data');
      }

    })
    .catch(error => {
      alert('Error retrieving JSON data: ' + error.message);
    });
}
function searchData() {
  const searchInput1 = document.getElementById('searchInput1').value;
  const searchInput2 = document.getElementById('searchInput2').value;
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const index1 = data.myData.findIndex(myData => myData.Name === searchInput1);
      const index2 = data.myData.findIndex(myData => myData.Name === searchInput2);
      if (index1 !== -1) {
        alert('Player found at index ' + index1);
        let table = document.getElementById('Player1_result')
        let row = `
   
        <td>
        <img src="${data.myData[index1].pfp}" alt="Image not found" height="50px" width="50px" class="imagee"><br>
        <p><b>Name : </b>${data.myData[index1].Name}</p>
        <p><b>Age : </b>${data.myData[index1].age}   </p>
        <table class="resultTT" id="c1">
          
                
                <tbody>
                        <tr> <td>${data.myData[index1].matches}</td></tr>
                        <tr><td>${data.myData[index1].bat_innings}</td></tr>
                        <tr>  <td>${data.myData[index1].runs}</td></tr>
                        <tr> <td>${data.myData[index1].HS}</td></tr>
                        <tr> <td id="c1_1">${data.myData[index1].avg}</td></tr>
                        <tr><td id="c1_2">${data.myData[index1].strike_rate}</td></tr>
                        <tr> <td>${data.myData[index1].six}</td></tr>
                        <tr> <td>${data.myData[index1].four}</td></tr>
                        <tr> <td>${data.myData[index1].hundreds}</td></tr>
                        <tr> <td>${data.myData[index1].fifty}</td></tr>
                        <tr><td>${data.myData[index1].bat_style}</td></tr>
            

                </tbody>
        </table>
       
        <table class="resultTT">
            <tbody>
                <tr> <td>${data.myData[index1].bowl_innings}</td></tr>
                <tr><td id="c1_3">${data.myData[index1].wickets}</td></tr>
                <tr>  <td>${data.myData[index1].Ball_bowled}</td></tr>
                <tr> <td>${data.myData[index1].runs_given}</td></tr>
                
                <tr> <td id="c1_4">${data.myData[index1].econ}</td></tr>
                <tr> <td>${data.myData[index1].hattricks}</td></tr>
                <tr> <td>${data.myData[index1].bowl_strate}</td></tr>
                <tr> <td>${data.myData[index1].bowl_avg}</td></tr>
                <tr> <td>${data.myData[index1].bowl_style}</td></tr>
            </tbody>
        
        </td>`
        table.innerHTML = row
        var table1 = document.getElementById('Compare')
        var row1 = `<table>
        <tbody>                       
            <td class="hii">Bat Stats</td>         
              <tr>  <td class="resultTTT">Matches</td> </tr>
              <tr>  <td class="resultTTT">Innings</td> </tr>
              <tr>  <td class="resultTTT">Runs</td> </tr>
              <tr>  <td class="resultTTT">HS</td> </tr>
              <tr>  <td class="resultTTT">AVG</td> </tr>
              <tr>  <td class="resultTTT">Strike Rate</td> </tr>
              <tr>  <td class="resultTTT">6's</td> </tr>
              <tr>  <td class="resultTTT">4's</td> </tr>
              <tr>  <td class="resultTTT">100's</td> </tr>
              <tr>  <td class="resultTTT">50's</td> </tr>
              <tr>  <td class="resultTTT">Bat Style</td> </tr>
              
        </tbody>
    </table>
    `
        table1.innerHTML = row1
        var table3 = document.getElementById('Compare2')
        var row3 = `
                     <br>         
            <td class="hii">Bowl Stats</td>         
              <tr>  <td class="resultTTT">Innings</td> </tr>
              <tr>  <td class="resultTTT">wickets</td> </tr>
              
              <tr> <td class="resultTTT">Balls</td></tr>
              <tr>  <td class="resultTTT">Runs</td> </tr>
              
              <tr>  <td class="resultTTT">econ</td> </tr>
              <tr>  <td class="resultTTT">hattrick</td> </tr>
              <tr>  <td class="resultTTT">Strike rate</td> </tr>
              <tr>  <td class="resultTTT">AVG</td> </tr>
              <tr>  <td class="resultTTT">Bowl Style</td> </tr>
              
              
       
    `
        table3.innerHTML = row3
      } else {
        alert('Player not found in JSON data');
      }





      if (index2 !== -1) {
        alert('Player2 found at index ' + index2);
        let table2 = document.getElementById('Player2_result')
        let row2 = `
   
   <td>
   <img src="${data.myData[index2].pfp}" alt="Image not found" height="50px" width="50px" class="imagee"><br>
   <p><b>Name : </b>${data.myData[index2].Name}</p>
   <p><b>Age : </b>${data.myData[index2].age}</p>
   <table class="resultTT" id="c2">
     
           
           <tbody>
               
           
       
       
                    <tr> <td>${data.myData[index2].matches}</td></tr>
                    <tr><td>${data.myData[index2].bat_innings}</td></tr>
                    <tr>  <td>${data.myData[index2].runs}</td></tr>
                    <tr> <td>${data.myData[index2].HS}</td></tr>
                    <tr> <td id="c2_1">${data.myData[index2].avg}</td></tr>
                    <tr><td id="c2_2">${data.myData[index2].strike_rate}</td></tr>
                    <tr> <td>${data.myData[index2].six}</td></tr>
                    <tr> <td>${data.myData[index2].four}</td></tr>
                    <tr> <td>${data.myData[index2].hundreds}</td></tr>
                    <tr> <td>${data.myData[index2].fifty}</td></tr>
                    <tr><td>${data.myData[index2].bat_style}</td></tr>
       

           </tbody>
   </table>
   <table class="resultTT">
            <tbody>
                <tr> <td>${data.myData[index2].bowl_innings}</td></tr>
                <tr><td id="c2_3">${data.myData[index2].wickets}</td></tr>
                <tr>  <td>${data.myData[index2].Ball_bowled}</td></tr>
                <tr> <td>${data.myData[index2].runs_given}</td></tr>
                
                <tr> <td id="c2_4">${data.myData[index2].econ}</td></tr>
                <tr> <td>${data.myData[index2].hattricks}</td></tr>
                <tr> <td>${data.myData[index2].bowl_strate}</td></tr>
                <tr> <td>${data.myData[index2].bowl_avg}</td></tr>
                <tr> <td>${data.myData[index2].bowl_style}</td></tr>
            </tbody>
   
   </td>`
        table2.innerHTML = row2
      } else {
        alert('Player not found in JSON data');
      }



      if (data.myData[index1].type == 'batter' && data.myData[index2].type == 'batter') {
        var c1 = document.getElementById("c1_1")
        var c2 = document.getElementById("c2_1")
        if (data.myData[index1].avg > data.myData[index2].avg) {
          c1.style.backgroundColor = "yellow"
        }
        else if (data.myData[index1].avg < data.myData[index2].avg) {
          c2.style.backgroundColor = "yellow"
        }
        else {
          c1.style.backgroundColor = "yellow"
          c2.style.backgroundColor = "yellow"
        }
        var d1 = document.getElementById("c1_2")
        var d2 = document.getElementById("c2_2")
        if (data.myData[index1].strike_rate > data.myData[index2].strike_rate) {
          d1.style.backgroundColor = "yellow"
        }
        else if (data.myData[index1].strike_rate < data.myData[index2].strike_rate) {
          d2.style.backgroundColor = "yellow"
        }
        else {
          d1.style.backgroundColor = "yellow"
          d2.style.backgroundColor = "yellow"
        }
      }
      else if (data.myData[index1].type == 'bowler' && data.myData[index2].type == 'bowler') {
        var c1 = document.getElementById("c1_3")
        var c2 = document.getElementById("c2_3")
        if (data.myData[index1].wickets > data.myData[index2].wickets) {
          c1.style.backgroundColor = "yellow"
        }
        else if (data.myData[index1].wickets < data.myData[index2].wickets) {
          c2.style.backgroundColor = "yellow"
        }
        else {
          c1.style.backgroundColor = "yellow"
          c2.style.backgroundColor = "yellow"
        }
        var d1 = document.getElementById("c1_4")
        var d2 = document.getElementById("c2_4")
        if (data.myData[index1].econ < data.myData[index2].econ) {
          d1.style.backgroundColor = "yellow"
        }
        else if (data.myData[index1].econ > data.myData[index2].econ) {
          d2.style.backgroundColor = "yellow"
        }
        else {
          d1.style.backgroundColor = "yellow"
          d2.style.backgroundColor = "yellow"
        }
      }
      else if (data.myData[index1].type == 'all rounder' && data.myData[index2].type == 'all rounder') {
        var c1 = document.getElementById("c1_1")
        var c2 = document.getElementById("c2_1")
        if (data.myData[index1].avg > data.myData[index2].avg) {
          c1.style.backgroundColor = "yellow"
        }
        else if (data.myData[index1].avg < data.myData[index2].avg) {
          c2.style.backgroundColor = "yellow"
        }
        else {
          c1.style.backgroundColor = "yellow"
          c2.style.backgroundColor = "yellow"
        }
        var d1 = document.getElementById("c1_2")
        var d2 = document.getElementById("c2_2")
        if (data.myData[index1].strike_rate > data.myData[index2].strike_rate) {
          d1.style.backgroundColor = "yellow"
        }
        else if (data.myData[index1].strike_rate < data.myData[index2].strike_rate) {
          d2.style.backgroundColor = "yellow"
        }
        else {
          d1.style.backgroundColor = "yellow"
          d2.style.backgroundColor = "yellow"
        }
        var c1 = document.getElementById("c1_3")
        var c2 = document.getElementById("c2_3")
        if (data.myData[index1].wickets > data.myData[index2].wickets) {
          c1.style.backgroundColor = "yellow"
        }
        else if (data.myData[index1].wickets < data.myData[index2].wickets) {
          c2.style.backgroundColor = "yellow"
        }
        else {
          c1.style.backgroundColor = "yellow"
          c2.style.backgroundColor = "yellow"
        }
        var d1 = document.getElementById("c1_4")
        var d2 = document.getElementById("c2_4")
        if (data.myData[index1].econ < data.myData[index2].econ) {
          d1.style.backgroundColor = "yellow"
        }
        else if (data.myData[index1].econ > data.myData[index2].econ) {
          d2.style.backgroundColor = "yellow"
        }
        else {
          d1.style.backgroundColor = "yellow"
          d2.style.backgroundColor = "yellow"
        }
      }
      else {
        alert("Invalid Comparison!! Try Again!!")
      }
    }
    ).catch(error => {
      alert('Error retrieving JSON data: ' + error.message);
    });
}
const searchInput = document.getElementById('searchInput1');
const resultsList = document.getElementById('autocomplete-results');

searchInput1.addEventListener('input', function () {
  // clear previous results
  resultsList.innerHTML = '';

  // get search term
  const searchTerm = this.value.trim();

  // get search results
  const results = getSearchResults(searchTerm);

  // show results
  results.forEach(function (result) {
    const li = document.createElement('li');
    li.innerText = result;
    li.addEventListener('click', function () {
      searchInput1.value = result;
      resultsList.innerHTML = '';
    });
    resultsList.appendChild(li);
  });
});

function getSearchResults(searchTerm) {
  // replace this with your own search function
  const results = ['Rohit Sharma', 'Virat Kohli', 'MS Dhoni', 'Shikhar Dhawan', 'KL Rahul', 'Suryakumar Yadav', 'Dinesh Kartik', 'Suresh Raina', 'Shreyas Iyer', 'Rishabh Pant', 'Virendra Sehwag', 'Ajinkya Rahane', 'Sanju Samson', 'Gautam Gambhir', 'Manish Pandey', 'Akshar Patel', 'Robin Uthappa', 'Shubhaman Gill', 'Ruturaj Gaikwad', 'Kedar Jadhav', 'Rahul Tripathi', 'Ashish Nehra', 'Jasprit Bumrah', 'Mohammed Shami', 'Bhuvneshwar Kumar', 'Amit Mishra', 'Vinay Kumar', 'Pragyan Ojha', 'Ishant Sharma', 'Praveen Kumar', 'S Sreesanth', 'Ajit Agarkar', 'Harbhajan Singh', 'Zaheer Khan', 'Chetan Sakariya', 'Deepak Hooda', 'Varun Chakravarthy', 'Lakshmipathy Balaji', 'Ishan Kishan', 'Murali Kartik', 'Harshal Patel', 'Sandeep Warrier', 'Mayank Markande', 'Khaleel Ahmed', 'Devdutt Padikal', 'T Natarajan', 'Hardik Pandya', 'Krunal Pandya', 'Stuart Binny', 'Umesh Yadav'];
  return results.filter(function (result) {
    return result.toLowerCase().startsWith(searchTerm.toLowerCase());
  });
}
const searchInputs = document.getElementById('searchInput2');
const resultsLists = document.getElementById('autocompletee-results');

searchInput2.addEventListener('input', function () {
  // clear previous results
  resultsLists.innerHTML = '';

  // get search term
  const searchTerms = this.value.trim();

  // get search results
  const results = getSearchResults(searchTerms);

  // show results
  results.forEach(function (result) {
    const li = document.createElement('li');
    li.innerText = result;
    li.addEventListener('click', function () {
      searchInput2.value = result;
      resultsLists.innerHTML = '';
    });
    resultsLists.appendChild(li);
  });
});

function getSearchResults(searchTerm) {
  
  const results = ['Rohit Sharma', 'Virat Kohli', 'MS Dhoni', 'Shikhar Dhawan', 'KL Rahul', 'Suryakumar Yadav', 'Dinesh Kartik', 'Suresh Raina', 'Shreyas Iyer', 'Rishabh Pant', 'Virendra Sehwag', 'Ajinkya Rahane', 'Sanju Samson', 'Gautam Gambhir', 'Manish Pandey', 'Akshar Patel', 'Robin Uthappa', 'Shubhaman Gill', 'Ruturaj Gaikwad', 'Kedar Jadhav', 'Rahul Tripathi', 'Ashish Nehra', 'Jasprit Bumrah', 'Mohammed Shami', 'Bhuvneshwar Kumar', 'Amit Mishra', 'Vinay Kumar', 'Pragyan Ojha', 'Ishant Sharma', 'Praveen Kumar', 'S Sreesanth', 'Ajit Agarkar', 'Harbhajan Singh', 'Zaheer Khan', 'Chetan Sakariya', 'Deepak Hooda', 'Varun Chakravarthy', 'Lakshmipathy Balaji', 'Ishan Kishan', 'Murali Kartik', 'Harshal Patel', 'Sandeep Warrier', 'Mayank Markande', 'Khaleel Ahmed', 'Devdutt Padikal', 'T Natarajan', 'Hardik Pandya', 'Krunal Pandya', 'Stuart Binny', 'Umesh Yadav'];
  return results.filter(function (result) {
    return result.toLowerCase().startsWith(searchTerm.toLowerCase());
  });
}


//normal search

const search = document.getElementById('searchInput');
const resultsLi = document.getElementById('autos');

search.addEventListener('input', function () {
  // clear previous results
  resultsLi.innerHTML = '';

  // get search term
  const searchTermss = this.value.trim();

  // get search results
  const results = getSearchResults(searchTermss);

  // show results
  results.forEach(function (result) {
    const li = document.createElement('li');
    li.innerText = result;
    li.addEventListener('click', function () {
      search.value = result;
      resultsLists.innerHTML = '';
    });
    resultsLi.appendChild(li);
  });
});

function getSearchResults(searchTerm) {
  // replace this with your own search function
  const results = ['Rohit Sharma', 'Virat Kohli', 'MS Dhoni', 'Shikhar Dhawan', 'KL Rahul', 'Suryakumar Yadav', 'Dinesh Karthik', 'Suresh Raina', 'Shreyas Iyer', 'Rishabh Pant', 'Virendra Sehwag', 'Ajinkya Rahane', 'Sanju Samson', 'Gautam Gambhir', 'Manish Pandey', 'Akshar Patel', 'Robin Uthappa', 'Shubhaman Gill', 'Ruturaj Gaikwad', 'Kedar Jadhav', 'Rahul Tripathi', 'Ashish Nehra', 'Jasprit Bumrah', 'Mohammed Shami', 'Bhuvneshwar Kumar', 'Amit Mishra', 'Vinay Kumar', 'Pragyan Ojha', 'Ishant Sharma', 'Praveen Kumar', 'S Sreesanth', 'Ajit Agarkar', 'Harbhajan Singh', 'Zaheer Khan', 'Chetan Sakariya', 'Deepak Hooda', 'Varun Chakravarthy', 'Lakshmipathy Balaji', 'Ishan Kishan', 'Murali Kartik', 'Harshal Patel', 'Sandeep Warrier', 'Mayank Markande', 'Khaleel Ahmed', 'Devdutt Padikal', 'T Natarajan', 'Hardik Pandya', 'Krunal Pandya', 'Stuart Binny', 'Umesh Yadav'];
  return results.filter(function (result) {
    return result.toLowerCase().startsWith(searchTerm.toLowerCase());
  });
}

