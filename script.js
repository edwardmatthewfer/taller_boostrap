const carousel = document.getElementById('carouselExample');
const opciones = document.querySelector(".opciones");
const divOptions = document.querySelector(".divOptions");

let carouselInterval = setInterval(function () {
    const nextButton = carousel.querySelector('.carousel-control-next');
    nextButton.click();
}, 3000);
carousel.addEventListener('mouseover', function () {
    clearInterval(carouselInterval);
});
carousel.addEventListener('mouseout', function () {
    carouselInterval = setInterval(function () {
        const nextButton = carousel.querySelector('.carousel-control-next');
        nextButton.click();
    }, 3000);
});


opciones.addEventListener("click", (e) => {
    divOptions.classList.toggle("ponerDisplay");
})