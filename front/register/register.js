import { register, emailValidation } from '../fetch/fetch.js'

const inputName = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')

const day = document.getElementById('day')
const month = document.getElementById('month')
const year = document.getElementById('year')

const country = document.getElementById('country')

const check = document.getElementById('check')

const submit = document.getElementById('submit')


submit.addEventListener('click', async ()=>{
  let response

  const birthDate = `${day.value}/${month.value}/${year.value}`

  response = await register(inputName, email, birthDate, country, password)

  console.log(response)
  const data = await response.json();
  console.log(data)

  if(data){
    sessionStorage.setItem('token', data.token);
    window.location = '../users/users.html'
  }
})


// email.addEventListener('blur', async ()=>{
//     let response

//     response = await emailValidation()
//     const data = await response.json()

//     if(email.value == data.email){
//       submit.disabled = false
//     }


//})