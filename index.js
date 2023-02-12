const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

const config = require('./config/key')

const { User } = require("./models/User")

//애플리케이션 데이터를 분석해서 가져올 수 있게 해주는것
app.use(bodyParser.urlencoded({extended:true})) 
//json파일을 분석해서 가져올 수 있게해주는 것
app.use(bodyParser.json())

 const mongoose = require('mongoose')
 mongoose.set('strictQuery', false);
 mongoose.connect(config.mongoURI, { useNewUrlParser: true }).then(() => console.log('MongoDB Connected...'))
 .catch(err => console.log(err))



app.get('/', (req, res) => {
  res.send('Hello World! 새해 복 많이 받으세요')
})


app.post('/register', (req, res) => {
    //회원 가입 할때 필요한 정보들을 클라이언트에서 가져오면
    //그것들은 데이터 베이스에 넣어준다.
    const user = new User(req.body)

    //몽고db에서오는 user에 저장한다.
    user.save((err, userInfo) =>{
        if(err) return res.json({success:false, err})
        return res.status(200).json({
            success: true
        })
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})