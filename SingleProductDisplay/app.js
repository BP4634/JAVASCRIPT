const productsContainer = document.querySelector('.products-container')

let products = ''

const fetchProducts = async () => { 
    let data = ''
    
    try {

        const result = await fetch('https://course-api.com/javascript-store-products')
        data = await result.json()

        productsContainer.innerHTML = `<div class="loading"></div>`
    
        
    } catch (error) {
        productsContainer.innerHTML = `<p class="error">An error has occurred</p>`
    }

    return data

}


const displayProducts = (list) => {

    let display = []

    for (const item in list) {
      const {image, name, price} = list[item].fields
      const id = list[item].id


      display.push(`
      <a href="product.html?id=${id}&name=john&age=25" class="single-product">
        <img src="${image[0].url}" alt="" class="single-product-img img">
        <footer>
          <h5 class="name">${name}</h5>
          <span class="price">$${parseFloat(price)/100}</span>
        </footer>
      </a>`)

    }
    
    let show = display.join('')
    productsContainer.innerHTML = show


}

const start = async () => {

    products = await fetchProducts()
    displayProducts(products)

}

start()


