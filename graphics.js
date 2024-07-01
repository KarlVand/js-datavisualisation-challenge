const dataTableOne = document.querySelector("#table1");
const firstTableData = dataTableOne.getElementsByTagName("td");

for (let i = 0; i < firstTableData.length; i++) {
  console.log(firstTableData[i].textContent);
}
