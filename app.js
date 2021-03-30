let choices = document.getElementById("choiceOption")

let container = document.getElementById("container")
let addChoice = document.getElementById("addChoice")
let factor = document.getElementById("factor")
let addFactor = document.getElementById("addFactor")
let first = document.getElementById("first")
let calculate = document.getElementById("calculate")
let rowWinner = ""
let showAnswer = ""
let choicesList = []
let winner = document.getElementById("winner")
let nextStepFactor = document.getElementById("nextStepFactor")
let choiceSection = document.getElementById("choiceSection")
let factorSection = document.getElementById("factorSection")
let calculateSection = document.getElementById("calculateSection")

nextStepFactor.addEventListener("click",function next (e){
    e.preventDefault()
    choiceSection.style.display = "none";
    factorSection.style.display = "block";
     
})

nextStepCalculate.addEventListener("click",function nextCal (e){
    e.preventDefault()
    
    factorSection.style.display = "none";
    calculateSection.style.display = "block";
     
})




addChoice.addEventListener("click", function go (e){
      e.preventDefault()
      let row = document.createElement("tr")
      row.classList.add("rows")
      let choice = document.createElement("td")
      choice.textContent = choices.value
      choicesList.push(choice.textContent)
      container.appendChild(row)
      row.appendChild(choice)
      choices.value = ""  
})

let weight = document.getElementById("weight")
let arr = []


addFactor.addEventListener("click", function add(e){
    e.preventDefault()
     let rowsa = document.getElementsByClassName("rows")
     let header = document.createElement("th")
     header.classList.add("options")
     header.textContent = factor.value
    //  arr.push([factor.value,weight.value])
    arr.push(weight.value)

    if(header.textContent != ""){
     first.appendChild(header)
     
     for(var i = 0 ; i < rowsa.length; i++){
      let input = document.createElement("input")
      input.type = "number"
      input.min = "0"
      input.max = "10"
      input.pattern = "\d*"
      input.classList.add("scores")
      input.value = 0
      rowsa[i].insertCell(rowsa[-1]).appendChild(input)
 
    };

    factor.value = ""
    weight.value = ""
}
else{
    alert("enter a factor")
}
})

let myInputs = document.getElementsByClassName("scores")
let scores = []
let finalScore = []
calculate.addEventListener("click", function (e){
    e.preventDefault()
    var rows = container.rows
    for(var i = 1 ; i < rows.length; i++){
        //very important that i and j start at 1 and not 0
        var arr1 = []
        var row = rows[i]
        for(var j = 1; j < row.cells.length; j++){
        let num = parseInt(row.cells[j].children[0].value)
        arr1.push(num * arr[j-1])
        //its j - 1 because the columns start at 1 but the weights that get pushed to arr start at 0 so need to minus 1 so it multiplies with the right weight
        }
       scores.push(arr1) 
       // push the row of scores to the scoes arr
       //now you want to calculate the numbers
    }
  console.log(scores)

// for( var i = 0; i < scores.length; i++){
//     scores[i].forEach(x => {
//    let final = x.reduce((acc,curr) => acc + curr)
//    finalScore.push(final)
//     })
// }

scores.forEach(x => {
   let final = x.reduce((acc,curr) => acc + curr)
   finalScore.push(final)
    }
)

console.log(finalScore)
let largest = Math.max(...finalScore)
console.log(largest)

//for loops finds out the index of the top score so you can know what row wins
for(var i = 0; i<finalScore.length; i++){
    if(largest == finalScore[i]){
     rowWinner = i
     console.log(choicesList[i])
    showAnswer = choicesList[i]
    winner.textContent =  `The winning option is  ${choicesList[i]}`
    }
}

   
   
   
})

































