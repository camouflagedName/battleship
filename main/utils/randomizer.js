export const randomizer = () => {
    const randNumGen = (start, end) => Math.floor(Math.random() * end) + start
    let arrayOfRandomness = []
    const randomHorzNum = (length) => (randNumGen(0, 4) * 5) + (5 - length)
    const randomVertNum = () => (5 * length) + randNumGen(0, 5)
    const horizontal = () => {
        const loopLength = randNumGen(2, 5)
        const gridNum = randomHorzNum(loopLength)
        for (let x = 0; x < loopLength; x++) {
            arrayOfRandomness.push(gridNum + x)
        }
    }

    const vertical = () => {
        const loopLength = randNumGen(2, 5)
        const gridNum = randomVertNum(loopLength)
        for (let x = 0; x < loopLength; x++) {
            arrayOfRandomness.push(gridNum + x * 5)
            //console.log(gridNum, x, loopLength)
        }
    }
    horizontal()
    vertical()

    return arrayOfRandomness
}