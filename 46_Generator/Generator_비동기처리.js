
const fetch = require('node-fetch')

const async = generatorFunc => { 
    const generator = generatorFunc() //(2)
    //인자로 받은 함수를 변수에 할당

    const onResolved = arg => {
        const result = generator.next(arg)//(5)
    

    return result.done ? result.value : //(9)
    result.value.then(res => onResolved(res) ) //(7) 
    }
    //result 변수에 next에 arg를 인자로 담아줍니다.
    //next에 담은 인자는 yield식의 결과로 할당됩니다.
    //done 프로퍼티의 불린값에 따라 true면 value를 반환하고 아니라면 then 메서드를 호출합니다.

    return onResolved //(3)
    //만들어둔 onResolved 함수를 반환합니다.
}

(async(function* fetchTodo() { //(1)
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    const response = yield fetch(url) //(6)
    const todo = yield response.json() //(8)
    console.log(todo)
    // {userId : 1 , id: 1 , title: 'delectus aut autem' , completed:false} 
})())//(4)

/*
async 함수에 인자로 제네레이터함수를 넣어서 전달합니다


*/