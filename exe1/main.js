const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.onclick = () => {
        removeActiveClass()
        panel.classList.add('active')
        console.log(panel)
    }
})

function removeActiveClass() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}