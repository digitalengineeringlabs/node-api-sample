const express = require('express')
const cors = require('cors')
const books = require('./books')
const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req,res)=>{
    res.send({greeting:'Hello World'})
})

//returns all books
app.get('/books', (req,res)=>{
    books.filter(req.query).then((data)=>{
        res.status(200).send(data)
    })
})


app.post('/books', (req,res)=>{
    books.add(req.body).then((data)=>{
        res.status(200).send(data)
    }).catch((err)=>{
        res.status(500).send(err)
    })
})
//books/60a77afd3eec6f13443074c1
app.delete('/books/:id', (req,res)=>{
    books.delete(req.params.id).then((data)=>{
        res.send({status:'success'})
    }).catch((err)=>{
        res.send({status:'failure',msg:err})
    })
})

app.get('/books/:id', (req,res)=>{
    books.findById(req.params.id).then((data)=>{
        res.status(200).send(data)
    })
})

//edit - PUT (update all the data) or PATCH (partial data)
app.put('/books/:id', (req,res)=>{
    books.update({...req.body,_id:req.params.id}).then((data)=>{
        // console.log('updated reutned')
        res.status(200).send({success: data.result.nModified === 1})
    }).catch(err => {
        res.send({status:'failure',msg:err})
    })
})

app.listen(5000, ()=>{
    console.log('server is listening on 5000..')
})