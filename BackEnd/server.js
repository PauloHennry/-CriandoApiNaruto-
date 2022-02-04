import express from 'express'

const app = express();

app.get('/',(req, res)=>{
    res.send({
        "message":"https:\/\/images.dog.ceo\/breeds\/puggle\/IMG_162320.jpg",
    })
});

app.listen(3000, ()=> console.log('serve up running in port:3000.'));