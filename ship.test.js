const { Ship } = require('./ship');
const { Position } = require('./position');

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
    })


})