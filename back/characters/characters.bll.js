import { insertCharacters } from './characters.repository.js'

async function registerCharactersBll({ name, lastName, birthDate, country, registerDate, price, owner  }){
  let character

  try{
    character = await insertCharacters({ name, lastName, birthDate, country, registerDate, price, owner  })

  } catch(e){
    return e.message
  }

  return character

}

export { registerCharactersBll }