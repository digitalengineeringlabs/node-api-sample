const client = require('./db')

const db = client.db('itcdb');
const collection = db.collection('books');

const add = async (book) => {
    await collection.insertOne(book)
    client.close()
}

module.exports = {add}
