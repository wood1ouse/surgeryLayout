const face = document.querySelector(".preview__face")
const zombie = document.querySelector(".preview__face__zombie")

document.addEventListener("scroll", () =>{
    const scrollHeight = window.pageYOffset;
    zombie.style.transform = scrollHeight >= 0 && scrollHeight <= 800
        ? `translateY(${scrollHeight}px)`
        : face.style.position = 'sticky'
    face.style.height = scrollHeight >= 50
        ? `${zombie.clientHeight - scrollHeight - 220}px`
        : "";
    zombie.style.height = scrollHeight >= 800
        ? "890px"
        : ""

});



