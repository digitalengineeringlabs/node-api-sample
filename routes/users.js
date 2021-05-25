const express = require('express');
const users = require('../users-mongoose')
const route = express.Router()

route.use(express.json())

route.post('/', (req,res)=>{
    users.add(req.body).then((data)=>{
        res.status(200).send(data)
    }).catch((err)=>{
        res.status(500).send(err)
    })
})

route.post('/login', (req,res)=>{
    users.login(req.body.email,req.body.password).then((data)=>{
        res.status(200).send(data)
    }).catch((err)=>{
        res.status(500).send(err)
    })
})

module.exports = route;