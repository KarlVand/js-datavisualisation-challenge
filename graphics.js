const dataTableOne = document.querySelector("#table1");
const firstTableData = dataTableOne.getElementsByTagName("td");
const rows = dataTableOne.querySelectorAll("tbody tr");
const countries = [];
const yearRow = dataTableOne.querySelector("tbody tr");
const yearCells = yearRow.querySelectorAll("th");
const years = [];

// get all data
for (let i = 0; i < firstTableData.length; i++) {
  console.log(firstTableData[i].textContent);
}

// countries
rows.forEach(row => {
  const countryCell = row.querySelector("td");
  if (countryCell) {
    countries.push(countryCell.textContent.trim());
  }
});

// years

for (let i = 2; i < yearCells.length; i++) {
  years.push(yearCells[i].textContent);
}

console.log("Countries:", countries);
console.log("Years:", years);

//
