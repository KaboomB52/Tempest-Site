const mongoose = require('mongoose')

const signUpTemplate = new mongoose.Schema({
  username:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  time:{
    type:Date,
    default:Date.now
  }
})

module.exports = mongoose.model('user', signUpTemplate)
