
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getAllUsers);
router.post('/search', userController.searchUsers);
router.get('/detail/:id', userController.getUserDetail);

module.exports = router;
