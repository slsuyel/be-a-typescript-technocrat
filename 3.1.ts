// class Animal {
//     name: string;
//     species: string;
//     sound: string;

//     constructor(name: string, species: string, sound: string) {
//         this.name = name;
//         this.species = species;
//         this.sound = sound;
//     }

//     makeSound() {
//         console.log(`The ${this.name} says ${this.sound}`);
//     }
// }

// const dog = new Animal('German Shepard', 'Dog', 'Ghew ghew');
// dog.makeSound();


class Animal {
    constructor(public name: string, public species: string, public sound: string) { }
    makeSound() {
        console.log(`The ${this.name} says ${this.sound}`);
    }
}
const dog = new Animal('German Shepard', 'Dog', 'Ghew ghew');
dog.makeSound();

