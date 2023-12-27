const slides = document.querySelectorAll('.slide')
const prevBtn = document.querySelector('.prevBtn')
const nextBtn = document.querySelector('.nextBtn')

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`
})

let counter = 0
nextBtn.addEventListener('click', increaseCounter)

prevBtn.addEventListener('click', decreaseCounter)

function increaseCounter() {
  counter++
  if(counter > slides.length - 1) {
    counter = 0
  }
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`
  })
}

function decreaseCounter() {
  counter--
  if(counter < 0) {
    counter = slides.length - 1
  }
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`
  })
}