const {shuffleArray} = require('./utils')

let testArray1 = ['do', 're', 'mi', 'fa', 'so', 'la']
let testArray2 = [1, 3, 5, 7, 9, 2, 4, 6, 8, 0]
let testArray3 =[]
let testArray4=[{'name':'dare'},{'name':'dore'},{'name':'sore'},{'name':'kore'},]

describe('shuffleArray should', () => {
    
    test(`return an array`,() => {
        expect(Array.isArray(shuffleArray(testArray1))).toBe(true)
        expect(Array.isArray(shuffleArray(testArray2))).toBe(true)
        expect(Array.isArray(shuffleArray(testArray3))).toBe(true)
        expect(Array.isArray(shuffleArray(testArray4))).toBe(true)


    })
    test(`return an array of the same length as the input`, () => {
    expect(shuffleArray(testArray1)).toHaveLength(testArray1.length)
    expect(shuffleArray(testArray2)).toHaveLength(testArray2.length)
    expect(shuffleArray(testArray3)).toHaveLength(testArray3.length)
    expect(shuffleArray(testArray4)).toHaveLength(testArray4.length)

    })
})