const open = document.querySelector('#open');
const close = document.getElementById('close');
const container = document.querySelector('.container')

open.onclick = () => {
    container.classList.add('show-nav')
    console.log(123)
}
close.onclick = () => {
    container.classList.remove('show-nav')
}