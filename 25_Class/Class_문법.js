//클래스 선언문
class Peron {}

//익명 클래스 표현식
const person = class {} 

//기명 클래스 표현식
const serson = class Myclass {}

//클래스 선언문 생성자 인스턴스 생성
class Person {
    // 생성자
    constructor(name) {
        //인스턴스 생성 및 초기화
        this.name = name ; // name 프로퍼티는 public합니다.
    }

    //프로토타입 메서드
    sayHi() {
        console.log(`Hi my name is ${this.name} `)

    }

    //정적 메서드
    static sayHello() {
        console.log("hello")
    }

}

// 인스턴스 생성
const me = new Person('Lee')

//인스턴스의 프로퍼티 참조
console.log(me.name) // lee
//프로토타입 메서드 호출
me.sayHi() // hi my name is lee
//정적 메서드 호출
Person.sayHello() // hello