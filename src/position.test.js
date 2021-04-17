const { Position } = require('./position');

describe("Position", () => {
  it("Checks from position 0,0,N", () => {
    const position = new Position(0, 0, 'N');
    expect(position.updatePosition('F')).toEqual(new Position(0, 1, 'N'));
    expect(position.updatePosition('L')).toEqual(new Position(0, 0, 'W'));
    expect(position.updatePosition('R')).toEqual(new Position(0, 0, 'E'));
  });

  it("Checks from position 0,0,S", () => {
    const position = new Position(0, 0, 'S');
    expect(position.updatePosition('F')).toEqual(new Position(0, -1, 'S'));
    expect(position.updatePosition('L')).toEqual(new Position(0, 0, 'E'));
    expect(position.updatePosition('R')).toEqual(new Position(0, 0, 'W'));
  });
  
  it("Checks from position 0,0,E", () => {
    const position = new Position(0, 0, 'E');
    expect(position.updatePosition('F')).toEqual(new Position(1, 0, 'E'));
    expect(position.updatePosition('L')).toEqual(new Position(0, 0, 'N'));
    expect(position.updatePosition('R')).toEqual(new Position(0, 0, 'S'));
  });

  it("Checks from position 0,0,W", () => {
    const position = new Position(0, 0, 'W');
    expect(position.updatePosition('F')).toEqual(new Position(-1, 0, 'W'));
    expect(position.updatePosition('L')).toEqual(new Position(0, 0, 'S'));
    expect(position.updatePosition('R')).toEqual(new Position(0, 0, 'N'));
  });
})