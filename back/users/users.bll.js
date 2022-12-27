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

async function registerBll({ name, email, birthDate, country, password}){
    let user

    const hashedPassword = hashSync(password, 10);

    user = await insert({ name, email, birthDate, country, password : hashedPassword })

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

  try{
    user = await loginRepository({ email })

    const isSamePassword = await compare(password, user.password);

    if(!isSamePassword){
      throw new Error('Wrong credentials')
    }

    token = getToken({ user })

  }catch(e){
    return e.message
  }

  return token


}

export { registerBll, loginBll, getAllEmailsBll }