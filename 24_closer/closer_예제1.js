const x =1
function outerFunc() {
    const x = 10
    function innerfunc() {
        console.log(x) ; // 10
    }
    innerfunc()
}
outerFunc()
