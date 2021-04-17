/**
 * Ship Class.
 * 
 * It is initialised with the Position Class and 3 arguments:
 *      A location (x,y coordinates - type = integer) and 
 *      A starting orientation (N, S, E, W - type = strings)
 * 
 * It has a method 'move', which moves the ship to a new position and orientation.
 *      It relies on the Position Class method 'updatePosition'
 *      It takes a single argument, 'instruction', (F, L, R - type = string) 
 *      It returns a new position instance.
 * 
 * The 'getX()' method returns the ship's current x-coordinate. 
 * The 'getY()' method returns the ship's current y-coordinate.
 * The 'getOrienation()' method returns the ship's current orientation.
 */

const { Position } = require ('./position');
class Ship {
    constructor(x, y, orientation) {
        this.position = new Position(x, y, orientation);
    }

    move(instruction) {
        this.position = this.position.updatePosition(instruction);
    }

    position() {
        return this.position;
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
}

module.exports = {
    Ship
}