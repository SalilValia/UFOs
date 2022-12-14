// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// clears any existing table data
function buildTable(data) {
    tbody.html("");
    //Loop through each object in the data 
    data.forEach((dataRow) => {
        //Append a row to the table
        let row = tbody.append("tr");
        // Loop through each field of the data row 
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
  }

function handleClick() {
    // grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    // Check if a date was entered and filter the data using the date
    if (date) {
        // Apply `filter` to the table data to only keep the
        // rows where the `datetime` value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
      };
      
   // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);
    };

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);