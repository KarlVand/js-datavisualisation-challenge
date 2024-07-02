// Extract the data from the first column into a separate array
const dataTableOne = document.querySelector("#table1");
const rows = dataTableOne.querySelectorAll("tbody tr");
const countries = [];

// Iterate over each row to get the country names
rows.forEach(row => {
  const countryCell = row.querySelector("td");
  if (countryCell) {
    countries.push(countryCell.textContent.trim());
  }
});

// Extract the years from the year row
const yearRow = dataTableOne.querySelector("thead tr");
const yearCells = yearRow.querySelectorAll("th");
const years = [];

// Skip the first two headers ("N°" and "Country") and collect the years
for (let i = 6; i < yearCells.length; i++) {
  years.push(yearCells[i].textContent);
}

console.log("Countries:", countries);
console.log("Years:", years);
