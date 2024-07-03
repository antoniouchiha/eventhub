// src/routes/tokensRoutes.js

const express = require('express');
const router = express.Router();
const tokensController = require('../controllers/tokensController');

router.post('/', tokensController.createToken);
router.get('/', tokensController.getAllTokens);
router.get('/:token_id', tokensController.getTokenById);
router.put('/:token_id', tokensController.updateToken);
router.delete('/:token_id', tokensController.deleteToken);

module.exports = router;
