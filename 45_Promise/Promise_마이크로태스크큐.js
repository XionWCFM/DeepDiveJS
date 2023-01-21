setTimeout(() => console.log(1),0)

Promise.resolve()
.then(() => console.log(2))
.then(() => console.log(3))


// 출력결과 2 3 1
// 프로미스의 후속처리 메서드의 콜백함수는 태스크 큐가 아닌 마이크로태스크큐에 저장되기 때문에
// 2->3->1 순으로 출력되게됨.
// 근데 왜 위에 있는 setTimeout이 더 늦게 실행됨? -> 마이크로태스크큐의 우선순위가 태스크큐보다 높기 때문