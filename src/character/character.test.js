import Character from './character.js';

test('should convert name to string', () => {
  const expected = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: '123',
    type: 'Bowman',
  };

  const received = new Character(123, 'Bowman');

  expect(received).toEqual(expected);
});

test('should throw error (name.length < 2)', () => {
  expect(() => {
    const character = new Character('A', 'Bowman');
    character();
  }).toThrowError('Name length should be 2-10 characters');
});

test('should throw error (name.length > 10)', () => {
  expect(() => {
    const character = new Character('Aaaaaaaaaaaaa', 'Bowman');
    character();
  }).toThrowError('Name length should be 2-10 characters');
});

test('Character with undefined type', () => {
  expect(() => {
    const character = new Character('Bowerman', 'Undefined');
    character();
  }).toThrowError('Unknown character type');
});
