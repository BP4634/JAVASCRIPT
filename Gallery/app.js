function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}

const modal = getElement('.modal') 
const sections = document.querySelectorAll('.section')
const mainImg = getElement('.main-img')
const imgName = getElement('.image-name')
const nature = getElement('.nature')
const city = getElement('.city')
const picsNature = nature.querySelectorAll('.img')
const picsCity = city.querySelectorAll('.img')
modalImages = modal.querySelectorAll('.modal-img')
modalImg = modal.querySelector('.modal-images')
const closeBtn = modal.querySelector('.close-btn')

picsNature.forEach((element) => {
  element.addEventListener('click', () => {
    mainImg.src = element.src
    
    imgName.innerHTML = element.title
    modalImg.innerHTML = ''
    picsNature.forEach(e => {
      e.classList.add('modal-img')
      modalImg.appendChild(e)
      if(e === element) {
        picsNature.forEach(e => e.classList.remove('selected'))
        e.classList.add('selected')
      }
      
    })

    modal.classList.add('open')
  })
});


picsCity.forEach((element) => {
  element.addEventListener('click', () => {
    mainImg.src = element.src
    
    imgName.innerHTML = element.title
    modalImg.innerHTML = ''
    picsCity.forEach(e => {
      e.classList.add('modal-img')
      modalImg.appendChild(e)
      if(e === element) {
        picsCity.forEach(e => e.classList.remove('selected'))
        e.classList.add('selected')
      }
      
    })

    modal.classList.add('open')
  })
});



closeBtn.addEventListener('click',() => {
  modal.classList.remove('open')
  picsNature.forEach(e => {
    nature.appendChild(e)
    e.classList.remove('modal-img')
  })
  picsCity.forEach(e => {
    city.appendChild(e)
    e.classList.remove('modal-img')
  })
  
  
})