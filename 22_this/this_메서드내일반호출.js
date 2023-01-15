var value = 1;

const obj = {
  value: 100,
  foo() {
    console.log("foo's this : ", this); // value:100 , foo: f
    console.log("foo's this.value :", this.value); // 100

    function bar() {
      console.log("bars this : "); // global
      console.log("bars this.value : ", this.value); // undefined?
    }

    bar();
  },
};

obj.foo();
