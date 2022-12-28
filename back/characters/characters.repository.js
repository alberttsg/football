import { characterModel } from '../users/users.model.js'

async function insertCharacters({ name, lastName, birthDate, country, price, owner }){
    const character = await characterModel.create({ name, lastName, birthDate, country, registerDate: new Date(), price, owner });
      return character;
  }

async function getCharactersRepository({ owner }){
  const characters = await characterModel.find({ owner })
  return characters
}

export { insertCharacters, getCharactersRepository }