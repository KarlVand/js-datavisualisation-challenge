function tableOne() {
  // DATA
  const table = document.getElementById("table1");
  const rows = table.getElementsByTagName("tr");
  const data = [];

  for (let i = 1; i < rows.length; i++) {
    const dataRetrieve = parseFloat(rows[i].getElementsByTagName("td"));
    data.push(dataRetrieve.textContent);
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

    countries.push(cells[0].innerText);

    console.log(countries);
  }
}

/* trouver le moyen de extract la data par pays (row - pays), puis creer graphique */
