import { login } from '../fetch/fetch.js'

const register = document.getElementById('register')

const email = document.getElementById('name')
const password = document.getElementById('password')
const submit = document.getElementById('submit')

register.addEventListener('click', ()=>{
  window.location = '../register/register.html'
})

submit.addEventListener('click', async ()=>{
  let response

  response = await login(email, password)

  const data = await response.json();
  console.log(data)
  console.log(data.data.token)
  console.log(data.data.userId)


  if(data.data.token){
    console.log('entro', 989898989)
    sessionStorage.setItem('token', data.data.token);
    sessionStorage.setItem('userName', data.data.userName);
    sessionStorage.setItem('userCoin', data.data.userCoin);
    sessionStorage.setItem('userAdmin', data.data.userAdmin);
    sessionStorage.setItem('userId', data.data.userId);
    window.location = '../users/users.html'
  }

})