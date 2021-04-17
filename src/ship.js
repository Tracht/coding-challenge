const { Position } = require ('./position');

class Ship {
    constructor(x, y, orientation) {
        this.position = new Position(x, y, orientation);
    }

    getX(){
        return this.position.x; 
    }

    getY(){
        return this.position.y;
    }

    getOrientation(){
        return this.position.orientation;
    }

    position() {
        return this.position;
    }

    move(instruction) {
        this.position = this.position.updatePosition(instruction);
    }
}

module.exports = {
    Ship
}