import { randomizer } from "./randomizer.js"

export const initGrid = () => {
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