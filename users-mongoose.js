const {User} = require('./Models')

const add = (user) => {
    return new Promise(async (resolve,reject)=>{
        try {
            const obj = new User(user)
            const data = await obj.save()
            resolve({status:'success',data})
        } catch (error) {
            reject({status:'failure',reason:error});
        } 
    })
}

const login = (email,password) => {
    return new Promise(async (resolve,reject)=>{
        try {
           const user = await User.login(email,password)
           resolve({status:'success',user})
        } catch (error) {
            reject({status:'failure',reason:error});
        } 
    })
}

module.exports = {add, login}