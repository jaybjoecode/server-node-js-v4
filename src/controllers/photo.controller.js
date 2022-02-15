const fs = require('fs-extra')
const path = require('path')
const Photo = require('../models/Photo')

const photoController = {}

photoController.getPhotos = async (req, res) => {
    const photos = await Photo.find();
    return res.json(photos);
};

photoController.createPhoto = async (req, res) => {
    const { title, description } = req.body;
    const newPhoto = { title, description, imagePath: req.file.path };
    const photo = new Photo(newPhoto);
    await photo.save();
    return res.json({
        message: 'Photo Saved Successfully',
        photo
    });
};

photoController.getPhoto = async (req, res) => {
    const { id } = req.params;
    const photo = await Photo.findById(id);
    return res.json(photo);
}

photoController.deletePhoto = async (req, res) => {
    const { id } = req.params;
    // const photo = await Photo.findByIdAndRemove(id) as IPhoto;
    const photo = await Photo.findByIdAndRemove(id);
    if (photo) {
        await fs.unlink(path.resolve(photo.imagePath));
    }
    return res.json({ message: 'Photo Deleted' });
};

photoController.updatePhoto = async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    const updatedPhoto = await Photo.findByIdAndUpdate(id, {
        title,
        description
    });
    return res.json({
        message: 'Successfully updated',
        updatedPhoto
    });
}

module.exports = photoController;