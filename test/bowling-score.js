require('chai').should()

const {BowlingGame} = require('../bowling-game.js')

describe('Bowling Game:', () => {
    beforeEach(() => {
        this.game = new BowlingGame()
    })

    this.rollMany = (rollNumber, pinNumber) => {
        for (let i = 0; i < rollNumber; i++) {
            this.game.roll(pinNumber)
        }
    }

    context('A gutter game', () => {
        it('has a score of 0', () => {
            this.rollMany(20, 0)
            this.game.score().should.equal(0)
        })
    })

    context('An all 1 game game', () => {
        it('has a score of 20', () => {
            this.rollMany(20, 1)
            this.game.score().should.equal(20)
        })
    })
})
