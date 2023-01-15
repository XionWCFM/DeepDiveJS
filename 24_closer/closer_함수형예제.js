//함수를 인수로 전달받고 함수를 반환하는 고차 함수
// 이 함수는 카운트 상태를 유지하기 위한 자유 변수 counter를 기억하는 클로저를 반환합니다.

function makeCounter(aux) {
    //카운트 상태를 유지하기 위한 자유 변수
    let counter = 0


    //클로저를 반환
    return function () {
        //인수로 전달받은 보조 함수에 상태 변경을 위임한다.
        counter = aux(counter) 
        return counter
    }
}

//보조함수
function increase(n) {
    return ++n
}

function decrease(n) {
    return --n
}

console.log(makeCounter(increase))


// increaser 함수와는 별개의 독립된 렉시컬 환경을 갖기 때문에 카운터 상태가 연동하지 않는다
/*
const increaser = makeCounter(increase)
console.log(increaser()) //1
console.log(increaser()) //2

const decreaser = makeCounter(decrease)
console.log(decreaser()) //-1
console.log(decreaser()) //-2
*/