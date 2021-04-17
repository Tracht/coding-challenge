const { Position } = require ('./position');

class Ship {
    constructor(x, y, orientation) {
        this.position = new Position(x, y, orientation);
    }

    position() {
        return this.position;
    }

    move(instruction) {
        this.position = this.position.change(instruction);
    }
}

module.exports = {
    Ship
}