const {userVerification} = require("../Middlewares/AuthMiddleware");
const { Signup,Login } = require('../Controllers/AuthController');
const router = require('express').Router();

router.post('/signup', Signup);  // Assuming Signup is defined in AuthController.js
router.post('/login', Login);    // Assuming Login is defined in AuthController.js
router.post('/',userVerification);

module.exports = router;  // Single proper export
