const after = document.querySelector('.operations__slider__image__after')
const comparisonHeight = document.querySelector('.operations__slider__image__before').clientHeight
const line = document.querySelector('.operations__slider__line')
document.querySelector('.operations__slider').addEventListener('mousemove', e => {
    console.log('in foo');
    line.style.display = "none"
    after.style.height = (e.offsetY * 100 / comparisonHeight) + '%'
})