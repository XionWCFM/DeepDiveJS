const Person = (function () {
    let _age = 0;

    //생성자 함수
    function Person(name, age) {
        this.name = name;
        _age = age
    }

    //프로토타입 메서드
    Person.prototype.sayHi = function () {
        console.log(`hi my name is ${this.name} i am ${_age}`)
    }

    return Person
}())

const me = new Person('Lee' , 20)
me.sayHi() // hi my name is Lee i am 20
console.log(me.name) // Lee 
console.log(me._age) // undefined

const you = new Person("kim" , 30)
you.sayHi() // hi my name is kim i am 30
console.log(you.name) // kim
console.log(you._age) // undefined

me.sayHi() // hi my name is lee i am 30