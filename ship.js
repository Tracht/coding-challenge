const { Position } = require ('./position');

class Ship {
    constructor(x, y, orientation) {
        this.position = new Position(x, y, orientation);
    }

    position() {
        return this.position;
    }
}

module.exports = {
    Ship
}