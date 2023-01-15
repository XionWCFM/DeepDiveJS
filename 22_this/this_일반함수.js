function foo() {
  console.log("foo's this:", globalThis);
  function bar() {
    console.log("bar's this:", globalThis);
  }
  bar();
}
console.log(foo());
