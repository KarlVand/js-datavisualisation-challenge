const table = document.getElementById("table1");
const rows = table.getElementsByTagName("tr");
const data = [];

// DATA
for (let i = 1; i < rows.length; i++) {
  data.push(rows.textContent);
  console.log("data", data);
}

// YEARS
const yearRow = table.querySelector("tbody tr");
const yearCells = yearRow.querySelectorAll("th");
const years = [];

for (let j = 2; j < yearCells.length; j++) {
  years.push(yearCells[j].textContent);
}

//fonctionne
console.log("Years:", years);

// COUNTRIES

for (let k = 2; k < rows.length; k++) {
  const cells = rows[k].querySelectorAll("td");
  const countries = [];

  countries = cells[0].innerText;
  countries.push(cells.textContent);

  console.log("countries", countries);
}
