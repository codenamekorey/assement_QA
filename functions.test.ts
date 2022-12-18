const {shuffleArray} = require('./utils')
const {arrayCopy} = require('./utils')
const {array} = require('./utils')

describe('shuffleArray should', () => {
    // CODE HERE\\
    test("return array",()=> {
        expect(shuffleArray).toContain(arrayCopy);
    })
    test("Array length equal return length",() => {
        expect(array).toEqual(arrayCopy);
    } )

   
})