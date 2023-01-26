/*
const fetch = require('node-fetch')

const getGithubUserName = async id => {
    const res = await fetch(`https://api.github.com/users/${id}`) // (1)
    const { name } = await res.json(); // (2)
    console.log(name)
}

getGithubUserName('ungmo2')



await 키워드는 프로미스가 settled 상태가 될때까지 대기하기때문에
(1)에서 fetch 함수가 settled 상태가 될때까지 대기하고 settled이 되면
res 변수에 resolve 결과가 할당됩니다


*/

async function foo() {
    const a = await new Promise(resolve => setTimeout(() => resolve(1) , 3000))
    const b = await new Promise(resolve => setTimeout(() => resolve(2) , 2000))
    const c = await new Promise(resolve => setTimeout(() => resolve(3) , 1000))
    console.log([a,b,c])
}

foo()

/*
[Done] exited with code=1 in 0.084 seconds

[Running] 
[ 1, 2, 3 ]

[Done] exited with code=0 in 6.109 seconds

*/


async function bar(n) {
    const a = await new Promise(resolve => setTimeout(() => resolve(n),3000))
    const b = await new Promise(resolve => setTimeout(() => resolve(a + 1),2000))
    const c = await new Promise(resolve => setTimeout(() => resolve(b + 1),1000))
    console.log([a,b,c])
}

bar(1)