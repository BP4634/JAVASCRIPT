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
const prevBtn = modal.querySelector('.prev-btn')
const nextBtn = modal.querySelector('.next-btn')

picsNature.forEach((element,index) => {
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


    nextBtn.addEventListener('click', () => {
  
      index === picsNature.length-1 ? index = 0 : index++
      
        mainImg.src = picsNature[index].src
        imgName.innerHTML = picsNature[index].title
    
        modalImg.innerHTML = ''
        picsNature.forEach(e => {
          e.classList.add('modal-img')
          modalImg.appendChild(e)
          if(e === picsNature[index]) {
            picsNature.forEach(element => element.classList.remove('selected'))
            e.classList.add('selected')
          }
        })
  
  
  
  
      
    })



    prevBtn.addEventListener('click', () => {
  
      index === 0 ? index = picsNature.length-1 : index--
      
        mainImg.src = picsNature[index].src
        imgName.innerHTML = picsNature[index].title
    
        modalImg.innerHTML = ''
        picsNature.forEach(e => {
          e.classList.add('modal-img')
          modalImg.appendChild(e)
          if(e === picsNature[index]) {
            picsNature.forEach(element => element.classList.remove('selected'))
            e.classList.add('selected')
          }
        })
  
  
  
  
      
    })



  })


  closeBtn.addEventListener('click',() => {
    modal.classList.remove('open')
    picsNature.forEach(e => {
      nature.appendChild(e)
      e.classList.remove('modal-img')
    })
    
  })


});


picsCity.forEach((element,index) => {
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


    nextBtn.addEventListener('click', () => {
  
      index === picsCity.length-1 ? index = 0 : index++
      
        mainImg.src = picsCity[index].src
        imgName.innerHTML = picsCity[index].title
    
        modalImg.innerHTML = ''
        picsCity.forEach(e => {
          e.classList.add('modal-img')
          modalImg.appendChild(e)
          if(e === picsCity[index]) {
            picsCity.forEach(element => element.classList.remove('selected'))
            e.classList.add('selected')
          }
        })
  
  
  
  
      
    })




    prevBtn.addEventListener('click', () => {
  
      index === 0 ? index = picsCity.length-1 : index--
      
        mainImg.src = picsCity[index].src
        imgName.innerHTML = picsCity[index].title
    
        modalImg.innerHTML = ''
        picsCity.forEach(e => {
          e.classList.add('modal-img')
          modalImg.appendChild(e)
          if(e === picsCity[index]) {
            picsCity.forEach(element => element.classList.remove('selected'))
            e.classList.add('selected')
          }
        })
  
  
  
  
      
    })


  })

  closeBtn.addEventListener('click',() => {
    modal.classList.remove('open')

    picsCity.forEach(e => {
      city.appendChild(e)
      e.classList.remove('modal-img')
    })
    
    
  })
})
