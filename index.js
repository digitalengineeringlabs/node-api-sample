const cmd = require('yargs').argv
const books = require('./books')
console.log(cmd)
//node index.js add --title Nodel --category TEst

// switch (cmd._[0]) {
//     case 'add':
//         const id = Math.round(Math.random()*1000)
//         books.add({id, title:cmd.title,category:cmd.category})
//         break;
//     default:
// }

if(cmd._[0] === 'add'){
    // console.log('Adding Book')
    // console.log(cmd.title)
    // console.log(cmd.category)
    const id = Math.round(Math.random()*1000)
    const res = books.add({id, title:cmd.title,category:cmd.category})
    //{status:'success}
    //{status:'failure',reason:''}
   
} //node index.js add --id 12
else if(cmd._[0] === 'delete') { //check for delete
    const id = cmd.id;
    books.remove(id).then((data)=>{

    })
} 
else if(cmd._[0] === 'list') { 
    books.filter({}).then((data)=>{
        data.forEach(item => console.log(item.id + ' | ' +item.title + ' | '+item.category))
    })
} 
else if(cmd._[0] === 'filter') {
    const title = cmd.title;
   try {
        const data = books.filter({title:title})
        data.forEach(item => console.log(item.id + ' | ' +item.title + ' | '+item.category))
   } catch (error) {
        console.log('Unable to list all',error)
   }
} 
else if(cmd._[0] === 'edit') {
    const id = cmd.id;
    const title = cmd.title;
    const category = cmd.category;
    books.update({id,title,category})
} else 
    console.log('invalid command')

 