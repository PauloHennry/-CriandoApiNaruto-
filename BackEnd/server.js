import express from 'express'
import narutoRouter from './src/routes/naruto.route.js'

const app = express();

app.use(narutoRouter)

app.listen(3000, ()=> console.log('serve up running in port:3000.'));