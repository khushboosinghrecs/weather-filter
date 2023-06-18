const mongoose = require('mongoose');

// Connection URL and database name

const connectDB = (url) => {
    return mongoose.connect(url, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
  }
  
  module.exports = connectDB


