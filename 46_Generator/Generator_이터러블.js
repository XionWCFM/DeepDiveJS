//무한 이터러블을 생성하는 함수
const infiniteFibonacci = (function() {
    let [pre,cur] = [0,1]
    return {
        [Symbol.iterator]() {return this},
        next() {
            [pre,cur] = [cur , pre + cur]
            // 무한 이터러블이므로 done 프로퍼티를 생략
            return {value : cur}
        }    
    }
}())

// infiniteFibonacci는 무한 이터러블입니다.
for(const num of infiniteFibonacci) {
    if (num > 10000) break;
    console.log(num)
}

/*
출력결과
1
2
3
5
8
13
21
34
55
89
144
233
377
610
987
1597
2584
4181
6765
*/