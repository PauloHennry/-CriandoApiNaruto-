const getReandomImage = (req, res) =>{
        res.send({
            message:"https:\/\/images.dog.ceo\/breeds\/puggle\/IMG_162320.jpg",
            status:'success'
        })
}

export default{
    getReandomImage
}