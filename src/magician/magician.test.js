import Magician from './magician.js';

test('should create Magician', () => {
  const expected = {
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: 'Mag',
    type: 'Magician',
  };

  const received = new Magician('Mag');

  expect(received).toEqual(expected);
});
