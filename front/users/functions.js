import { characters, charactersById, upddateBuyCharacter, upddateSellCharacter } from '../fetch/fetch.js'

const userId = sessionStorage.getItem('userId')
let userCoin = sessionStorage.getItem('userCoin')
userCoin = +userCoin

const body = document.getElementById('body')

async function getCharacters(){

    const response = await characters()

    const data = await response.json();
    console.log(data.characters)

    const arrayIds = data.characters.map((element)=>element._id)

    let y = 0
    data.characters.map((element)=>{
      y++

      const target = document.createElement('div')
      const img = document.createElement('img')
      const name = document.createElement('div')
      const price = document.createElement('div')

      target.setAttribute('class', 'target')
      target.id = `${y}`
      img.id = 'img'
      img.src = element.img
      name.id = 'name'
      price.id = 'price'

      name.innerText = element.name
      price.innerText = element.price

      target.appendChild(img)
      target.appendChild(name)
      target.appendChild(price)
      div.appendChild(target)

      target.addEventListener('mouseover',()=>{
        target.classList.add('background')
      })

      target.addEventListener('mouseout',()=>{
        target.classList.remove('background')
      })


      target.addEventListener('click',()=>{

        if(userCoin<element.price){
          const divNoMoney = document.createElement('div')
          divNoMoney.id = 'divNoMoney'
          divNoMoney.textContent = 'No tienes dinero'
          body.appendChild(divNoMoney)
          setTimeout(() => {
            body.removeChild(divNoMoney)
          }, 3000);
            return
          }

        console.log(target.id)
        console.log(arrayIds[target.id-1])
        console.log(userCoin)
        upddateBuyCharacter(arrayIds[target.id-1], userId, element.price, userCoin)
        sessionStorage.setItem('userCoin', userCoin-element.price);
        location.reload()
      })





      // const simpsonName = document.createElement('div')
      // simpsonName.id = 'simpsonName'
      // simpsonName.innerText = element.name
      // divName.appendChild(simpsonName)

      // const simpsonLastName = document.createElement('div')
      // simpsonLastName.id = 'simpsonLastName'
      // simpsonLastName.innerText = element.lastName
      // divLastName.appendChild(simpsonLastName)

      // const simpsonCountry = document.createElement('div')
      // simpsonCountry.id = 'simpsonCountry'
      // simpsonCountry.innerText = element.country
      // divCountry.appendChild(simpsonCountry)

      // const simpsonBirthDate = document.createElement('div')
      // simpsonBirthDate.id = 'simpsonBirthDate'
      // simpsonBirthDate.innerText = element.birthDate
      // divBirthday.appendChild(simpsonBirthDate)

      // const simpsonPrice = document.createElement('div')
      // simpsonPrice.id = 'simpsonPrice'
      // simpsonPrice.innerText = element.price
      // divPrice.appendChild(simpsonPrice)

      // const btnBuy = document.createElement('div')
      // btnBuy.setAttribute('class', 'btnBuy')
      // btnBuy.id = `${y}`
      // btnBuy.innerHTML = '&#36'
      // divBuy.appendChild(btnBuy)

      // btnBuy.addEventListener('click', async ()=>{
      //   console.log(btnBuy.id)
      //   console.log(arrayIds[btnBuy.id-1])

      //   if(userCoin<element.price){
      //     const divNoMoney = document.createElement('div')
      //     divNoMoney.id = 'divNoMoney'
      //     divNoMoney.textContent = 'No tienes dinero'
      //     body.appendChild(divNoMoney)
      //     setTimeout(() => {
      //       body.removeChild(divNoMoney)
      //     }, 3000);
      //     return
      //   }

      //   const response = await upddateBuyCharacter(arrayIds[btnBuy.id-1], userId, element.price, userCoin)
      //  const data = await response.json()
      //  console.log(data)

      //   sessionStorage.setItem('userCoin', userCoin-element.price);
      //   location.reload()
      // })
    })
  }

  async function getCharactersByID(id){

    const response = await charactersById(id)

    const data = await response.json();

    const arrayCharacters = data.characters.map((element)=>element._id)

    let t = 0
    data.characters.map((element)=>{
      t++


      const targetId = document.createElement('div')
      const imgId = document.createElement('img')
      const nameId = document.createElement('div')
      const priceId = document.createElement('div')

      targetId.setAttribute('class', 'target')
      targetId.id = `${t}`
      imgId.id = 'img'
      imgId.src = element.img
      nameId.id = 'name'
      priceId.id = 'price'

      nameId.innerText = element.name
      priceId.innerText = element.price

      targetId.appendChild(imgId)
      targetId.appendChild(nameId)
      targetId.appendChild(priceId)
      ownCharacters.appendChild(targetId)

      targetId.addEventListener('mouseover',()=>{
        targetId.classList.add('background')
      })

      targetId.addEventListener('mouseout',()=>{
        targetId.classList.remove('background')
      })


      targetId.addEventListener('click',()=>{
        console.log(targetId.id)
        console.log(arrayCharacters[targetId.id-1])
        console.log(element.price)
        console.log(userCoin)
        sessionStorage.setItem('userCoin', userCoin+element.price);
        upddateSellCharacter(arrayCharacters[targetId.id-1], userId, element.price, userCoin)
        location.reload()
      })


      // const charactersUserName = document.createElement('div')
      // charactersUserName.id = 'charactersUserName'
      // charactersUserName.innerText = element.name
      // divCharactersUserName.appendChild(charactersUserName)

      // const charactersUserLastName = document.createElement('div')
      // charactersUserLastName.id = 'charactersUserLastName'
      // charactersUserLastName.innerText = element.lastName
      // divCharactersUserLastName.appendChild(charactersUserLastName)

      // const charactersUserCountry = document.createElement('div')
      // charactersUserCountry.id = 'charactersUserCountry'
      // charactersUserCountry.innerText = element.country
      // divCharactersUserCountry.appendChild(charactersUserCountry)

      // const charactersUserBirthday = document.createElement('div')
      // charactersUserBirthday.id = 'charactersUserBirthday'
      // charactersUserBirthday.innerText = element.birthDate
      // divCharactersUserBirthday.appendChild(charactersUserBirthday)

      // const charactersUserPrice = document.createElement('div')
      // charactersUserPrice.id = 'charactersUserPrice'
      // charactersUserPrice.innerText = element.price
      // divCharactersUserPrice.appendChild(charactersUserPrice)

      // const btnSell = document.createElement('div')
      // btnSell.setAttribute('class', 'btnSell')
      // btnSell.id = `${t}`
      // btnSell.innerHTML = 'Sell'
      // divSell.appendChild(btnSell)

      // btnSell.addEventListener('click', async ()=>{
      //   console.log(btnSell.id)
      //   console.log(arrayCharacters[btnSell.id-1])

      //   const response = await upddateSellCharacter(arrayCharacters[btnSell.id-1], userId, element.price, userCoin)

      //   sessionStorage.setItem('userCoin', userCoin+element.price);
      //   const data = await response.json()
      //   location.reload()

      // })

      
    })
  }



export { getCharacters, getCharactersByID }