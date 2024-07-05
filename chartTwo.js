/* function retrieveData() {
  const table = document.getElementById("table2");
  const rows = table.getElementsByTagName("tr");
  const data = [];

  for (let i = 1; i < rows.length; i++) {
    const countryData = rows[i].querySelectorAll("td");
    const countries = {
      country: countryData[0].innerText,
      data: {
        "2007-09": parseInt(countryData[1].innerText),
        "2010-12": parseInt(countryData[2].innerText),
      },
    };
    data.push(countries);

    console.log("tab2 country", countries);
  }
}

*/

function tableToObject() {
  const table = document.getElementById("table2");
  const rows = table.getElementsByTagName("tr");
  const result = [];

  for (let i = 1; i < rows.length; i++) {
    const cells = rows[i].getElementsByTagName("td");
    const countryData = {
      country: cells[0].innerText,
      data: {
        "2007-09": parseInt(cells[1].innerText),
        "2010-12": parseInt(cells[2].innerText),
      },
    };

    result.push(countryData);
  }

  return result;
}

// CHART
(async function () {
  const data = tableToObject();
  const countries = data.map(country => country.country);
  const data2007_09 = data.map(country => country.data["2007-09"]);
  const data2010_12 = data.map(country => country.data["2010-12"]);

  new Chart(document.getElementById("chart2"), {
    type: "bar",
    data: {
      labels: countries,
      datasets: [
        {
          label: "2007-09",
          data: data2007_09,
          backgroundColor: "rgba(30, 36, 68, 0.8)",
          borderWidth: 0,
          fill: false,
        },
        {
          label: "2010-12",
          data: data2010_12,
          backgroundColor: "rgba(76, 94, 181, 0.8)",
          borderWidth: 0,
          barThickness: 12,
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Prison population, average per year, 2007-09 and 2010-12, (per 100,000 inhabitants)",
        },
      },
    },
  });
})();
