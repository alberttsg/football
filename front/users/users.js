import { getCharacters } from './functions.js'


const token = sessionStorage.getItem('token')
const userName = sessionStorage.getItem('userName')
console.log(token)
console.log(userName)

const div = document.getElementById('div')

const divName = document.createElement('div')
divName.id = 'divName'
divName.innerText = 'Name'
div.appendChild(divName)

const divLastName = document.createElement('div')
divLastName.innerText = 'Last name'
divLastName.id = 'divLastName'
div.appendChild(divLastName)

const divCountry = document.createElement('div')
divCountry.innerText = 'Country'
divCountry.id = 'divCountry'
div.appendChild(divCountry)

const divBirthday = document.createElement('div')
divBirthday.innerText = 'Born date'
divBirthday.id = 'divBirthday'
div.appendChild(divBirthday)

const divPrice = document.createElement('div')
divPrice.innerText = 'Price'
divPrice.id = 'divPrice'
div.appendChild(divPrice)

const divBuy = document.createElement('div')
divBuy.id = 'divBuy'
div.appendChild(divBuy)

const divUserName = document.createElement('div')
divUserName.id = 'divUserName'
divUserName.innerText = `Hola:${userName}`
div.appendChild(divUserName)




await getCharacters()

