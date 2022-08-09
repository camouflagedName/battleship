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
import { createContainer, createSidePanelRow, createViewRow, createTitle } from "./utils/sidePanelLayout.js"
import { addIcon } from "./utils/gameboardLayout.js"

const gameGrid = initGrid()

const player1 = player

const createBoard = () => {
  const root = document.querySelector("#root")
  const titleRow = createViewRow()
  const viewRow = createViewRow()
  const title = createTitle()
  const attemptsContainer = createContainer("Attempts")
  const boardContainer = document.createElement("div")

  root.appendChild(titleRow)
  titleRow.appendChild(title)
  root.appendChild(viewRow)

  //create attempts container
  viewRow.appendChild(attemptsContainer)

  //create grid
  boardContainer.className = "mainBox"
  viewRow.appendChild(boardContainer)

  for (const row in gameGrid) {
    //console.log(row)
    let rowContainer = document.createElement("div")
    rowContainer.className = "gameboard-row"
    rowContainer.id = row
    boardContainer.appendChild(rowContainer)
    //let random = Math.floor(Math.random() * 24)

    for (const cell in gameGrid[row]) {
      const gridBox = document.createElement("div")
      gridBox.className = "gridBox"
      gridBox.id = `row${row}-cell${cell}`

      gridBox.addEventListener("click", () => {
        let content = `[${row}, ${cell}]`
        let containerRowContent = createSidePanelRow(content)
        if (player1.turn) {
          if (gameGrid[row][cell] === false) {
            //mark the cell as a miss
            //add to player.attempts
            const waterIcon = addIcon("water")
            const attCont = document.querySelector("#attempts")
            attCont.appendChild(containerRowContent)
            gridBox.style.backgroundColor = "red"
            gridBox.appendChild(waterIcon)
          }
          else {
            //add to player.hits
            const shipIcon = addIcon("sailing")
            const hitsCont = document.querySelector("#hits")
            hitsCont.appendChild(containerRowContent)
            gridBox.style.backgroundColor = "green"
            gridBox.appendChild(shipIcon)

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
  const hitsContainer = createContainer("Hits")
  viewRow.appendChild(hitsContainer)
}

createBoard()