const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
mongoose.connect('mongodb://localhost:27017/itcdb', {useNewUrlParser: true, useUnifiedTopology: true});

const bookSchema = new mongoose.Schema({
    title: String,
    category: String,
    pDate: String,
    price: Number 
 })

const Book = mongoose.model('Book', bookSchema)

const userSchema = new mongoose.Schema({
    name: String,
    password:String,
    email: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
              return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(v);
            },
            message: props => `${props.value} is not a valid email address!`
          },
    }
 })

  userSchema.pre('save', async function (next){
    const user = this;
    user.password = await bcrypt.hash(user.password,5)
    next()
  })

  userSchema.statics.login = async (email,password) => {
    const user = await User.findOne({email})
 
    if(!user) {
      throw new Error('invalid user')
    }
  
    const valid = await bcrypt.compare(password, user.password)
    if(!valid) {
      throw new Error('invalid user')
    }

    return user
  }

  // userSchema.methods.findByEmail = async () => {
  //   const user = this;
  // }

//  userSchema.pre('save', async function (next)  {
//   const user = this;
//   console.log('just befor saving',user);
//   if(user.isModified('password')){
//     user.password = await bcrypt.hash(user.password,8);
//   }
//   next();
// });

const User = mongoose.model('User', userSchema)
//called before or after, based on some event, like saving
//middleware


module.exports = {Book,User}