const express = require('express')
const app = express()
const port = 3000

 const mongoose = require('mongoose')
 mongoose.set('strictQuery', false);
 mongoose.connect('mongodb+srv://laravel3899:wonho%406356@cluster0.jlfk6ux.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true }).then(() => console.log('MongoDB Connected...'))
 .catch(err => console.log(err))



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})