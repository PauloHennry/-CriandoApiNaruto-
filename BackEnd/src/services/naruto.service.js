
import {getImgens} from '../repository/naruto.repository.js'

const getReandomImage = () => {
    const images = getImgens()
    const randomImage = Images[Math.floor(Math.random() * images.length)];
    return randomImage;
}

export default{
    getReandomImage
}