let choices = document.getElementById("choiceOption");
let previewTable = document.getElementById("previewTable");
let container = document.getElementById("container");
let addChoice = document.getElementById("addChoice");
let factor = document.getElementById("factor");
let addFactor = document.getElementById("addFactor");
let first = document.getElementById("first");
let calculate = document.getElementById("calculate");
let rowWinner = "";
let showAnswer = "";
let choicesList = [];
let winner = document.getElementById("winner");
let nextStepFactor = document.getElementById("nextStepFactor");
let choiceSection = document.getElementById("choiceSection");
let factorSection = document.getElementById("factorSection");
let calculateSection = document.getElementById("calculateSection");
let b = document.getElementById("b");
let weight = document.getElementById("weight");
let arr = [];
let myInputs = document.getElementsByClassName("scores");
let scores = [];
let finalScore = [];
let tableContainer = document.getElementById("tableContainer");
let start = document.getElementById("star");
let preview = document.getElementById("preview");
let previewNav = document.getElementById("prevNav");
let calcNav = document.getElementById("calcNav");
let choiceNav = document.getElementById("choiceNav");
let factorNav = document.getElementById("factorNav");
start.addEventListener("click", function () {
  console.log(previewNav);
  previewNav.classList.remove("myActive");
  choiceNav.classList.add("myActive");
  preview.style.display = "none";
  start.style.display = "none";
  choiceSection.style.display = "block";
});

addChoice.addEventListener("click", function go(e) {
  e.preventDefault();
  previewTable.style.display = "none";
  tableContainer.style.display = "block";

  b.textContent =
    "Add your choices by entering a choice into the input box and clicking add choice";
  let row = document.createElement("tr");
  row.classList.add("rows");
  let choice = document.createElement("td");
  choice.textContent = choices.value;
  choicesList.push(choice.textContent);
  container.appendChild(row);
  row.appendChild(choice);
  choices.value = "";
});

nextStepFactor.addEventListener("click", function next(e) {
  e.preventDefault();
  choiceSection.style.display = "none";
  factorSection.style.display = "block";
  choiceNav.classList.remove("myActive");
  factorNav.classList.add("myActive");
});

addFactor.addEventListener("click", function add(e) {
  e.preventDefault();
  let tableRows = document.getElementsByClassName("rows");
  let header = document.createElement("th");
  header.classList.add("options");
  header.textContent = `${factor.value} weight:${weight.value}`;
  //  arr.push([factor.value,weight.value])
  arr.push(weight.value);

  if (header.textContent != "") {
    first.appendChild(header);

    for (var i = 0; i < tableRows.length; i++) {
      let input = document.createElement("input");
      input.type = "number";
      input.min = "0";
      input.max = "10";
      input.pattern = "/*d";
      input.classList.add("scores");
      input.value = "";
      tableRows[i].insertCell(tableRows[-1]).appendChild(input);
    }

    factor.value = "";
    weight.value = "";
  } else {
    alert("enter a factor");
  }
});

nextStepCalculate.addEventListener("click", function nextCal(e) {
  e.preventDefault();
  factorSection.style.display = "none";
  calculateSection.style.display = "block";
  factorNav.classList.remove("myActive");
  calcNav.classList.add("myActive");
});

calculate.addEventListener("click", function (e) {
  e.preventDefault();
  var rows = container.rows;
  for (var i = 1; i < rows.length; i++) {
    //very important that i and j start at 1 and not 0
    var rowScores = [];
    var row = rows[i];
    for (var j = 1; j < row.cells.length; j++) {
      var num = parseInt(row.cells[j].children[0].value);
      rowScores.push(num * arr[j - 1]);
      //its j - 1 because the columns start at 1 but the weights that get pushed to arr start at 0 so need to minus 1 so it multiplies with the right weight
    }
    scores.push(rowScores);
    console.log(scores);
    // push the row of scores to the scoes arr
    //now you want to calculate the numbers
  }

  scores.forEach((x) => {
    var final = x.reduce((acc, curr) => acc + curr);
    finalScore.push(final);
  });

  var largest = Math.max(...finalScore);

  //for loops finds out the index of the top score so you can know what row wins
  for (var i = 0; i < finalScore.length; i++) {
    if (largest == finalScore[i]) {
      rowWinner = i;
      showAnswer = choicesList[i];
      winner.textContent = `The winning option is  ${choicesList[i]}`;
    }
  }
});
