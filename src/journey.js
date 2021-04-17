class Journey {
    constructor(command_center){
        this.command_center = command_center;
    }

    report(ship, instructions) {

        for (const instruction of instructions) {
            ship.move(instruction);
        }

        return `${ ship.getX() } ${ ship.getY() } ${ ship.getOrientation() }`
    }
}

module.exports = {
    Journey
}