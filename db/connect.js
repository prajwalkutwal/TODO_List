const mongoose = require('mongoose')
const mongo_connect = "mongodb+srv://PrajwalK:QazWsxEdc@cluster0.x5p5u.mongodb.net/TODO_List?retryWrites=true&w=majority"
const connectDB = (url) => {
  return mongoose.connect(mongo_connect, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
}

module.exports = connectDB
