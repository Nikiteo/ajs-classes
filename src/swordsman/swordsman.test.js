import Swordsman from './swordsman.js';

test('should create Swordsman', () => {
  const expected = {
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'Sword',
    type: 'Swordsman',
  };

  const received = new Swordsman('Sword');

  expect(received).toEqual(expected);
});
