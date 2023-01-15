let x = 200

function foo() {
    const x = 1
    const y = 2
    //중첩함수 bar는 외부함수보다 더 오래유지되며 상위 스코프 식별자를 참조함
    
    function bar() {
        console.log(x)
    }
    return bar
}
const bar = foo()
bar()
