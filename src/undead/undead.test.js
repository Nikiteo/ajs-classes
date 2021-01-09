import Undead from './undead.js';

test('should create Undead', () => {
  const expected = {
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'Und',
    type: 'Undead',
  };

  const received = new Undead('Und');

  expect(received).toEqual(expected);
});
