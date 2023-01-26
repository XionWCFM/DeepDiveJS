const fetch = require('node-fetch')

const foo = async() => {
    try {
        const wrongUrl = 'https://wrong.url'

        const response = await fetch(wrongUrl)
        const data = await response.json()
        console.log(data)
    } catch (err) {
        console.error(err)
    }
}

foo()

/*
위 예제의 foo 함수의 catch문은 네트워크 에러뿐만 아니라
try 코드 블록 내의 모든 문에서 발생한 에러를 캐치할 수 있습니다.

async 함수 내에서 catch 문을 사용해서 에러처리를 하지 않을 경우
async 함수는 발생한 에러를 reject 하는 프로미스를 반환합니다

따라서 catch 후속처리 메서드를 이용해서 처리하는것도 가능합니다.
*/