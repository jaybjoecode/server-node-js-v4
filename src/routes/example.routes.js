const { Router } = require('express')
const exampleController = require('../controllers/example.controller')

const router = Router()

router.get('/ok', (req, res) => res.send('hello example'))



router.get('/', exampleController.getExamples);
router.post('/', exampleController.createExample);
router.get('/:id', exampleController.getExampleById);
router.put('/:id', exampleController.updateExample);
router.delete('/:id', exampleController.deleteExample);

router.get('/herencie', exampleController.exampleHerencie);

module.exports = router;