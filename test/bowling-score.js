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

    this.rollSpare = () => {
        this.game.roll(5)
        this.game.roll(5)
    }

    this.rollStrike = () => {
        this.game.roll(10)
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

    context('A game with one spare', () => {
        it('has a score of 16', () => {
            this.rollSpare()
            this.game.roll(3)
            this.rollMany(17, 0)

            this.game.score().should.equal(16)
        })
    })

    context('A game with one strike', () => {
        it('has a score of 24', () => {
            this.rollStrike(10)
            this.game.roll(3)
            this.game.roll(4)
            this.rollMany(16, 0)

            this.game.score().should.equal(24)
        })
    })
})
