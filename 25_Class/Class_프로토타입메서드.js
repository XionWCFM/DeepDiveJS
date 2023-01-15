//생성자함수

/*
function Person(name) {
    this.name = name;

    Person.prototype.sayHi = function () {
        console.log(`hi my name is ${this.name}`)
    }
}

const me = new Person() 
me.sayHi()
*/

class Person {
    constructor (name) {
        this.name = name
    }

    //프로토타입 메서드
    sayHi() {
        console.log(`hi my name is ${this.name}`)
    }
}

const me = new Person('lee')
me.sayHi()

// me 객체의 프로토타입은 Person.prototype 입니다.
console.log(Object.getPrototypeOf(me) === Person.prototype) // true
console.log(me instanceof Person) // true

// Person.prototype의 프로토타입은 object.prototype 입니다.
console.log(Object.getPrototypeOf(Person.prototype) === Object.prototype) //true
console.log(me instanceof Object) //true

//me 객체의 constructor는 person 클래스입니다.
console.log(me.constructor === Person) // true