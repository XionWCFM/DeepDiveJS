
function* genDecFunc() {
    yield 1;
}
// 제너레이터 함수 선언문

const genExpFunc2 = function* () {
    yield 1;
}
// 제너레이터 함수 표현식


const obj = {
    * genObjMethod() {
        yield 1;
    }
}
// 제너레이터 메서드


class MyClass {
    * genClsMethod() {
        yield 1;
    }
}
//제너레이터 클래스 메서드
