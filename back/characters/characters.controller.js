import {registerCharactersBll, getCharactersBll } from './characters.bll.js'

async function registerCharacters(req, res){
  let character

  const { name, lastName, birthDate, country, registerDate, price, owner } = req.body

  if(!name || !lastName || !birthDate || !country || !price || !owner ){
    res.send('Campo vacio');
      return
    }

    try{
      character = await registerCharactersBll({name, lastName, birthDate, country, registerDate, price, owner })

    } catch(e){
      res.send(e.message)
      return
    }
      res.send({ character })
    }

async function getCharacters(req, res){
  let characters

  const { owner } = req.headers

  if(!owner){
    res.send('Campo vacio');
      return
    }

  try{
    characters = await getCharactersBll({ owner })

  } catch(e){
    res.send(e.message)
    return
  }
    res.send({ characters })

}

export { registerCharacters, getCharacters }