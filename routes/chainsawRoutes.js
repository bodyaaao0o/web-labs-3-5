const express = require('express');
const chainsawController = require('../controllers/chainsawController');
const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger_output.json');

router.route('/create').post(chainsawController.create);
router.route('/get').get(chainsawController.get);
router.route('/get/:id').get(chainsawController.getById);
router.route('/update/:id').put(chainsawController.update);
router.route('/delete/:id').delete(chainsawController.deleteById);
router.route('/count-price').post(chainsawController.countPrice);
router.route('/docs').get(swaggerUi.serve, swaggerUi.setup(swaggerFile));

module.exports = router;
