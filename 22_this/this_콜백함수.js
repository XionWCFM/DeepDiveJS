var value = 1;

const ojb = {
  value: 100,
  foo() {
    console.log("foos this:", this);
    setTimeout(function () {
      console.log("callback this : ", this);
      console.log("callback this value", this.value);
    }, 100);
  },
};

ojb.foo();
