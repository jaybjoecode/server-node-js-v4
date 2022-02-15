const { Schema, model } = require('mongoose');

const schema = new Schema(
    {
        title: String,
        description: String,
        imagePath: String
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = model('Photo', schema);