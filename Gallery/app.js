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
modalImg = modal.querySelector('.modal-images')
const closeBtn = modal.querySelector('.close-btn')
const prevBtn = modal.querySelector('.prev-btn')
const nextBtn = modal.querySelector('.next-btn')

picsNature.forEach((element,index) => {
  element.addEventListener('click', () => {

    return select(picsNature, element)

  })

});


picsCity.forEach((element,index) => {
  element.addEventListener('click', () => {

    return select(picsCity, element)

  })
})


const select = (arr, element) => {

  mainImg.src = element.src
    
    imgName.innerHTML = element.title
    modalImg.innerHTML = ''
    arr.forEach(e => {
      e.classList.add('modal-img')
      modalImg.appendChild(e)
      if(e === element) {
        arr.forEach(e => e.classList.remove('selected'))
        e.classList.add('selected')
      }
      
    })

    modal.classList.add('open')

}


closeBtn.addEventListener('click',() => {
  modal.classList.remove('open')

  sections.forEach((element, index) => {
    element.innerHTML = ''

    if(index === 0) {
      picsNature.forEach(e => {
        nature.appendChild(e)
        e.classList.remove('modal-img')

      
      })
    } 

    if(index === 1) {
      picsCity.forEach(e => {
        city.appendChild(e)
        e.classList.remove('modal-img')
      })
    }
  }) 
})


nextBtn.addEventListener('click', (item) => {

  let next = 0

  picsNature.forEach((e, index) => {
        
    if(e.classList.contains('selected') && e.src === mainImg.src) {
      next = index
      e.classList.remove('selected')
      
      next === picsNature.length-1 ? next = 0 : next++ 

      mainImg.src = picsNature[next].src
      imgName.innerHTML = picsNature[next].title
      
    }
    
  })
  
  picsNature[next].classList.add('selected')


  picsCity.forEach((e, index) => {
    
    if(e.classList.contains('selected') && e.src === mainImg.src) {
      next = index
      e.classList.remove('selected')
      
      next === picsCity.length-1 ? next = 0 : next++ 

      mainImg.src = picsCity[next].src
      imgName.innerHTML = picsCity[next].title
      
    }
    
  })
  
  picsCity[next].classList.add('selected')
    
  
})



prevBtn.addEventListener('click', (item) => {

  let prev = 0

  picsNature.forEach((e, index) => {
        
    if(e.classList.contains('selected') && e.src === mainImg.src) {
      prev = index
      e.classList.remove('selected')
      
      prev === 0 ? prev = picsNature.length-1 : prev-- 

      mainImg.src = picsNature[prev].src
      imgName.innerHTML = picsNature[prev].title
      
    }
    
  })
  
  picsNature[prev].classList.add('selected')


  picsCity.forEach((e, index) => {
    
    if(e.classList.contains('selected') && e.src === mainImg.src) {
      prev = index
      e.classList.remove('selected')
      
      prev === 0 ? prev = picsCity.length-1 : prev-- 

      mainImg.src = picsCity[prev].src
      imgName.innerHTML = picsCity[prev].title
      
    }
    
  })
  
  picsCity[prev].classList.add('selected')
    
  
})