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