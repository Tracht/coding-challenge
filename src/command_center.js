class CommandCenter {
    constructor(x,y){
        this.x = x; 
        this.y = y;
    }

    isLost(ship){
        
        if ( ship.getX() < 0 || ship.getX() > this.x ) { // 'X' bounds
            return true
        }

        if ( ship.getY() < 0 || ship.getY() > this.y ) {  // 'Y' bounds 
            return true
        }

        return false
        
    }
}

module.exports = {
    CommandCenter
}