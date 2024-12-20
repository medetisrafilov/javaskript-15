function createTable(rows, cols) {
  const table = document.createElement("table");
  table.style.width = "55%"; 
//   table.style.borderCollapse = "collapse";
  table.style.margin = "20px 0";
  table.style.marginleft = "100px 0"
 
  

  for (let i = 0; i < rows; i++) {
    const row = document.createElement("tr"); 
    for (let j = 0; j < cols; j++) {
      const user = document.createElement(i === 0 ? "h2" : "td"); 
      user.textContent = i === 1 ? `хороший  ${j + 1}` : `лохой ${i}, 74.935  ${j + 1}`;
      

     
      user.style.border = "2px solid #000";
      user.style.padding = "10px";
      user.style.textAlign = "center";

      
      if (i === 0) {
        user.style.backgroundColor = "#9400d3";
        user.style.color = "white";
        user.style.backgroundColor = "#9400d3";
      }

      row.appendChild(user); 
    }
    table.appendChild(row); 
    
  }

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
  document.getElementById("table-container").appendChild(table);
}

  
createTable(13, 4); 
