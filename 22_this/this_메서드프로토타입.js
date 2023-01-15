function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

const me = new Person("Lee");

console.log(me.getName()); // Lee

Perseon.prototype.name = "kim";
console.log(Person.prototype.getName()); // Kim
