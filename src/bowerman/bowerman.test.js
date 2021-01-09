import Bowerman from './bowerman.js';

test('should create Bowman', () => {
  const expected = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Bow',
    type: 'Bowman',
  };

  const received = new Bowerman('Bow');

  expect(received).toEqual(expected);
});
