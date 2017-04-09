require('chai').should()

const {BowlingGame} = require('../bowling-game.js')

describe('Bowling Game: a gutter game', () => {
    it('has a score of 0', () => {
        this.game = new BowlingGame()
        for (let i = 0; i < 20; i++) {
            this.game.roll(0)
        }
        this.game.score().should.equal(0)
    })
})
