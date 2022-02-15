const { Schema, model } = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const exampleSchema = new Schema(
    {
        example: { type: String, required: true },
    },
    {
        timestamps: true, // add createdAt and updatedAt and set date itself
        versionKey: false, // add __v by default is true
    }
)

exampleSchema.plugin(mongoosePaginate);

module.exports = model('Example', exampleSchema);