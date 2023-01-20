
const $button = document.querySelector('button')

$button.onclick = function() {
    console.log('이벤트핸들러프로퍼티방식')
}

$button.addEventListener('click',function() {
    console.log('이벤트리스너방식')
})