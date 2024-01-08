// console.log(articles)  

// date1 = moment(articles[0].date).format( 'MMMM Do, YYYY' )

// document.querySelector('html').classList.add('dark-theme')

// console.log(date1)

// date1 = moment(articles[0].date).format( 'MMMM Do, YYYY' )



toggleBtn = document.querySelector('.btn')

const section = document.querySelector('.articles')

toggleBtn.addEventListener('click', () => {
    
    document.querySelector('html').classList.toggle('dark-theme')
})

const elements = articles.map((el) => {
    
    let tempElement = document.createElement('article')
    tempElement.classList.add('post')

    let tempTitle = document.createElement('h2')
    tempTitle.innerHTML = el.title

    let tempInfo = document.createElement('div')
    tempInfo.classList.add('post-info')

    let tempDate = document.createElement('span')
    tempDate.innerHTML = moment(el.date).format('MMMM Do, YYYY')

    let tempTime = document.createElement('span')
    tempTime.innerHTML = `${el.length} min read`

    let tempContent = document.createElement('p')
    tempContent.innerHTML = el.snippet

    tempInfo.appendChild(tempDate)
    tempInfo.appendChild(tempTime)

    tempElement.appendChild(tempTitle)  
    tempElement.appendChild(tempInfo)  
    tempElement.appendChild(tempContent)  

    return tempElement
})

elements.forEach(el => {
    section.appendChild(el)
})