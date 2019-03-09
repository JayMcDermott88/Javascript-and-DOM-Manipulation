var tableData = data;

var tbody = d3.select("tbody");

console.log(data);

data.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
  

var filterButton = d3.select("#filter-btn");

filterButton.on("click", function() {

  
  d3.event.preventDefault();

 
  var inputElement = d3.select("#datetime");

  
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

  console.log(filteredData);
});
 
d3.select(".table table-striped")
    .append("table-head").text(${Datetime})
    .append("table-head").text(${City})
    .append("table-head").text(${State})
    .append("table-head").text(${Country})
    .append("table-head").text(${Shape})
    .append("table-head").text(${Duration})
    .append("table-head").text(${Comments})
});
