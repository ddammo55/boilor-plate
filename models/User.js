// 모듈가저오기
const mongoose = require('mongoose');

// 스키마생성
const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength:50
    },
    email: {
        type: String,
        trim: true, //빈공간없애기
        unique:1 //중복되지 않게
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50 // 해도되고 안해도 되고
    },
    role: {
        type: Number, 
        default: 0 //관리자 등급, 회원등급
    },
    image: String,
    token:{
        type:String
    },
    tokenExp:{ //토큰사용기간
        type: Number
    }
})

const User = mongoose.model('User', userSchema)

//다른곳에서도 이 모듈을 사용할 수 있게
module.exports = {User}