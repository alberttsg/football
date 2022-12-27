import { userModel } from './users.model.js'

async function insert({ name, email, birthDate, country, password }){
  const user = await userModel.create({ name, email, birthDate, country, registerDate: new Date(), password });
    return user;
}

async function getAllEmailsRepository({ email }){
  const user = await userModel.findOne({ email })
  return user
}

async function loginRepository({ email }){
  const user = await userModel.findOne({ email })
  return user
}

export { insert, getAllEmailsRepository, loginRepository }