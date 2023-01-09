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
    })
  }

export { getCharacters, getCharactersByID }