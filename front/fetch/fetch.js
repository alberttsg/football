
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

async function characters(){
  const response = await fetch(`http://localhost:3000/characters/getCharacters`,
  {
    method : 'GET',
    headers : {
      'Content-Type' : 'application/json',
      'owner':'x'
    }
  });

  return response
}

async function charactersById(id){

  const response = await fetch(`http://localhost:3000/characters/getCharactersById`,
  {
    method : 'GET',
    headers : {
      'Content-Type' : 'application/json',
      'id': id
    }
  });
  return response 
}

async function upddateBuyCharacter(characterId, userId, price, money){

  const response = await fetch(`http://localhost:3000/characters/buyCharacter`,
  {
    method : 'PUT',
    headers : {
      'Content-Type' : 'application/json'
    },
     body : JSON.stringify({
      characterId,
      userId,
      price,
      money
     })
  });
  return response 

}

async function upddateSellCharacter(characterId, userId, price, money){

  const response = await fetch(`http://localhost:3000/characters/sellCharacter`,
  {
    method : 'PUT',
    headers : {
      'Content-Type' : 'application/json'
    },
     body : JSON.stringify({
      characterId,
      userId,
      price,
      money
     })
  });
  return response 

}

export { register, emailValidation, login, characters, charactersById, upddateBuyCharacter, upddateSellCharacter }



