class BowlingGame {
    constructor() {
        this._score = 0
    }

    roll(pinNumber) {
        this._score += pinNumber
    }

    score() {
        return this._score
    }
}

module.exports = {
    BowlingGame
}
