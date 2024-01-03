const counters = document.querySelectorAll('.container')

let firstValue = counters[0].querySelector('.value').innerHTML
let secondValue = counters[1].querySelector('.value').innerHTML

firstValue = 100
secondValue = 200

counters[0].querySelector('.value').innerHTML = firstValue
counters[1].querySelector('.value').innerHTML = secondValue


const increaseBtns = document.querySelectorAll('.increase')
const decreaseBtns = document.querySelectorAll('.decrease')
const resetBtns = document.querySelectorAll('.reset')

increaseBtns.forEach((btn, index)=>{
    btn.addEventListener('click', ()=>{
    
        return increase(counters[index])
    })
})


decreaseBtns.forEach((btn, index)=>{
    btn.addEventListener('click', ()=>{
    
        return decrease(counters[index])
    })
})

resetBtns.forEach((btn, index)=>{
    btn.addEventListener('click', ()=>{
    
        let value = 0

        if(index === 0) {
            value = firstValue
            counters[index].querySelector('.value').innerHTML = value
        }

        if(index === 1) {
            value = secondValue
            counters[index].querySelector('.value').innerHTML = value
        }

    })
})



const increase = (counter) => {
    let value = parseInt(counter.querySelector('.value').innerHTML)
    value += 1
    counter.querySelector('.value').innerHTML = value
}

const decrease = (counter) => {
    let value = parseInt(counter.querySelector('.value').innerHTML)
    value -= 1
    counter.querySelector('.value').innerHTML = value
}
