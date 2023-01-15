const hi = (function () {
  function Person(name) {
    this.name = name;
  }

  Person.prototype = {
    constructor: Person,
    sayHello() {
      console.log(`${this.name} 안녕하세요`);
    },
  };
  return Person;
})();

const me = new hi();

console.log(me);
console.log(me.constructor === hi);
console.log(me.constructor === Object);
