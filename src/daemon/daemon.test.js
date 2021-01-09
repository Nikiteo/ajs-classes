import Daemon from './daemon.js';

test('should create Daemon', () => {
  const expected = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Dae',
    type: 'Daemon',
  };

  const received = new Daemon('Dae');

  expect(received).toEqual(expected);
});
