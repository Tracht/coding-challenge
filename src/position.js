/**
 * Position Class can be thought of like a 'GPS' module.
 *      It is meant to be used within other Classes (i.e. Ship Class).
 *      It should not be called on directly. 
 * 
 * It is initialised with 3 arguments. 
 *      A location (x,y coordinates - type = integer) and 
 *      A starting orientation (N, S, E, W - type = strings)
 * 
 * It has a method 'updatePosition'. 
 *      It takes a single argument, 'instruction', (F, L, R - type = strings) 
 *      It returns a new position instance.  
 * 
 * The 'updatePosition' method relies on the static method 'moves'. 
 *      Moves is an object which tells you by how much x and y should change. 
 *      It also tells you the new orientation.   
 */
class Position {

    constructor(x, y, orientation) {
        this.x = x; 
        this.y = y;
        this.orientation = orientation; 
    }

    updatePosition(instruction){
        const key = `${this.orientation} ${instruction}`;
        const delta_move = Position.moves[key]; // to call on a 'static' method you must do it like this, cannot do "this.moves"

        const newX = this.x + delta_move.x;
        const newY = this.y + delta_move.y;
        const newO = delta_move.orientation;

        return new Position(newX, newY, newO);
    }

    static moves = {
        // Forward
        'N F' : {
            x: 0, 
            y: 1, 
            orientation: 'N'
        }, 
        'S F': {
            x: 0, 
            y: -1, 
            orientation: 'S'
        }, 
        'E F': {
            x: 1, 
            y: 0, 
            orientation: 'E'
        },
        'W F': {
            x: -1, 
            y: 0, 
            orientation: 'W'
        }, // Right
        'N R' : {
            x: 0,
            y: 0, 
            orientation: 'E'
        }, 
        'S R' : {
            x: 0,
            y: 0, 
            orientation: 'W'
        }, 
        'E R' : {
            x: 0,
            y: 0, 
            orientation: 'S'
        }, 
        'W R' : {
            x: 0,
            y: 0, 
            orientation: 'N'
        }, // Left
        'N L': {
            x: 0, 
            y: 0, 
            orientation: 'W'
        },
        'S L': {
            x: 0, 
            y: 0, 
            orientation: 'E'
        },
        'E L': {
            x: 0, 
            y: 0, 
            orientation: 'N'
        },
        'W L': {
            x: 0, 
            y: 0, 
            orientation: 'S'
        } 
    }

}

module.exports = {
    Position
}