/**
 * Journey Class.
 * 
 * It is initialised with 1 argument - the Command_Center Class instance.
 * 
 * It has a method 'report', which takes 2 arguments. 
 *      First argument: an instance of a Ship
 *      Second argument: the instructions given to the ship ('RFRFRFRF' - type = string)
 * 
 *      This method returns the Ship's status. 
 *      For ships that become lost, its last position (prior to going over the edge) is reported like so: 
 *      (I.e. If the ocean bounds are (3,3), and the ship's position is (4,3), then report the status like this:)
 *              I.e. '3 3 N LOST'
 * 
 *      For ships that never got lost, its position is reported like so:
 *               I.e. '3 3 N'
 * 
 */

 class Journey {
    constructor(command_center){
        this.command_center = command_center;
    }

    report(ship, instructions) {

        for (const instruction of instructions) {
            const lastPosition = `${ship.getX()} ${ship.getY()} ${ship.getOrientation()}`
            
            ship.move(instruction);
            const isLost = this.command_center.isLost(ship);

            if (isLost){
                return `${lastPosition} LOST`;
            } 
        }

        return `${ship.getX()} ${ship.getY()} ${ship.getOrientation()}`;
    }
}

module.exports = {
    Journey
}