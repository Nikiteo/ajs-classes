const typesParams = {
  Bowman: { attack: 25, defence: 25 },
  Swordsman: { attack: 40, defence: 10 },
  Magician: { attack: 10, defence: 40 },
  Daemon: { attack: 25, defence: 25 },
  Undead: { attack: 40, defence: 10 },
  Zombie: { attack: 10, defence: 40 },
};

export default class Character {
  constructor(name, type, health = 100) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Name length should be 2-10 characters');
    }

    this.name = name.toString();

    if (!(type in typesParams)) {
      throw new Error('Unknown character type');
    }

    this.type = type;
    this.health = health;
    this.level = 1;
    this.attack = typesParams[type].attack;
    this.defence = typesParams[type].defence;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('level up avaliable only for alive');
    }

    this.level += 1;
    this.health = 100;
    this.attack *= 1.2;
    this.defence *= 1.2;
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) this.health = 0;
  }
}
