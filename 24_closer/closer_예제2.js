const x= 1

function outer () {
    const x = 10
    const inner = function () {console.log(x)} //10
    return inner
}

const innerfunc = outer()
innerfunc()