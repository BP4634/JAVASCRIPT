function getElement(selection) {
    const element = document.querySelector(selection);
    if (element) {
      return element;
    }
    throw new Error(
      `Please check "${selection}" selector, no such element exists`
    );
}

class Modal {
    constructor(element) {

        this.modal = getElement('.modal') 
        this.sections = document.querySelectorAll('.section')
        this.mainImg = getElement('.main-img')
        this.imgName = getElement('.image-name')
        this.picsElement = element.querySelectorAll('.img')
        this.modalImg = this.modal.querySelector('.modal-images')
        this.closeBtn = this.modal.querySelector('.close-btn')
        this.prevBtn = this.modal.querySelector('.prev-btn')
        this.nextBtn = this.modal.querySelector('.next-btn')
        this.select = this.select.bind(this)

        this.picsElement.forEach((el) => {
            el.addEventListener('click', () => {
          
              return this.select(this.picsElement, el)
          
            })
          
        });
        
        this.closeBtn.addEventListener('click',() => {
            this.modal.classList.remove('open')
          
            element.innerHTML = ''
             
            this.picsElement.forEach(e => {
                element.appendChild(e)
                e.classList.remove('modal-img')
                
                
            })
            
            
        })


        this.nextBtn.addEventListener('click', () => {
        
          let next = 0
        
          this.picsElement.forEach((e, index) => {
                
            if(e.classList.contains('selected') && e.src === this.mainImg.src) {
              next = index
              e.classList.remove('selected')
              
              next === this.picsElement.length-1 ? next = 0 : next++ 
        
              this.mainImg.src = this.picsElement[next].src
              this.imgName.innerHTML = this.picsElement[next].title
              
            }
            
          })
          
          this.picsElement[next].classList.add('selected')
            
          
        })
        
        
        
        this.prevBtn.addEventListener('click', () => {
        
          let prev = 0
        
          this.picsElement.forEach((e, index) => {
                
            if(e.classList.contains('selected') && e.src === this.mainImg.src) {
                prev = index
              e.classList.remove('selected')
              
              prev === 0 ? prev = this.picsElement.length-1 : prev-- 
        
              this.mainImg.src = this.picsElement[prev].src
              this.imgName.innerHTML = this.picsElement[prev].title
              
            }
            
          })
          
          this.picsElement[prev].classList.add('selected')
            
          
        })



    }
        

    select(arr, element) {
    
        this.mainImg.src = element.src
        
        this.imgName.innerHTML = element.title
        this.modalImg.innerHTML = ''
        arr.forEach(e => {
          e.classList.add('modal-img')
          this.modalImg.appendChild(e)
          if(e === element) {
            arr.forEach(e => e.classList.remove('selected'))
            e.classList.add('selected')
          }
          
        })
    
        this.modal.classList.add('open')
    
    }








}
  
const nature = getElement('.nature')
const city = getElement('.city')

const countrySide = new Modal(nature)
const urban = new Modal(city)  
  
  
  
  