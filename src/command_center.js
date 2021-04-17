class CommandCenter {
    constructor(x,y){
        this.x = x; 
        this.y = y;
    }

    isLost(ship){

        // if it is negatively out of bounds
        if ( ship.getX() < this.x || ship.getY() < this.y ) {
            return true;
        }
        
    }
}

module.exports = {
    CommandCenter
}