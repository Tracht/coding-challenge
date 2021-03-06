const { Ship } = require('../src/ship');
const { Position } = require('../src/position');

describe('Ship', () => {

    it('Can initialise a ship with its current position & orientation', () => {
        const ship = new Ship(0, 0, 'N');
        expect(ship.position).toEqual(new Position(0, 0, 'N'));
    })

    it('Ship goes in a circle', () => {
        const ship = new Ship(0, 0, 'N');
        ship.move('F'); 
        expect(ship.position).toEqual(new Position(0, 1, 'N'));

        ship.move('R'); 
        expect(ship.position).toEqual(new Position(0, 1, 'E'));

        ship.move('F'); 
        expect(ship.position).toEqual(new Position(1, 1, 'E'));

        ship.move('R'); 
        expect(ship.position).toEqual(new Position(1, 1, 'S'));

        ship.move('F'); 
        expect(ship.position).toEqual(new Position(1, 0, 'S'));

        ship.move('R'); 
        expect(ship.position).toEqual(new Position(1, 0, 'W'));

        ship.move('F'); 
        expect(ship.position).toEqual(new Position(0, 0, 'W'));

        ship.move('R'); 
        expect(ship.position).toEqual(new Position(0, 0, 'N'));
    });

    it('Ship 1 - not lost', () => {
        const ship = new Ship(1, 1, 'E');
        ship.move('R');
        expect(ship.position).toEqual(new Position(1,1,'S'));

        ship.move('F'); 
        expect(ship.position).toEqual(new Position(1,0,'S'));

        ship.move('R');
        expect(ship.position).toEqual(new Position(1,0,'W'));

        ship.move('F'); 
        expect(ship.position).toEqual(new Position(0,0,'W'));

        ship.move('R');
        expect(ship.position).toEqual(new Position(0,0,'N'));

        ship.move('F'); 
        expect(ship.position).toEqual(new Position(0,1,'N'));

        ship.move('R');
        expect(ship.position).toEqual(new Position(0,1,'E'));

        ship.move('F'); 
        expect(ship.position).toEqual(new Position(1,1,'E'));
    })

    it('Ship 2 - lost', () => {
        const ship = new Ship(3, 2, 'N');

        ship.move('F');
        expect(ship.position).toEqual(new Position(3,3,'N'));

        ship.move('R'); 
        expect(ship.position).toEqual(new Position(3,3,'E'));

        ship.move('R');
        expect(ship.position).toEqual(new Position(3,3,'S'));

        ship.move('F'); 
        expect(ship.position).toEqual(new Position(3,2,'S'));

        ship.move('L'); 
        expect(ship.position).toEqual(new Position(3,2,'E'));

        ship.move('L'); 
        expect(ship.position).toEqual(new Position(3,2,'N'));

        ship.move('F'); 
        expect(ship.position).toEqual(new Position(3,3,'N')); // Print position + LOST

        ship.move('F'); 
        expect(ship.position).toEqual(new Position(3,4,'N')); // Lost if bounds = (5,3)

        ship.move('R'); 
        expect(ship.position).toEqual(new Position(3,4,'E'));

        ship.move('R');
        expect(ship.position).toEqual(new Position(3,4,'S'));

        ship.move('F'); 
        expect(ship.position).toEqual(new Position(3,3,'S'));

        ship.move('L'); 
        expect(ship.position).toEqual(new Position(3,3,'E'));

        ship.move('L');
        expect(ship.position).toEqual(new Position(3,3,'N'));
    })

    it('Ship 3 - not lost', () => {
        const ship = new Ship(0, 3, 'W');

        ship.move('L'); 
        expect(ship.position).toEqual(new Position(0,3,'S'));
        ship.move('L');
        expect(ship.position).toEqual(new Position(0,3,'E'));

        ship.move('F'); 
        expect(ship.position).toEqual(new Position(1,3,'E'));
        ship.move('F'); 
        expect(ship.position).toEqual(new Position(2,3,'E'));
        ship.move('F');
        expect(ship.position).toEqual(new Position(3,3,'E'));

        ship.move('L');
        expect(ship.position).toEqual(new Position(3,3,'N')); // Print position + LOST;
        ship.move('F'); 
        expect(ship.position).toEqual(new Position(3,4,'N')); // Lost if bounds = (5,3)

        ship.move('L');
        expect(ship.position).toEqual(new Position(3,4,'W'));
        ship.move('F'); 
        expect(ship.position).toEqual(new Position(2,4,'W'));

        ship.move('L');
        expect(ship.position).toEqual(new Position(2,4,'S')); // What I get
        expect(ship.position).toEqual(new Position(2,3,'S')); // What it 'should' be 
    })

})