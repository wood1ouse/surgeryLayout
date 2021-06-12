const slider = document.querySelector('.operations__slider')
const after = document.querySelector('.operations__slider__image__after')
const comparisonHeight = document.querySelector('.operations__slider__image__before').clientHeight
const line = document.querySelector('.operations__slider__line')

slider.addEventListener('mouseenter',   () => {
    line.style.display = "none"
})

slider.addEventListener('mousemove', e => {
    after.style.height = (e.offsetY * 100 / comparisonHeight) + '%'
    const lastYCord = e.offsetY
    slider.addEventListener('mouseleave', () => {
        line.style.display = "block"
        line.style.marginTop = `${lastYCord}px`
    })
})

