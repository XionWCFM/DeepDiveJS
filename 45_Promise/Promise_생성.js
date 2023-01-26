
// Get 요청을 위한 비동기 함수
const promiseGet = url => {
    return new Promise((resolve,reject) => {
        const xhr = new XMLHttpRequest()

        xhr.open('GET' , url)
        xhr.send()

        xhr.onload = () => {
            if(xhr.status === 200 ) {
                resolve(JSON.parse(xhr.response))
            //응답을 성공적으로 받으면 resolve 함수 호출
            }
            else{
                reject(new Error(xhr.status))
                //에러 발생시 reject 함수 호출
            }
        }
    })
}

promiseGet('urlurlrurl')
//promiseGet 함수는 promise를 반환합니다.

