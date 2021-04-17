/**
 * Command Center Class.
 * 
 * It is initialised with 2 arguments - the x & y coordinates representing the bounds of the ocean.
 *      A location (x,y coordinates - type = integer).
 * 
 * It has a method 'isLost', which takes a 'Ship' instance as an argument.
 *      It checks if the ship is out of bounds. 
 *      The ocean bounds start at 0,0. 
 *      The end of the ocean bounds are a positive combination of x and y, i.e. (5, 3). 
 *      A ship is out of bounds if x and y are negative. 
 *      A ship is out of bounds if x and y are larger than the initialised x & y coordinates.
 */

 class CommandCenter {
    constructor(x,y){
        this.x = x; 
        this.y = y;
    }

    isLost(ship){

        if ( ship.getX() < 0 || ship.getY() < 0) {
            return true;
        }
        
        if ( ship.getX() > this.x || ship.getY() > this.y ) {
            return true;
        }

        return false;
    }
}

module.exports = {
    CommandCenter
}