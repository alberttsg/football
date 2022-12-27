
async function register(inputName, email, birthDate, country, password){

  const response = await fetch(`http://localhost:3000/users/register`,
  {
    method : 'POST',
    headers : {
      'Content-Type' : 'application/json'
    },
    body : JSON.stringify({
      name: inputName.value,
      email : email.value,
      birthDate,
      country: country.value,
      password: password.value
    })
  });

  return response
}

async function emailValidation(){

  const response = await fetch(`http://localhost:3000/users/getAllEmails`,
  {
    method : 'POST',
    headers : {
      'Content-Type' : 'application/json',
      'email':email.value,
      'password':password.value
    }
  });

  return response

}

async function login(email, password){


  const response = await fetch(`http://localhost:3000/users/login`,
  {
    method : 'POST',
    headers : {
      'Content-Type' : 'application/json'
    },
    body : JSON.stringify({
      email: email.value,
      password: password.value
    })
  });

  return response

}


export { register, emailValidation, login }


