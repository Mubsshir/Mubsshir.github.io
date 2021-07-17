const progress = document.querySelector('#progress');
const circles = document.querySelectorAll('.circle');
const next = document.querySelector('#next');
const prev = document.querySelector("#prev");

let currentActives = 1;

next.onclick = () => {
    currentActives++;
    if (currentActives > circles.length) {
        currentActives = 1;
    }
    update()
}
prev.onclick = () => {
    currentActives--;
    if (currentActives < 1) {
        currentActives = 1;
    }
    update()
}

const update = () => {
    circles.forEach((circle, idx) => {
        if (idx < currentActives) {
            circle.classList.add('active')
        }
        else {
            circle.classList.remove('active')
        }
    })
    const actives = document.querySelectorAll('.active');
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

    if (currentActives === 1) {
        prev.disabled = true;
    }
    else if (currentActives === circles.length) {
        next.disabled = true;
    }
    else {
        next.disabled = false;
        prev.disabled = false;
    }
}