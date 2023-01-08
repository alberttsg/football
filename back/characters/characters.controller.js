import {registerCharactersBll, getCharactersBll, buyCharacterBll, getCharactersByIdBll, sellCharacterBll } from './characters.bll.js'
import path from 'path'

async function registerCharacters(req, res){
  let character

  const { name, lastName, birthDate, country, registerDate, price, owner } = req.body

  if(!name || !lastName || !birthDate || !country || !price || !owner ){
    res.send('Campo vacio');
      return
    }
    const ext = path.extname(req.file.filename)
    const img = `/back/public/data/uploads/${name}${ext}`

    try{
      character = await registerCharactersBll({name, lastName, birthDate, country, registerDate, price, owner, img })

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

async function getCharactersById(req, res){
  let characters

  const { id } = req.headers

  if(!id){
    res.send('Campo vacio');
      return
    }

  try{
    characters = await getCharactersByIdBll({ id })

  } catch(e){
    res.send(e.message)
    return
  }
    res.send({ characters })

}

async function buyCharacter(req, res){
  let characterUser

  const { characterId, userId, price, money } = req.body

    if(!characterId || !userId || !price || !money ){
    res.send('Campo vacio');
      return
    }

    if(money<price){
      res.send({msg:'No tienes dinero'})
      return
    }

  try{
    characterUser = await buyCharacterBll({ characterId, userId, price, money })

  } catch(e){
    res.send(e.message)
    return
  }
    res.send({ characterUser })
}

async function sellCharacter(req, res){
  let characterUser

  const { characterId, userId, price, money } = req.body

  if(!characterId || !userId || !price || !money ){
    res.send('Campo vacio');
      return
    }

  try{
    characterUser = await sellCharacterBll({ characterId, userId, price, money })

  } catch(e){
    res.send(e.message)
    return
  }
    res.send({ characterUser })


}


export { registerCharacters, getCharacters, getCharactersById, buyCharacter, sellCharacter }