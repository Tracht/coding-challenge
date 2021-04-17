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

})