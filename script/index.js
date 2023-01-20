(function () {
  //функция слайдера
  function slideEnable() {
    const slider = document.querySelector('.slider'),
        slide = document.querySelector('.slide'),
        slides = Array.from(document.querySelectorAll('.slide')),
        btnSlideLeft = document.querySelector('.slide_left'),
        btnSlideRight = document.querySelector('.slide_right');

  let slideIterator = 0
  const stepSize = slides[0].clientWidth - 90

  function slideRight() {
    slideIterator >= slides.length - 1 ? slideIterator = -1 : null
    slideIterator++
    slider.style.transform = `translateX(${-stepSize * slideIterator}px)`
  }

  function slideLeft() {
    slideIterator <= 0 ? slideIterator = slides.length : null
    slideIterator--
    slider.style.transform = `translateX(${-stepSize * slideIterator}px)`
  }

  btnSlideRight.addEventListener('click', () => slideRight());
  btnSlideLeft.addEventListener('click', () => slideLeft())
  }
  // включение слайдера
  slideEnable()

  //анимация
  function headerAnimation() {
    const hiddenElemeltList = Array.from(document.querySelectorAll('.hidden'))
    hiddenElemeltList.forEach(hiddenElement => {
      hiddenElement.style.opacity = 1
    })
  }
  setInterval(headerAnimation, 100)

})();
