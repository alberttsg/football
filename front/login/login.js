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
  console.log(data.token)

  if(data.token){
    sessionStorage.setItem('token', data.token);
    window.location = '../users/users.html'
  }

})