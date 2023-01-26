
// async 함수 선언문
async function foo(n) {return n;}
foo(1).then(v => console.log(v)) // 1

// async 함수 표현식
const bar = async function (n) {return n}
bar(2).then(v => console.log(v)) // 2

// async 화살표 함수
const baz = async n => n;
baz(3).then(v => console.log(v)) // 3

// async 메서드
const obj = {
    async foo (n) { return n} 
}
obj.foo(4).then(v => console.log(v)) // 4

// async 클래스 메서드
class MyClass {
    async bar(n) {return n}
}
//class의 constructor 메서드는 async 메서드가 될 수 없습니다.
//constructor는 항상 인스턴스를 반환해야하지만 async는 항상 프로미스를 반환하기 때문입니다.

const myClass = new MyClass();
myClass.bar(5).then(v => console.log(v)) // 5