const fs = require('fs')
const process = require('process')
const cmd = require('yargs').argv

//fs.writeFileSync('data.txt','Hello there');

// fs.writeFile('data2.txt', 'Hello async file data', (error)=>{
//     if(!error) {
//         console.log('File write successful')
//     }
// })

// fs.readFile('data2.txt', (err,data)=>{
//     if(!err){
//         console.log(data.toString())
//     }
// })

console.log(cmd);

if(cmd._[0] === 'add'){
    // console.log('Adding Book')
    // console.log(cmd.title)
    // console.log(cmd.category)
    
    fs.readFile('data.json', (err,data) => {
        
        const books = JSON.parse(data.toString())
        books.push({title:cmd.title,category:cmd.category});

        const jsonStr = JSON.stringify(books)
        //JSON.parse
        fs.writeFile('data.json', jsonStr, (error)=>{
            if(!error) {
                console.log('File write successful')
            }
        })
    })
} else if(cmd._[0] === 'delete') { //check for delete
//read items from file
fs.readFile('data.json', (err,data) => {
        
    const books = JSON.parse(data.toString())
    //books.push({title:cmd.title,category:cmd.category});
    const filtered = books.filter(b => b.title !== cmd.title)

    const jsonStr = JSON.stringify(filtered)
    //JSON.parse
    fs.writeFile('data.json', jsonStr, (error)=>{
        if(!error) {
            console.log('File write successful')
        }
    })
})
//filter out objects not matching the title
//overwrite the filtered array into file
} else 
    console.log('invalid command')
