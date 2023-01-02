import { characters } from '../fetch/fetch.js'

async function getCharacters(){

    const response = await characters()

    const data = await response.json();
    console.log(data.characters)

    const arrayIds = data.characters.map((element)=>element._id)
    console.log(arrayIds)

    let y = 0
    data.characters.map((element)=>{
      y++
      const simpsonName = document.createElement('div')
      simpsonName.id = 'simpsonName'
      simpsonName.innerText = element.name
      divName.appendChild(simpsonName)

      const simpsonLastName = document.createElement('div')
      simpsonLastName.id = 'simpsonLastName'
      simpsonLastName.innerText = element.lastName
      divLastName.appendChild(simpsonLastName)

      const simpsonCountry = document.createElement('div')
      simpsonCountry.id = 'simpsonCountry'
      simpsonCountry.innerText = element.country
      divCountry.appendChild(simpsonCountry)

      const simpsonBirthDate = document.createElement('div')
      simpsonBirthDate.id = 'simpsonBirthDate'
      simpsonBirthDate.innerText = element.birthDate
      divBirthday.appendChild(simpsonBirthDate)

      const simpsonPrice = document.createElement('div')
      simpsonPrice.id = 'simpsonPrice'
      simpsonPrice.innerText = element.price
      divPrice.appendChild(simpsonPrice)

      const btnBuy = document.createElement('div')
      btnBuy.setAttribute('class', 'btnBuy')
      btnBuy.id = `${y}`
      btnBuy.innerHTML = '&#36'
      divBuy.appendChild(btnBuy)

      btnBuy.addEventListener('click', ()=>{
        console.log(btnBuy.id)
        console.log(arrayIds[btnBuy.id-1])
      })
    })
  }

export { getCharacters }