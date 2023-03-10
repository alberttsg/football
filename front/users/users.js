import { getCharacters, getCharactersByID } from './functions.js'


const token = sessionStorage.getItem('token')
const userName = sessionStorage.getItem('userName')
let userCoin = sessionStorage.getItem('userCoin')
userCoin = +userCoin

const userAdmin = sessionStorage.getItem('userAdmin')
const userId = sessionStorage.getItem('userId')
console.log(token)
console.log(userName)
console.log(userCoin)
console.log(userAdmin)
console.log(userId)

const div = document.getElementById('div')
const ownCharacters = document.getElementById('ownCharacters')

// const divName = document.createElement('div')
// divName.id = 'divName'
// divName.innerText = 'Name'
// div.appendChild(divName)

// const divCharactersUserName = document.createElement('div')
// divCharactersUserName.id = 'divCharactersUserName'
// divCharactersUserName.innerText = 'Name'
// ownCharacters.appendChild(divCharactersUserName)

// const divLastName = document.createElement('div')
// divLastName.innerText = 'Last name'
// divLastName.id = 'divLastName'
// div.appendChild(divLastName)

// const divCharactersUserLastName = document.createElement('div')
// divCharactersUserLastName.id = 'divCharactersUserLastName'
// divCharactersUserLastName.innerText = 'Last name'
// ownCharacters.appendChild(divCharactersUserLastName)

// const divCountry = document.createElement('div')
// divCountry.innerText = 'Country'
// divCountry.id = 'divCountry'
// div.appendChild(divCountry)

// const divCharactersUserCountry = document.createElement('div')
// divCharactersUserCountry.id = 'divCharactersUserCountry'
// divCharactersUserCountry.innerText = 'Country'
// ownCharacters.appendChild(divCharactersUserCountry)

// const divBirthday = document.createElement('div')
// divBirthday.innerText = 'Born date'
// divBirthday.id = 'divBirthday'
// div.appendChild(divBirthday)

// const divCharactersUserBirthday = document.createElement('div')
// divCharactersUserBirthday.id = 'divCharactersUserBirthday'
// divCharactersUserBirthday.innerText = 'Birthday'
// ownCharacters.appendChild(divCharactersUserBirthday)

// const divPrice = document.createElement('div')
// divPrice.innerText = 'Price'
// divPrice.id = 'divPrice'
// div.appendChild(divPrice)

// const divCharactersUserPrice = document.createElement('div')
// divCharactersUserPrice.innerText = 'Price'
// divCharactersUserPrice.id = 'divCharactersUserPrice'
// ownCharacters.appendChild(divCharactersUserPrice)

// const divBuy = document.createElement('div')
// divBuy.id = 'divBuy'
// div.appendChild(divBuy)

// const divSell = document.createElement('div')
// divSell.id = 'divSell'
// ownCharacters.appendChild(divSell)

const divUserName = document.createElement('div')
divUserName.id = 'divUserName'
divUserName.innerText = `Hola:${userName}`
div.appendChild(divUserName)

const divUserCoin = document.createElement('div')
divUserCoin.id = 'divUserCoin'
divUserCoin.innerText = `Tienes:${userCoin}???`
div.appendChild(divUserCoin)

if(userAdmin === 'superAdmin'){
  const divSuperAdmin = document.createElement('div')
  divSuperAdmin.id = 'divSuperAdmin'
  divSuperAdmin.innerText = `Admin`
  div.appendChild(divSuperAdmin)
}


await getCharacters()

await getCharactersByID(userId)


