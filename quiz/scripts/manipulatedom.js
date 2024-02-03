let tableIndex = 0; // Unique identifier for each table

window.onload = function () {
  document.getElementById('addTableBtn').addEventListener('click', addTable);
}

function createTRNode(colNodes) {
  let trNode = document.createElement("tr");
  colNodes.forEach(function (colNode) {
    trNode.appendChild(colNode);
  })
  return trNode;
}

function createTDNode(childNode, id) {
  let tdNode = document.createElement("td");
  tdNode.id = id;
  tdNode.appendChild(childNode);
  return tdNode;
}

function createTxtNode(txt) {
  let txtNode = document.createTextNode(txt);
  return txtNode;
}

function createButtonNode(txt, tableIndex, rowIndex) {
  let btnNode = document.createElement('button');
  btnNode.innerText = txt;
  btnNode.onclick = () => {
    handleEditTextClick(tableIndex, rowIndex);
  }
  return btnNode;
}

function handleEditTextClick(tableIndex, rowIndex) {
  let cell = document.getElementById(`col-${tableIndex}-${rowIndex}`);
  cell.innerHTML = `<input type="text" placeholder="enter text">`;
}

function addTable() {
  const tableNode = document.createElement("table");
  let currentTableIndex = tableIndex++; // Assign the current index and increment for the next table

  for (let i = 0; i < 3; i++) {
    let col1 = createTDNode(createTxtNode(`Cell (${i}, 0)`), `col-${currentTableIndex}-${i}`);
    let col2 = createTDNode(createButtonNode("Edit Text", currentTableIndex, i))
    tableNode.appendChild(createTRNode([col1, col2]));
  }
  document.getElementById("root").appendChild(tableNode);
}