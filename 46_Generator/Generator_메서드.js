const genExpFunc2 = function* () {
    try {
        yield 1;
        yield 2;
        yield 3;
    }
    catch (e) {
        console.error(e)
    }
}

const generator = genExpFunc2();

console.log(generator.next()) // {value:1 , done: false}
console.log(generator.next()) // {value:2 , done: false}
console.log(generator.next()) // {value:3 , done: false}
console.log(generator.next()) // {value:undefined , done: true}
console.log(generator.return('End!')) // {value:End! , done : true}
console.log(generator.throw('Error!')) // {value: undefiend , done:true}

/*
next 메서드는 yield 표현식 까지 코드블록을 실행합니다
return 메서드는 인수로 전달받은 값을 value 프로퍼티 값으로 넣습니다.
throw 메서드는 인수로 전달받은 에러를 발생시키고 undefined를 밸류 프로퍼티 값으로 넣습니다.
*/
