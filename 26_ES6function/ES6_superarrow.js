class Base { 
    constructor(name) {
        this.name = name
    }

    sayHi() {
        return `hi ${this.name}`
    }

}

class Derived extends Base {
    //화살표 함수의 super는 상위 스코프인 constructor의 super를 가리킨다.
    sayHi = () => ` ${super.sayHi()} how are you doing`
}

const derived = new Derived('lee')
console.log(derived.sayHi()) //hi lee how are you doing