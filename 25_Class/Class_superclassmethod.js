//수퍼클래스

class Base {
    constructor (name) {
        this.name = name
    } 
    sayHi() {return `hi ${this.name}`}
}

class Derived extends Base {
    sayHi() {
        //__super 는 Base.prototype을 가리킵니다.
        const __super = Object.getPrototypeOf(Derived.prototype)
        return `${__super.sayHi.call(this)} how are you doing?`
    }
}

const d = new Derived('dsamk') // hi dsamk how are you doing?
console.log(d.sayHi())