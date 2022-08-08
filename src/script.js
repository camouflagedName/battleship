//each player will get one turn
//if player turn, player will attack
//an attack
  //if player turn is true
  //player will input a coordinate
//randomizer
  //create an array
  //contains at 2-5 adjacent nums
  //contains 2-5 nums x%5-randomNum

const randomizer = () => {
  const randNumGen = (start, end) => Math.floor(Math.random()*end) + start
  let arrayOfRandomness = []
  const randomHorzNum = (length) => (randNumGen(0, 4) * 5 ) + (5 - length)
  const randomVertNum = () => (5 * length) + randNumGen(0, 5)
  const horizontal = () => {
    const loopLength = randNumGen(2, 5)
    const gridNum = randomHorzNum(loopLength)
    for (x = 0; x < loopLength; x++) {
      arrayOfRandomness.push(gridNum + x)
    }
  }
  
  const vertical = () => {
    const loopLength = randNumGen(2, 5)
    const gridNum = randomVertNum(loopLength)
    for (x = 0; x < loopLength; x++) {
      arrayOfRandomness.push(gridNum + x * 5)
      //console.log(gridNum, x, loopLength)
    }
  }
  horizontal()
  vertical()
  
  return arrayOfRandomness
}

const initGrid = () => {
  const gridArr = []
  let innerArr = []
  const hitArr = randomizer()
  
  for (let x = 0; x < 25; x++) {
    if (x % 5 === 0) {
      innerArr = []
    }
    if (hitArr.includes(x)) {
      innerArr.push(true)
    }
    else {
      innerArr.push(false)
    }
    
    if ((x % 5) - 1 === 0 && x !== 0) {
      gridArr.push(innerArr)
    }
  }
  console.log(hitArr)
  return gridArr
}

const gameGrid = initGrid()

const player = {
  hit: false,
  turn: true,
  misses: [],
  hits: []
}

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
        if (player.turn) {
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