import Character from '../character/character.js';

export default class Zombie extends Character {
    constructor(...args) {
        super(...args, 'Zombie');
      }
}
