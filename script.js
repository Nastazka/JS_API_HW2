// Вашей задачей является создание веб-слайдера для отображения изображений на веб-странице.

// Создайте интерфейс веб-страницы, который включает в себя следующие элементы:
// a. Контейнер для отображения текущего изображения.
// b. Кнопки "Предыдущее изображение" и "Следующее изображение" для переключения между изображениями.
// c. Навигационные точки (индикаторы) для быстрого переключения между изображениями.

// Для создания элементов интерфейса используйте HTML.
// При клике на кнопку "Предыдущее изображение" должно отображаться предыдущее изображение.
// При клике на кнопку "Следующее изображение" должно отображаться следующее изображение.
// При клике на навигационные точки, слайдер должен переключаться к соответствующему изображению.

// Слайдер должен циклически переключаться между изображениями, то есть после последнего изображения должно отображаться первое, и наоборот.

// Добавьте стилизацию для слайдера и элементов интерфейса с использованием CSS для улучшения внешнего вида.

const sliderContainer = document.querySelector('.slider-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dotsContainer = document.querySelector('.dots-container');

let currentSlide = 0;

function showSlide(slideIndex) {
    sliderContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
    
    const dots = dotsContainer.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        if (i === slideIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

prevBtn.addEventListener('click', () => {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = sliderContainer.children.length - 1;
    }
    showSlide(currentSlide);
});

nextBtn.addEventListener('click', () => {
    currentSlide++;
    if (currentSlide === sliderContainer.children.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
});

dotsContainer.addEventListener('click', (event) => {
    const dot = event.target.closest('.dot');
    if (!dot) return;

    const slideIndex = Array.from(dotsContainer.children).indexOf(dot);
    currentSlide = slideIndex;
    showSlide(currentSlide);
});

showSlide(currentSlide);