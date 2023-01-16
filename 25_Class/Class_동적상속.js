function Base1 () {}

class Base2 {}


let condition = true

class Derived extends (condition ? Base1 : Base2) {};

const derived = new Derived()

console.log(derived)

// extends 부분에 삼항연산자를 걸수가있다?