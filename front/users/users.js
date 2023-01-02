import { getCharacters } from './functions.js'


const token = sessionStorage.getItem('token')
const userName = sessionStorage.getItem('userName')
const userCoin = sessionStorage.getItem('userCoin')
const userAdmin = sessionStorage.getItem('userAdmin')
const userId = sessionStorage.getItem('userId')
console.log(token)
console.log(userName)
console.log(userCoin)
console.log(userAdmin)
console.log(userId)

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

const divUserCoin = document.createElement('div')
divUserCoin.id = 'divUserCoin'
divUserCoin.innerText = `Tienes:${userCoin}€`
div.appendChild(divUserCoin)

if(userAdmin === 'superAdmin'){
  const divSuperAdmin = document.createElement('div')
  divSuperAdmin.id = 'divSuperAdmin'
  divSuperAdmin.innerText = `Admin`
  div.appendChild(divSuperAdmin)
}


await getCharacters()

