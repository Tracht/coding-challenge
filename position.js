class Position {

    constructor(x, y, orientation) {
        this.x = x; 
        this.y = y;
        this.orientation = orientation; 
    }

    change(instruction){
        const key = `${this.orientation} ${instruction}`;
        const delta_move = Position.moves[key];

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