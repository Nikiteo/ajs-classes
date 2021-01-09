import Zombie from './zombie.js';

test('should create Zombie', () => {
  const expected = {
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: 'Zomb',
    type: 'Zombie',
  };

  const received = new Zombie('Zomb');

  expect(received).toEqual(expected);
});
