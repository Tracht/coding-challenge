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
    })

})