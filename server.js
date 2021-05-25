const express = require('express')
const cors = require('cors')

const users = require('./routes/users')
const books = require('./routes/books')

const app = express()

app.use(cors())

//custom middleware
app.use((req,res,next) => {
    console.log(req.method + ' ' + req.url)
    next()
})

app.use('/users', users)
app.use('/books', books)

app.get('/', (req,res)=>{
    res.send({greeting:'Hello World'})
})

app.listen(5000, ()=>{
    console.log('server is listening on 5000..')
})