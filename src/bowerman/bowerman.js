import Character from '../character/character.js';

export default class Bowerman extends Character {
  constructor(...args) {
    super(...args, 'Bowman');
  }
}
