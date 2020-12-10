class Monster {
    constructor(type, color) {
        this.type = type;
        this.color = color;
        this.isScary = true;
    }
    roar() {
        console.log(`The ${this.color} ${this.type} lets out a tremendous roar!`);
    }
}


class Dragon extends Monster {
    constructor(type, color, element) {
        super(type, color);
        this.element = element;
    }
    fly() {
        console.log(`The ${this.color} ${this.element} ${this.type} flaps its wings and begins to fly.`);
    }
    shatter() {
        console.log(`The ${this.color} ${this.element} ${this.type} is shattered from the screaching howl of the werewolf.`);
    }
}

class Werewolf extends Monster {
    constructor(type, color) {
        super(type, color);
    }
    howl() {
        console.log(`The ${this.type} howls loudly.`);
    }
}

class Fairy extends Monster {
    constructor(type, color, ability) {
        super(type, color);
        this.ability = ability;
    }
    shapeShift() {
        console.log(`The ${this.color} ${this.type} used his ${this.ability} power to hide from the other monsters.`);
    }
}

const woodDragon = new Dragon("dragon", "brown", "wood");
woodDragon.roar();
woodDragon.fly();
woodDragon.shatter();

const werewolf1 = new Werewolf("werewolf", "blue");
werewolf1.howl();

const fairy1 = new Fairy("fairy", "green", "shapeshifting");
fairy1.shapeShift();