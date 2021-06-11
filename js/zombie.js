document.addEventListener("scroll", function() {
    const scrollHeight = window.pageYOffset;
    document.querySelector(".preview__face").style.transform = scrollHeight >= 10
        ? "translateY(100%)"
        : "";
    document.querySelector(".preview__face.zombie").style.height = scrollHeight >= 10
        ? "867px" :
        "";
});

