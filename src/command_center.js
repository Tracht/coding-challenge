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