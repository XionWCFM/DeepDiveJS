// get 요청을 위한 비동기 함수
const get = (url) => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET' , url)
    xhr.send()

    xhr.onload = () => {
        // onload 이벤트핸들러는 비동기함수임 따라서 get 함수는 get 요청을 전달하고 onload 이벤트 핸들러를 등록한뒤
        // undefined를 반환하고 종료함 get 함수에는 return 문이 없기 때문
        // onload 이벤트 핸들러는 따라서 get 함수가 종료된 후 실행을함
        // 따라서 get 함수의 onload 이벤트 핸들러에서 서버의 응답결과를 반환하거나 상위 스코프 변수에 할당하면 동작이 기대대로 안됨 
        if (xhr.status == 200) {
            console.log(JSON.parse(xhr.response))
        }
        else {
            console.error( ` ${xhr.status} ${xhr.statusText}`)
        }
    }
}

// id가 1인 post를 취득
get('https://jsonplaceholder.typicode.com/posts/1')

/*
{
    userid : 1
    id : 1
    title : ~~
    body : dfs~~
}

이 예제에서 get 함수는 서버의 응답 결과를 콘솔에 출력합니다"
get 함수는 비동기 함수이며 비동기 함수를 호출하면
함수 내부의 비동기 처리가 완료되지 않아도 즉시 종료합니다

따라서 비동기 함수 내부의 비동기로 동작하는 코드에서 처리 결과를 외부로 반환하거나
상위 스코프의 변수에 할당하게되면 기대대로 동작하지 않습니다
*/