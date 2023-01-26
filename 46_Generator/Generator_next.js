function* genFunc() {

    const x = yield 1
    /*
    (1) 첫번째 next 메서드를 호출 했을 때 첫번째 yield 표현식까지 실행되고 중지됨
    이때 yield 값 1은 value 프로퍼티에 할당됨
    x 변수에는 아무것도 할당되지 않았고 x 변수의 값은 next 메서드가 두번째 호출될 떄 결정 됨
    첫번째 next 메서드에는 인수를 전달해도 무시됨

    (2) 두번째 next 메서드가 호출 될 때 전달한 인수 10은 첫번째 yield 표현식을 할당받는 x 변수에 할당됨
    즉 두번째 next 메서드에서 x = 10이 할당되는 것
    yield된 값 (x+10)은 밸류프로퍼티에 할당됩니다 x에 10을 할당했으니 10+10 = 20이 할당됩니다
    
    */
    const y = yield (x + 10)

    /*
    (3) 세번째 next 메서드가 호출 될 때 전달한 인수 20은 y에 할당되며
    함수 끝까지 실행됩니다. 제너레이터 함수의 반환값 x + y 는 value 프로퍼티에 할당됩니다.
    일반적으로 제너레이터의 반환값은 의미가 없기때문에 return은 종료의 의미로 사용합니다.
    */

    return x+y

}

const generator = genFunc(0)
//제너레이터 함수를 호출하면 제너레이터 객체를 반환합니다.

let res = generator.next()
//처음 호출하는 next 메서드에는 인수를 전달하지 않습니다 인수를 전달하면 무시됩니다.
console.log(res)
//{ value: 1, done: false }

res = generator.next(10)
//genFunc 함수의 x 변수에 10이 할당됩니다.
console.log(res)
//{ value: 20, done: false }

res = generator.next(20)
//genFunc 함수의 y 변수에 20이 할당됩니다. 이후 x+y까지 실행됩니다.
console.log(res)
//{ value: 30, done: true }