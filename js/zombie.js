let face = document.querySelector('.preview__face')

window.addEventListener('scroll', () => {
    if (window.scrollY === 0) {
        face.classList.remove('zombie')
    }
    face.classList.add('zombie')
})


