const { Schema, model } = require('mongoose')

const exampleParentSchema = new Schema(
    {
        name: { type: String, required: true },
    },
    {
        timestamps: true, // add createdAt and updatedAt and set date itself
        versionKey: false, // add __v by default is true
    }
)


module.exports = model('ExampleParent', exampleParentSchema);