const createBtnL = document.getElementById("createBtnL")
const createBtnS = document.getElementById('createBtnS')
const createBtnC = document.getElementById('createBtnC')
const BtnLGet = document.getElementById('BtnLGet')
const BtnSGet = document.getElementById('BtnSGet')
const BtnCGet = document.getElementById('BtnCGet')

const NameL = document.getElementById("NameL")
const LastNameL = document.getElementById("LastnameL")
const NameS = document.getElementById('NameS')
const LastNameS = document.getElementById('LastNameS')
const NameC = document.getElementById('NameC')
const LastNameC = document.getElementById('LastNameC')
const NameLGet = document.getElementById('NameLGet')
const LastNameLGet = document.getElementById('LastNameLGet')
const NameSGet = document.getElementById('NameSGet')
const LastNameSGet = document.getElementById('LastNameSGet')
const NameCGet = document.getElementById('NameCGet')
const LastNameCGet = document.getElementById('LastNameCGet')

createBtnL.addEventListener("click", () => {
    createLocalStorage(NameL.value, LastNameL.value)
})


function createLocalStorage(name, lastName) {
    
    localStorage.setItem('Name',name)
    localStorage.setItem('Last name',lastName)
}
