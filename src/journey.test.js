const { Ship } = require('./ship');
const { CommandCenter } = require('./command_center');
const { Journey } = require('./journey');

describe('Ship status', () => {
    it('Ship 1 - not lost', () => {
        const command_center = new CommandCenter(5,3);
        const ship = new Ship(1, 1, 'E');
        const journey = new Journey(command_center);

        expect(journey.report(ship, 'RFRFRFRF')).toEqual('1 1 E');
    });

    it('Ship 2 - lost', () => {
        const command_center =  new CommandCenter(5,3);
        const ship = new Ship(3, 2, 'N');
        const journey = new Journey(command_center);

        expect(journey.report(ship, 'FRRFLLFFRRFLL')).toEqual('3 3 N LOST');
    })

    it('Ship 3 - not lost', () => {
        const command_center =  new CommandCenter(5,3);
        const ship = new Ship(0, 3, 'W');
        const journey = new Journey(command_center);

        expect(journey.report(ship, 'LLFFFLFLFL')).toEqual('2 3 S');
    })
})