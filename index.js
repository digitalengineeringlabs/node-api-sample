const cmd = require('yargs').argv
const books = require('./books')

//node index.js add --title Nodel --category TEst
if(cmd._[0] === 'add'){
    // console.log('Adding Book')
    // console.log(cmd.title)
    // console.log(cmd.category)
    books.add({title:cmd.title,category:cmd.category})
   
} //node index.js add --id 12
else if(cmd._[0] === 'delete') { //check for delete
//read items from file

//filter out objects not matching the title
//overwrite the filtered array into file
} else 
    console.log('invalid command')
