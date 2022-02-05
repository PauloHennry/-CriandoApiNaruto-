import express from 'express'
import narutoController from './src/controllers/naruto.controller.js'

const app = express();

app.get('/', narutoController.getReandomImage)


app.listen(3000, ()=> console.log('serve up running in port:3000.'));