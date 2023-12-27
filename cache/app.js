const createBtnL = document.getElementById("createBtnL")
const createBtnS = document.getElementById('createBtnS')
const createBtnC = document.getElementById('createBtnC')
const BtnLGet = document.getElementById('BtnLGet')
const BtnSGet = document.getElementById('BtnSGet')
const BtnCGet = document.getElementById('BtnCGet')

const NameL = document.getElementById("NameL")
const LastNameL = document.getElementById("LastnameL")
const NameS = document.getElementById('NameS')
const LastNameS = document.getElementById('LastnameS')
const NameC = document.getElementById('NameC')
const LastNameC = document.getElementById('LastnameC')
const NameLGet = document.getElementById('NameLGet')
const LastNameLGet = document.getElementById('LastnameLGet')
const NameSGet = document.getElementById('NameSGet')
const LastNameSGet = document.getElementById('LastnameSGet')
const NameCGet = document.getElementById('NameCGet')
const LastNameCGet = document.getElementById('LastnameCGet')

//LOCAL STORAGE

createBtnL.addEventListener("click", () => {

    localStorage.setItem('Name', NameL.value)
    localStorage.setItem('Last name',LastNameL.value)
})


BtnLGet.addEventListener("click", (e) => {
    e.preventDefault()

    NameLGet.value = localStorage.getItem('Name')
    
    LastNameLGet.value = localStorage.getItem('Last name')
})


//SESSION STORAGE
createBtnS.addEventListener("click", () => {

    sessionStorage.setItem('Name', NameS.value)
    sessionStorage.setItem('Last name',LastNameS.value)
})


BtnSGet.addEventListener("click", (e) => {
    e.preventDefault()

    NameSGet.value = sessionStorage.getItem('Name')
    
    LastNameSGet.value = sessionStorage.getItem('Last name')
})


//COOKIES STORAGE

createBtnC.addEventListener("click", (e) => {
    e.preventDefault()
    document.cookie = `Name=${NameC.value}`
    document.cookie = `Last name=${LastNameC.value}`
    console.log(document.cookie)
})


BtnCGet.addEventListener("click", (e) => {
    e.preventDefault()

     
    cArray = decodeURIComponent(document.cookie).split('; ')
    
    
    cArray.forEach((element)=> {
        if(element.indexOf('Name') == 0) {
            NameCGet.value = element.substring(5)
        }

        if(element.indexOf('Last') == 0) {
            LastNameCGet.value = element.substring(10)
        }

        
        
        
    })
    
    
})




