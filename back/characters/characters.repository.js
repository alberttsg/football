import { characterModel } from '../users/users.model.js'
import { userModel } from '../users/users.model.js'

async function insertCharacters({ name, lastName, birthDate, country, price, owner }){
    const character = await characterModel.create({ name, lastName, birthDate, country, registerDate: new Date(), price, owner });
      return character;
  }

async function getCharactersRepository({ owner }){
  const characters = await characterModel.find({ owner })
  return characters
}

async function getCharactersByIdRepository({ id }){
  const characters = await characterModel.find({ owner:id })
  return characters
}

async function buyCharacterRepository({ characterId, userId  }){
  const character = await characterModel.findOneAndUpdate({ _id:characterId }, {owner:userId }, {rawResult: true})
  return character
}

async function buyCharacterRepositoryUser({ userId, newMoney}){
  const user = await userModel.findOneAndUpdate({ _id:userId },{ money:newMoney}, {rawResult: true})
  return user
}

async function sellCharacterRepository({characterId, owner }){
  const character = await characterModel.findOneAndUpdate({ _id:characterId },{ owner:owner }, {rawResult: true})
  return character
}

async function sellCharacterRepositoryUser({ userId, newMoney}){
  const user = await userModel.findOneAndUpdate({ _id:userId },{ money:newMoney}, {rawResult: true})
  return user
}



export { insertCharacters, getCharactersRepository, getCharactersByIdRepository, buyCharacterRepository, buyCharacterRepositoryUser, sellCharacterRepository, sellCharacterRepositoryUser }

