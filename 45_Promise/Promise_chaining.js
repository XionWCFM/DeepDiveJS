const url = 'rurlrurlrujlr'

// id가 1인 post의 userid 취득

promiseGet(`${url}/posts/1`)
.then( ({ userId}) => promiseGet(`${url}/users/${userId}`))
.then(userInfo => console.log(userInfo))
.catch(err => console.error(err))

//위 예제는 첫번째 then -> 두번째 then -> catch 순서로 동작합니다.
//두번째 then은 첫번째 then 메서드가 반환한 프로미스를 인수로 받습니다.
//만약 후속처리 메서드의 콜백함수가 프로미스가아닌 값을 반환하더라도 암묵적으로 resolve, reject하여 
//프로미스를 생성해 반환합니다.