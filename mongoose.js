const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/itcdb', {useNewUrlParser: true, useUnifiedTopology: true});

module.exports = {mongoose}