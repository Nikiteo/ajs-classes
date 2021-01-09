import Character from '../character/character.js';

export default class Daemon extends Character {
  constructor(...args) {
    super(...args, 'Daemon');
  }
}
