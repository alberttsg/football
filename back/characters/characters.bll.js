import { insertCharacters, getCharactersRepository, getCharactersByIdRepository, buyCharacterRepository, buyCharacterRepositoryUser, sellCharacterRepository, sellCharacterRepositoryUser } from './characters.repository.js'

async function registerCharactersBll({ name, lastName, birthDate, country, registerDate, price, owner  }){
  let character

  try{
    character = await insertCharacters({ name, lastName, birthDate, country, registerDate, price, owner  })

  } catch(e){
    return e.message
  }

  return character

}

async function getCharactersBll({ owner }){
  let characters

  try{
    characters = await getCharactersRepository({ owner })

  } catch(e){
    return e.message
  }

  return characters
}

async function getCharactersByIdBll({ id }){
  let characters

  try{
    characters = await getCharactersByIdRepository({ id })

  } catch(e){
    return e.message
  }

  return characters
}

async function buyCharacterBll({ characterId, userId, price, money }){
  let character
  let user
  let newMoney = money - price

  try{
    character = await buyCharacterRepository({characterId, userId })
    user = await buyCharacterRepositoryUser({userId, newMoney})

  } catch(e){
    throw new Error(e.message)
  }
  return {character, user}
}

async function sellCharacterBll({characterId, userId, price, money }){
  let character
  let user
  let newMoney = money + price
  let owner = "x"

  try{
    character = await sellCharacterRepository({ characterId, owner })
    user = await sellCharacterRepositoryUser({ userId, newMoney})

  } catch(e){
    throw new Error(e.message)
  }
  return {character, user}

}

export { registerCharactersBll, getCharactersBll, getCharactersByIdBll, buyCharacterBll, sellCharacterBll }