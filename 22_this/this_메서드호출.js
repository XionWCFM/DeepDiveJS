const person = {
  name: "lee",
  getName() {
    return this.name;
  },
};

const anotherPerson = {
  name: "kim",
};

anotherPerson.getName = person.getName;

console.log(anotherPerson.getName()); // kim
console.log(person.getName()); //lee
console.log(this.getName());
