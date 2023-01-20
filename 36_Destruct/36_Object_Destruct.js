const {lastName, firstName} = { firstName : "Ungmo"
 , lastName : "Lee", }
 
 console.log(lastName)


 //중첩 객체에 디스트럭처링 할당
 
 const user = {
    name : 'lee',
    address: {
        zipcode : 93,
        city : 'sa'
    }
 }

 //address 프로퍼티 키로 객체를 추출하고 이 객체의 city 프로퍼티 키로 값을 추출합니다.
 const { address: {city} } = user
 console.log(city)