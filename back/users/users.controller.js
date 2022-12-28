import { registerBll, loginBll, getAllEmailsBll } from './users.bll.js'

async function registerUser(req, res){
  let token
  const money = 500000
  const rol = 'admin'


  const { name, email, birthDate, country, password } = req.body

  if(!name || !email || !birthDate || !country || !password){
    res.send('Campo vacio');
    return
  }
  try{
    token = await registerBll({ name, email, birthDate, country, password, money, rol });


  } catch(e){
    res.send(e.message)
    return
  }
  res.send({ token })
}

async function getAllEmails(req, res){

  const { email } = req.headers

  try{
    const userEmail = await getAllEmailsBll({ email })

  }catch(e){
    res.send(e.message)
    return
  }
    res.send(userEmail)

}

async function login(req, res){
  let data


  const { email, password } = req.body

  if(!email || !password){
    res.send({msg:'Campo vacio'});
    return
  }

  try{
    data = await loginBll({ email, password })

  }catch(e){
    res.send({msg:e.message})
    return
  }

  res.json({data})
}

export { registerUser, getAllEmails, login }