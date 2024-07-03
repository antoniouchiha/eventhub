const express = require('express');
const router = express.Router();
const erroresLogsController = require('../controllers/erroresLogsController');

router.post('/', erroresLogsController.createErrorLog);
router.get('/', erroresLogsController.getAllErrorLogs);
router.get('/:log_id', erroresLogsController.getErrorLogById);
router.delete('/:log_id', erroresLogsController.deleteErrorLog);

module.exports = router;
