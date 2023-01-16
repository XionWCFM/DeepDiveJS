const target = "Is this all there is?"

//is 문자열과 매치하는 패턴 플래그가 생략되었으므로 대소문자를 구별합니다.
const regExp = /is/;

// target과 정규 표현식이 매치하는지 테스트합니다.
regExp.test(target) //true

// target과 정규 표현식의 매칭 결과를 구합니다.
target.match(regExp) //[ 'is', index: 5, input: 'Is this all there is?', groups: undefined ]

console.log(regExp.test(target) )
console.log(target.match(regExp) )

/*
만약 검색 대상 문자열 내에서 패턴과 매치하는 모든 문자열을 전역 검색하면서
대소문자를 구별하지 않고 검색하고자한다면?
regExp = /is/ig
target.match(regExp) -> ["Is", "is", "is"]
*/