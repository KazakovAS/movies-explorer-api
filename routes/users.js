const router = require('express').Router();
const { getCurrentUser, updateCurrentUser } = require('../controllers/users');
const { validateUserInfo } = require('../middlewares/validations');

router.get('/me', getCurrentUser);
router.patch('/me', validateUserInfo, updateCurrentUser);

module.exports = router;
