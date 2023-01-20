
const xhr = new XMLHttpRequest()
//xml 객체 생성

xhr.open('GET' , "https://jsonplaceholder.typicode.com/" )
//http 요청 초기화
//링크는 fake REST API를 제공하는 서비스의 링크


xhr.send()
// HTTP 요청 전송

xhr.onload = () => {
//onload 이벤트는 HTTP 요청이 성공적으로 완료된 경우에 발생합니다.

	if (xhr.status === 200) {
        console.log(JSON.parse(xhr.response))
    }
    // status 프로퍼티는 응답 상태 코드를 나타내며 200은 정상응답 200이 아니면 에러상태임
    // 정상 응답일 경우 응답결과를 반환한다.

    else {
        console.error('Error' , xhr.status, xhr.statusText)
    }
    // 그 외에는 에러 콘솔을 찍어줌
}

