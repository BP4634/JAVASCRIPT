const productSelected = document.querySelector('.product')

const url = 'https://course-api.com/javascript-store-single-product'


const fetchProduct = async () => { 

    const param = new URLSearchParams(window.location.search)
    const id = param.get('id')
    let data = ''
    
    try {

        const result = await fetch(`${url}?id=${id}`)
        data = await result.json()

        productSelected.innerHTML = `<div class="loading"></div>`
        
    } catch (error) {
        productSelected.innerHTML = `<p class="error">An error has occurred</p>`
    }
    
    return data

}



const displayProduct = (product) => {


    const {image, name, price, id, company, colors, description} = product.fields

    productSelected.innerHTML = `
    <div class="product-wrapper">
        <img src="${image[0].url}" alt="" class="img">

        <div class="product-info">
            <h3>${name}</h3> 
            <h5>${company}</h5>
            <span>${price/100}</span>
            <div class="colors">
                <span class="product-color">
                
                </span>
            </div>
            <p>${description}</p>
            <button class="btn">add to cart</button>
        </div>
    </div>`


    const productColor = document.querySelector('.colors')
    const color = colors.map((col) => {
        return (`<span style="background: ${col}" class="product-color">
                
        </span>`)
    }).join('')

    productColor.innerHTML = color


}


const start = async () => {
    const res = await fetchProduct()
    displayProduct(res)
}

start()