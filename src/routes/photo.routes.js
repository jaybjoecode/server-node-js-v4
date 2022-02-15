const { Router } = require('express')
const upload = require('../core/libs/multer')
const photoController = require('../controllers/photo.controller')

const PhotoRouter = Router()

// middleware
//PhotoRouter.use(upload.single('image'));

// routes
PhotoRouter.get('/', photoController.getPhotos)
PhotoRouter.get('/:id', photoController.getPhoto)
PhotoRouter.post('/', upload.single('image'), photoController.createPhoto)
PhotoRouter.put('/:id', photoController.updatePhoto)
PhotoRouter.delete('/:id', photoController.deletePhoto)

module.exports = PhotoRouter;