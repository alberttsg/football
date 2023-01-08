import mongoose from 'mongoose'
const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  birthDate: {
    type: String,
    required: true
  },
  registerDate: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
  },
  money: {
    type: Number,
    required: true,
  },
  rol: {
    type: String,
    required: true,
  }
})

const characterSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
},
  birthDate: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
},
registerDate: {
  type: String,
  required: true
},
price:{
  type: Number,
  required: true
},
owner:{
  type: String,
  required: true
},
img:{
  type: String,
  required: true
}


})

const characterModel = model('Character', characterSchema)
const userModel = model('User', userSchema);

export { userModel, characterModel }