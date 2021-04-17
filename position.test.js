const { Position } = require('./position');

describe("Position", () => {
  it("Checks from position 0,0", () => {
    var position = new Position(0, 0, 'N');
    expect(position.change('F')).toEqual(new Position(0, 1, 'N'));
    expect(position.change('L')).toEqual(new Position(0, 0, 'W'));
    expect(position.change('R')).toEqual(new Position(0, 0, 'E'));
  })

  


})