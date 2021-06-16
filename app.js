//Получение всех слайдов в slides 
const slides = document.querySelectorAll('.slide')
//Установка активного слайда по клику
for(const slide of slides){
    slide.addEventListener('click', () => {
        clearActiveClasses()
        slide.classList.add('active')
    })
}
//Убираем активный клас с неактивных слайдов
function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}