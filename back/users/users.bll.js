import { hashSync, compare } from 'bcrypt';
import jwt from 'jsonwebtoken'
import { insert, getAllEmailsRepository, loginRepository } from './users.repository.js'

function getToken({ user }){

    const payload = {
        id:user._id,
        name:user.name
      }
      const token = jwt.sign(payload, '123')

      if(!token){
        throw new Error('wrong token')
      }
      return token
  }

async function registerBll({ name, email, birthDate, country, password, money, rol}){
    let user

    const hashedPassword = hashSync(password, 10);

    user = await insert({ name, email, birthDate, country, password : hashedPassword, money, rol })

    let token =  getToken({ user })

    try{
      token =  getToken({ user })

    } catch(e){
      return e.message
    }

    return token

}

async function getAllEmailsBll({ email }){

  try{
    const userEmail = await getAllEmailsRepository({ email })
  }catch(e){
    return e
  }

  return userEmail
}

async function loginBll({ email, password }){
  let user
  let token

    user = await loginRepository({ email })
    if(!user){
      throw new Error('wrong credentials')
    }

    const isSamePassword = await compare(password, user.password);
    if(!isSamePassword){
      console.log(232323232323)
      throw new Error('Wrong credentials')
    }

    token = getToken({ user })
    if(!token){
      throw new Error('Wrong token')
  }
    const userName = user.name
    const userCoin = user.money
    const userAdmin = user.rol
    const userId = user._id
    return {token, userName, userCoin, userAdmin, userId}





}

export { registerBll, loginBll, getAllEmailsBll }