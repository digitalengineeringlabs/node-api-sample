const express = require('express');
const books = require('../books-mongoose')

const route = express.Router()
route.use(express.json())


//returns all books
route.get('/', (req,res)=>{
    books.filter(req.query).then((data)=>{
        res.status(200).send(data)
    })
})

route.post('/', (req,res)=>{
    books.add(req.body).then((data)=>{
        res.status(200).send(data)
    }).catch((err)=>{
        res.status(500).send(err)
    })
})

//books/60a77afd3eec6f13443074c1
route.delete('/:id', (req,res)=>{
    books.remove(req.params.id).then((data)=>{
        res.send({status:'success'})
    }).catch((err)=>{
        res.send({status:'failure',msg:err})
    })
})

route.get('/:id', (req,res)=>{
    books.findById(req.params.id).then((data)=>{
        res.status(200).send(data)
    })
})

//edit - PUT (update all the data) or PATCH (partial data)
route.put('/:id', (req,res)=>{
    books.update({...req.body,_id:req.params.id}).then((data)=>{
        // console.log('updated reutned')
        res.status(200).send({success: data.result.nModified === 1})
    }).catch(err => {
        res.send({status:'failure',msg:err})
    })
})

module.exports = route;