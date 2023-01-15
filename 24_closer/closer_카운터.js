let num = 0;

const ncrease = function () {
    return ++num
}


// 전역에 선언되어서 변경될 위험이 높음

const crease = function () {
    let num = 0;

    return ++num
}

// 이전상태를 유지못함

const increase = (function () {
    let num = 0
    return function() {
        return ++num
    }
}())

console.log(increase()) // 1
console.log(increase()) // 2
console.log(increase()) // 3