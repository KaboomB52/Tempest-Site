const express = require('express')
const router = express.Router()
const signup = require('../models/SignUpModels')

router.post('/signup'), (request, response) =>{
  const signedUpUser = new signup({
    username:request.body.username,
    email:request.body.email,
    password:request.body.password,
    username:request.body.username
  })
  signedUpUser.save()
  .then(data =>{
    response.json(data)
  })
  .catch(error =>{
    response.json(error)
  })
}

module.exports = router
