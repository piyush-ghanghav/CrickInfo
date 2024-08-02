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
          var row4 =`
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
          
        }else{
          alert('Player not found in JSON data');
        }
        
      })
      .catch(error => {
        alert('Error retrieving JSON data: ' + error.message);
      });
  }
  const search = document.getElementById('searchInput');
  const resultsLi = document.getElementById('autos');
  
  search.addEventListener('input', function() {
    // clear previous results
    resultsLi.innerHTML = '';
    
    // get search term
    const searchTermss = this.value.trim();
    
    // get search results
    const results = getSearchResults(searchTermss);
    
    // show results
    results.forEach(function(result) {
      const li = document.createElement('li');
      li.innerText = result;
      li.addEventListener('click', function() {
        search.value = result;
        resultsLists.innerHTML = '';
      });
      resultsLi.appendChild(li);
    });
  });
  
  function getSearchResults(searchTerm) {
    // replace this with your own search function
    const results = ['Rohit Sharma','Virat Kohli','MS Dhoni','Shikhar Dhawan','KL Rahul','Suryakumar Yadav','Dinesh Kartik','Suresh Raina','Shreyas Iyer','Rishabh Pant','Virendra Sehwag','Ajinkya Rahane','Sanju Samson','Gautam Gambhir','Manish Pandey','Akshar Patel','Robin Uthappa','Shubhaman Gill','Ruturaj Gaikwad','Kedar Jadhav','Rahul Tripathi','Ashish Nehra','Jasprit Bumrah','Mohammed Shami','Bhuvneshwar Kumar','Amit Mishra','Vinay Kumar','Pragyan Ojha','Ishant Sharma','Praveen Kumar','S Sreesanth','Ajit Agarkar','Harbhajan Singh','Zaheer Khan','Chetan Sakariya','Deepak Hooda','Varun Chakravarthy','Lakshmipathy Balaji','Ishan Kishan','Murali Kartik','Harshal Patel','Sandeep Warrier','Mayank Markande','Khaleel Ahmed','Devdutt Padikal','T Natarajan','Hardik Pandya','Krunal Pandya','Stuart Binny','Umesh Yadav'];
    return results.filter(function(result) {
      return result.toLowerCase().startsWith(searchTerm.toLowerCase());
    });
  } 