const bcrypt = require('bcrypt')
bcrypt.hash('test@123',5, (err,encrypted)=>{
    console.log(encrypted)
})

const enc = '$2b$05$j3zlPn8q.B/dS3RBq9xcYepo.xmhRXebuGYhS.naghnV6.noKybM6'
bcrypt.compare('test@123',enc,(err,match)=>{
    console.log(match)
})

console.log('A')

setTimeout(() => {
    console.log('B')
}, 0);

setTimeout(() => {
    console.log('C')
}, 100);

console.log('D')

//A,D,B,C