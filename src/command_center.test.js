const { Ship } = require("./ship");
const { CommandCenter } = require("./command_center");

describe('Command Center with Grid 5,3', () => {

    it('Lost Ship at -1, -1', () => {
        var command_center = new CommandCenter(5,3);
        var ship = new Ship(-1,-1,'N');
        expect(command_center.isLost(ship)).toEqual(true);
    });

    it('Not Lost Ship at 0, 0', () => {
        var command_center = new CommandCenter(5,3);
        var ship = new Ship(0, 0, 'N');
        expect(command_center.isLost(ship)).toEqual(false);
    });

    it('Not Lost Ship at 5, 3', () => {
        var command_center = new CommandCenter(5,3);
        var ship = new Ship(5, 3, 'N');
        expect(command_center.isLost(ship)).toEqual(false);
    });

    it('Lost Ship at 6, 3', () => {
        var command_center = new CommandCenter(5,3);
        var ship = new Ship(6, 3, 'N');
        expect(command_center.isLost(ship)).toEqual(true);
    });

    it('Lost Ship at 5, 4', () => {
        var command_center = new CommandCenter(5,3);
        var ship = new Ship(5, 4, 'N');
        expect(command_center.isLost(ship)).toEqual(true);
    });

})