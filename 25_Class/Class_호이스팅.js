const Person = '';

{
    console.log(Person)
    class Person {}
}

//클래스 선언문도 호이스팅이 발생하며 let, const 키워드랑 비슷하게 호이스팅 됨
// 하지만 클래스 선언문 이전에 TDZ에 빠지지 않기 때문에 호이스팅이 발생 안하는 것처럼 동작함