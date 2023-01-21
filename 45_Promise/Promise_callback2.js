// get 요청을 위한 비동기 함수
const get = (url,sucesscallback, failcallback) => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET' , url)
    xhr.send()

    xhr.onload = () => {
        if (xhr.status == 200) {
            sucesscallback(JSON.parse(xhr.response))
            // 서버의 응답을 콜백 함수에 인수로 전달하면서 호출하여 응답에 대한 후속처리를 함
        }
        else {
            failcallback(xhr.status)
            // 에러 정보를 콜백 함수에 인수로 전달하면서 호출하여 에러 처리를 함
        }
    }
}

// id가 1인 post를 취득
// 서버의 응답에 대한 후속처리를 위한 콜백함수로 console.log() , console.error()를 전달함
get('https://jsonplaceholder.typicode.com/posts/1', console.log, console.error)

