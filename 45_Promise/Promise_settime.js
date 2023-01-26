let g = 0

//비동기함수인 settimeout은 콜백 함수의 처리 결과를 외부로 반환하거나 상위 스코프의 변수에 할당하지 못합니다.
setTimeout(() => {g = 100} ,0)
console.log(g)//0
//따라서 settimeout이 종료되고 바로 console.log()가 실행되어 g는 0으로 출력됩니다.
