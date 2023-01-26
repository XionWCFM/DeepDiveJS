const foo = () => {
    throw Error('foo에서 발생한 에러')
}

const bar = () => {
    foo()
}

const baz = () => {
    bar()
}

try {
    baz()
}
catch (err){
    console.error(err)    
}

/*

Error: foo에서 발생한 에러
    at foo (c:\Users\qdv16\OneDrive\바탕 화면\DeepDiveJs\47_Error\Error_에러전파.js:2:11)
    at bar (c:\Users\qdv16\OneDrive\바탕 화면\DeepDiveJs\47_Error\Error_에러전파.js:6:5)
    at baz (c:\Users\qdv16\OneDrive\바탕 화면\DeepDiveJs\47_Error\Error_에러전파.js:10:5)
    at Object.<anonymous> (c:\Users\qdv16\OneDrive\바탕 화면\DeepDiveJs\47_Error\Error_에러전파.js:14:5)
    at Module._compile (node:internal/modules/cjs/loader:1159:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1213:10)
    at Module.load (node:internal/modules/cjs/loader:1037:32)
    at Module._load (node:internal/modules/cjs/loader:878:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47

*/