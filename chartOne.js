/*




  // COUNTRIES

  for (let k = 2; k < rows.length; k++) {
    const cells = rows[k].querySelectorAll("td");
    const countries = [];

    countries.push(cells[0].innerText);

    console.log(countries);
  }
}

 for (let i = 2; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        const countryData = {
            country: cells[0].innerText,
            data: {}
        };

          /* let localizedNumber = rows.textContent;
  let normalizedNumber = localizedNumber.replace(",", "."); */

/* trouver le moyen de extract la data par pays (row - pays), puis creer graphique */
const table = document.getElementById("table1");

function getData() {
  const rows = table.querySelectorAll("tbody tr");
  const data = [];

  for (let i = 1; i < rows.length; i++) {
    const dataRetrieve = rows[i].getElementsByTagName("td");
    const countryData = {
      country: dataRetrieve[0].innerText,
      data: {},
    };
    data.push(countryData);
  }
  console.log("data", data);
}

function yearsOne() {
  const yearRow = table.querySelector("tbody tr");
  const yearCells = yearRow.querySelectorAll("th");
  const years = [];

  for (let j = 2; j < yearCells.length; j++) {
    years.push(yearCells[j].textContent);
  }

  console.log("Years:", years);
}

getData();
yearsOne();

(async function () {
  await getData();
  const data = getData();
  const countries = data.map(country => country.country);
  const data2007_09 = data.map(country => country.data["2007-09"]);
  const data2010_12 = data.map(country => country.data["2010-12"]);
});

new Chart(document.getElementById("myChart"), {
  type: "bar",
  data: {
    labels: data.map(row => row.year),
    datasets: [
      {
        label: "Acquisitions by year",
        data: data.map(row => row.count),
      },
    ],
  },
});
