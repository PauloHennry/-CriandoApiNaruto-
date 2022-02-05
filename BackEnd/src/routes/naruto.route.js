import  express  from 'express'
import narutoController from '../controllers/naruto.controller.js'

const router = express.Router()

router.route('/api/v1/naruto/image/random')
.get(narutoController.getReandomImage)


export default router