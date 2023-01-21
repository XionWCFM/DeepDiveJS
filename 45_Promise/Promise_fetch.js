
const wrongUrl = 'http://jsonplaceholder.typicode.com/XXX/1'

fetch(wrongUrl)
.then(() => console.log('ok'))
.catch(() => console.log("err"))

//ok가 출력됨
//fetch 함수가 반환하는 프로미스는 404 not found와 같은 HTTP 에러가 발생해도
// 에러를 reject 하지 않고 불리언 타입의 ok 상태를 false로 설정한 Response 객체를 resolve함

//즉 오로지 네트워크 장애, CORS 에러에 의해 요청이 완료되지 못한 경우에만 프로미스를 reject함

fetch(wrongUrl)
.then((response) => {
    if (!response.ok) throw new Error(response.statusText)
    return response.json()
})
.catch(() => console.log("err"))
