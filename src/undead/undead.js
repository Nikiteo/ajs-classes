import Character from '../character/character.js';

export default class Undead extends Character {
  constructor(...args) {
    super(...args, 'Undead');
  }
}
