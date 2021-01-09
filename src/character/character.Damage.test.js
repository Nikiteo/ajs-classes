import Character from './character.js';

test('Should decrease health', () => {
  const received = new Character('Name', 'Zombie');
  received.damage(10);
  expect(received.health).toEqual(94);
});

test('Should state health in 0', () => {
  const received = new Character('Name', 'Zombie', 0);
  received.damage(10);
  expect(received.health).toEqual(0);
});
