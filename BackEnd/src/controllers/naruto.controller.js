import narutoService from "../services/naruto.service.js"


const getReandomImage = (req, res) =>{
        res.send({
            message: narutoService.getReandomImage(),
            status:'success'
        })
}

export default{
    getReandomImage
}