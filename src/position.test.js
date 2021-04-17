const { Position } = require('./position');

describe("Position", () => {
  it("Checks from position 0,0", () => {
    var position = new Position(0, 0, 'N');
    expect(position.change('F')).toEqual(new Position(0, 1, 'N'));
    expect(position.change('L')).toEqual(new Position(0, 0, 'W'));
    expect(position.change('R')).toEqual(new Position(0, 0, 'E'));

    var position = new Position(0, 0, 'S');
    expect(position.change('F')).toEqual(new Position(0, -1, 'S'));
    expect(position.change('L')).toEqual(new Position(0, 0, 'E'));
    expect(position.change('R')).toEqual(new Position(0, 0, 'W'));

    var position = new Position(0, 0, 'E');
    expect(position.change('F')).toEqual(new Position(1, 0, 'E'));
    expect(position.change('L')).toEqual(new Position(0, 0, 'N'));
    expect(position.change('R')).toEqual(new Position(0, 0, 'S'));

    var position = new Position(0, 0, 'W');
    expect(position.change('F')).toEqual(new Position(-1, 0, 'W'));
    expect(position.change('L')).toEqual(new Position(0, 0, 'S'));
    expect(position.change('R')).toEqual(new Position(0, 0, 'N'));
  })




})