const {ObjectId} = require('mongodb')
const { boolean } = require('yargs')
const client = require('./db')

const db = client.db('itcdb')
const collection = db.collection('books')

const add = (book) => {
    return new Promise(async (resolve,reject)=>{
        try {
            const res = await collection.insertOne(book)
            if(res.result.ok == 1){
                resolve({status:'success'})
            }
        } catch (error) {
            reject({status:'failure',reason:error});
        } 
    })
}

const removeById = (id) => {
    return collection.deleteOne({_id: ObjectId(id)})
}

const findById = (id) => {
    return collection.findOne({_id: ObjectId(id)})
}

const remove = (id) => {
    return new Promise(async (resolve,reject)=>{
        await collection.deleteOne({id: {$eq: id}})
    })
}

const update = (book) => {
    return collection.updateOne({_id: ObjectId(book._id)},
            { $set : {
                title: book.title,
                category: book.category,
                pDate: book.pDate,
                price: book.price
            }})
}

// const list = async () => {
//     try {
//         const results = collection.find({title:title});
//         results.forEach( item => console.log(item.id + ' | ' +item.title + ' | '+item.category))
//     } catch(error){
//         console.log('Unable to list all',error)
//     }
//     finally {
//         client.close()
//     }
// }

const filter = (book) => {
    return new Promise(async (resolve,reject)=>{
        try {
            const data = await collection.find(book).toArray();
            //some transformation
            resolve(data)
        } catch (error) {
            reject({status:'failure',reason:error});
        }
    })
}

module.exports = {add,remove, filter, update,findById, delete:removeById}