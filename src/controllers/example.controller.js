const Example = require('../models/Example')
const ExampleChild = require('../models/ExampleChild');
const Paginate = require('../core/utils/Paginate')

const exampleController = {}

exampleController.exampleHerencie = async (req, res) => {
    // const exampleChild = await new ExampleChild({ name: 'Joel', lastName: 'Valdes' })

    const exampleChild = { name: 'Joel', lastName: 'Valdes' }
    console.log(example)
    const example = await new Photo(exampleChild)
    console.log(example)

    res.json(example)
};

exampleController.getExamples = async (req, res) => {

    const query = {
        // example: { $regex: req.query.search || '' }
        // OR
        $or: [
            { example: { $regex: req.query.search || '' } },
            // and other query
        ]
    }
    const paginate = new Paginate(req);
    paginate.setSelect('example');
    paginate.setPopulate('child');
    paginate.setSort({ example: 1 });
    try {
        const examples = await Example.paginate(query, paginate.getOptions())
        res.status(200).json(examples);
    } catch (err) {
        res.json({ code: 500, msg: err });
    }


    // try {
    //     // const examples = await Example.paginate(query, paginate.getOptions())
    //     const examples = await Example.find()
    //     res.status(200).json(examples);
    // } catch (err) {
    //     res.json({ code: 500, msg: err });
    // }
};

exampleController.createExample = async (req, res) => {
    const { example } = req.body;
    const newPost = new Example({ example });
    // await newPost.save();
    // res.json({ code: 200, msg: 'Created Successfully' });
    try {
        await newPost.save()
        res.json({ code: 200, msg: 'Created Successfully' })
    } catch (err) {
        res.json({ code: 500, msg: err });
    }
};

exampleController.getExampleById = async (req, res) => {
    try {
        const example = await Example.findById(req.params.id);
        res.status(200).json(example);
    } catch (err) {
        res.json({ code: 500, msg: err });
    }
};

exampleController.updateExample = async (req, res) => {
    const { example } = req.body;
    try {
        // await Example.findOneAndUpdate(
        //     { _id: req.params.id }, // filter
        //     { example }, // object updated
        //     { new: true } // get data updated if you need save in variable
        // )

        await Example.findByIdAndUpdate(
            req.params.id, // filter
            req.body, // object updated
        )
        res.status(200).json({ code: 200, msg: 'Updated Successfully' });
    } catch (err) {
        res.json({ code: 500, msg: err });
    }
};

exampleController.deleteExample = async (req, res) => {
    await Example.findOneAndDelete({ _id: req.params.id }, req.body)
    try {
        res.status(200).json({ code: 200, msg: 'Deleted Successfully' });
    } catch (err) {
        res.json({ code: 500, msg: err });
    }
};

module.exports = exampleController;