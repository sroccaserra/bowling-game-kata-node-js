class BowlingGame {
    constructor() {
        this._rolls = []
    }

    roll(pinNumber) {
        this._score += pinNumber
        this._rolls.push(pinNumber)
    }

    score() {
        let score = 0
        let frameIndex = 0
        for (let frame = 0; frame < 10; frame++) {
            if (this.isSpare(frameIndex)) {
                score += 10 + this._rolls[frameIndex + 2]
                frameIndex += 2
            } else {
                score += this._rolls[frameIndex] + this._rolls[frameIndex + 1]
                frameIndex += 2
            }
        }
        return score
    }

    isSpare(frameIndex) {
        return this._rolls[frameIndex] + this._rolls[frameIndex + 1] === 10
    }
}

module.exports = {
    BowlingGame
}
