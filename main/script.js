//each player will get one turn
//if player turn, player will attack
//an attack
//if player turn is true
//player will input a coordinate
//randomizer
//create an array
//contains at 2-5 adjacent nums
//contains 2-5 nums x%5-randomNum
import { initGrid } from "./utils/initializeGrid.js"
import { player } from "./utils/playerModel.js"

const gameGrid = initGrid()

const player1 = player

const createBoard = () => {
  const root = document.querySelector("#root")

  //create attempts container
  const attemptsContainer = document.createElement("div")
  attemptsContainer.className = "sideContainer"
  attemptsContainer.id = "attempts"
  attemptsContainer.innerHTML = "Attempts" + "<br>"
  root.appendChild(attemptsContainer)

  //create grid
  const boardContainer = document.createElement("div")
  boardContainer.className = "mainBox"
  root.appendChild(boardContainer)

  for (const row in gameGrid) {
    //console.log(row)
    let rowContainer = document.createElement("div")
    rowContainer.className = "row"
    rowContainer.id = row
    boardContainer.appendChild(rowContainer)
    //let random = Math.floor(Math.random() * 24)

    for (const cell in gameGrid[row]) {
      const gridBox = document.createElement("div")
      gridBox.className = "gridBox"
      gridBox.id = `row${row}-cell${cell}`

      gridBox.addEventListener("click", () => {
        if (player1.turn) {
          if (gameGrid[row][cell] === false) {
            //mark the cell as a miss
            //add to player.attempts
            const attCont = document.querySelector("#attempts")
            attCont.innerHTML = attCont.innerHTML + `[${row}, ${cell}]` + '<br>'
            gridBox.style.backgroundColor = "red"
          }
          else {
            //add to player.hits
            const hitsCont = document.querySelector("#hits")
            hitsCont.innerHTML = hitsCont.innerHTML + `[${row}, ${cell}]` + '<br>'
            gridBox.style.backgroundColor = "green"

            //if player.hits === ?
            //end game
          }
          //end players turn
          //init comp turn
        }
      })
      rowContainer.appendChild(gridBox)
    }
  }
  //create attempts container
  const hitsContainer = document.createElement("div")
  hitsContainer.className = "sideContainer"
  hitsContainer.id = "hits"
  hitsContainer.innerHTML = "Hits" + "<br>"
  root.appendChild(hitsContainer)
}

createBoard()