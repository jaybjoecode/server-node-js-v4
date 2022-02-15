const { Schema, model } = require('mongoose')
const extendSchema = require('mongoose-extend-schema');
const ExampleParent = require('./ExampleParent')

const exampleChildSchema = extendSchema(ExampleParent, // extend from model ExampleParent
    {
        lastName: { type: String, required: true },
    },
    {
        timestamps: true, // add createdAt and updatedAt and set date itself
        versionKey: false, // add __v by default is true
    }
)


module.exports = model('ExampleChild', exampleChildSchema);