//수퍼클래스

class Base {
    constructor(a,b) {
        this.a = a
        this.b = b

    }
}

//서브클래스
class Derived extends Base {
    //다음과 같이 암묵적으로 constructor가 정의됩니다.
    //constructor(...args) {super(...args)}
}

const derived = new Derived(1,2)
console.log(derived)


// 
class Yes extends Base {
    constructor(a,b,c) {
        super(a,b)
        this.c = c
    }
}

const yes = new Yes(1,2,3)
console.log(yes)