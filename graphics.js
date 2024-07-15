const dataTableOne = document.querySelector("#table1");

const firstTableData = dataTableOne.getElementsByTagName("td");
const firstData = [];

const rows = dataTableOne.querySelectorAll("tbody tr");
const countries = [];

const yearRow = dataTableOne.querySelector("tbody tr");
const yearCells = yearRow.querySelectorAll("th");
const years = [];

// get all data

for (let i = 2; i < rows.length; i++) {
  const cells = rows[i].getElementsByTagName("td");
  const countryData = {
    country: cells[i].innerText,
    data: {},
  };

  for (let j = 1; j < cells.length; j++) {
    const year = headers[j - 1];
    const value = parseFloat(cells[j].innerText.replace(",", "."));
    countryData.data[year] = value;
  }

  result.push(countryData);
}

return result;

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

/* function extractTableData(ID) {
  let data2 = [];

  let table = ID.rows;

  for (let i = 0; i < table.length; i++) {
    data2.push(extractDataCell(table, i));
  }

  return data2.map(x => x);
} */

function extractDataCell(tableChoice, index) {
  let data = [];
  for (let j = 0; j < tableChoice[index].cells.length; j++) {
    data.push(tableChoice[index].cells[j].innerText);
  }
  return data;
}

console.log("Countries:", countries);
console.log("Years:", years);
console.log(data);

//
/*
function tableToArray(table1) {
  const table = document.getElementById(table1);
  const rows = table.getElementsByTagName("tr");
  const tableArray = [];

  for (let row of rows) {
    const cells = row.getElementsByTagName("td");
    const rowArray = [];
    for (let cell of cells) {
      rowArray.push(cell.innerText);
    }
    tableArray.push(rowArray);
  }

  return tableArray;
}
*/
