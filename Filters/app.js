const products = [
    {
      id: 'rec43w3ipXvP28vog',
      title: 'high-back bench',
      company: 'ikea',
      image: 'https://course-api.com/images/store/product-1.jpeg',
      price: 9.99,
    },
    {
      id: 'rec4f2RIftFCb7aHh',
      title: 'albany table',
      company: 'marcos',
      image: 'https://course-api.com/images/store/product-2.jpeg',
      price: 79.99,
    },
    {
      id: 'rec8kkCmSiMkbkiko',
      title: 'accent chair',
      company: 'caressa',
      image: 'https://course-api.com/images/store/product-3.jpeg',
      price: 25.99,
    },
    {
      id: 'recBohCqQsot4Q4II',
      title: 'wooden table',
      company: 'caressa',
      image: 'https://course-api.com/images/store/product-4.jpeg',
  
      price: 45.99,
    },
    {
      id: 'recDG1JRZnbpRHpoy',
      title: 'dining table',
      company: 'caressa',
      image: 'https://course-api.com/images/store/product-5.jpeg',
  
      price: 6.99,
    },
    {
      id: 'recNWGyP7kjFhSqw3',
      title: 'sofa set',
      company: 'liddy',
      image: 'https://course-api.com/images/store/product-6.jpeg',
      price: 69.99,
    },
    {
      id: 'recZEougL5bbY4AEx',
      title: 'modern bookshelf',
      company: 'marcos',
      image: 'https://course-api.com/images/store/product-7.jpeg',
      price: 8.99,
    },
    {
      id: 'recjMK1jgTb2ld7sv',
      title: 'emperor bed',
      company: 'liddy',
      image: 'https://course-api.com/images/store/product-8.jpeg',
      price: 21.99,
    },
    {
      id: 'recmg2a1ctaEJNZhu',
      title: 'utopia sofa',
      company: 'marcos',
      image: 'https://course-api.com/images/store/product-9.jpeg',
      price: 39.95,
    },
    {
      id: 'recvKMNR3YFw0bEt3',
      title: 'entertainment center',
      company: 'liddy',
      image: 'https://course-api.com/images/store/product-10.jpeg',
      price: 29.98,
    },
    {
      id: 'recxaXFy5IW539sgM',
      title: 'albany sectional',
      company: 'ikea',
      image: 'https://course-api.com/images/store/product-11.jpeg',
      price: 10.99,
    },
    {
      id: 'recyqtRglGNGtO4Q5',
      title: 'leather sofa',
      company: 'liddy',
      image: 'https://course-api.com/images/store/product-12.jpeg',
      price: 9.99,
    },
  ];
  


let productsCopy = products

const form = document.querySelector('.input-form')

const searchInput = document.querySelector('.search-input')

const productContainer = document.querySelector('.products-container')
const btnContainer = document.querySelector('.companies')






const displayFilters = (list) => {
  let unique = new Set()
    
  list.forEach(el => {
    const {id, title, company, image, price} = el

    unique.add(company)  
  })

  unique.forEach(el => {
    btnContainer.innerHTML +=`<button class="company-btn">${el}</button>`
  })
      
}



const displayProducts = (list) => {
    let result = list.map(el => {
        const {id, title, company, image, price} = el

        return (
        `<article class="product">
        <img src=${image} alt="picture" class="product-img img">
        <footer>
          <h5 class="product-name">${title}</h5>
          <span class="product-price">${price}</span>
        </footer>
      </article>`
      )

    }).join('')

    if(list.length < 1) {
        result = `<h1 class="product-name">ITEM NOT FOUND</h1>`
    }
    productContainer.innerHTML = result
}




displayProducts(productsCopy)

displayFilters(productsCopy)

const btnFilters = document.querySelectorAll('.company-btn')
console.log(btnFilters)


form.addEventListener('keyup', () => {
  const inputValue = searchInput.value

    let filteredProducts = productsCopy.filter((product) => {
        return product.title.toLowerCase().includes(inputValue)
    })

    displayProducts(filteredProducts)
})

btnFilters.forEach(btn => {
  btn.addEventListener('click', (e) => {

    let filteredProducts = productsCopy.filter((product) => {
      return product.company.includes(e.currentTarget.textContent)
    })

    if(e.currentTarget.textContent === 'All') {
      filteredProducts = productsCopy
    }
    searchInput.value = '';
    displayProducts(filteredProducts)

  })
})


