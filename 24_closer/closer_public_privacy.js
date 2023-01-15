function Person(name, age) {
    this.name = name
    let _age = age

    // 인스턴스 메서드
    this.sayHi = function() {
        console.log(`hi my name is ${this.name} i am ${_age}`)
    }
}

const me = new Person('lee', 20)
console.log(me.name) // lee
console.log(me._age) // undefined

const you = new Person('Kim' , 30)
you.sayHi()//hi my name is kim 30

console.log(you.name) // kim
console.log(you._age) // undefined