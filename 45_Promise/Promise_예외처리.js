
try {
    setTimeout(() => {
        throw new Error('Error')
    },1000)
}
//에러를 캐치하지 못함
catch (e){
    console.error('캐치한 에러', e)
}