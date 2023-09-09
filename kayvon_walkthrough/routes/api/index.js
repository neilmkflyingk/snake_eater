const router = require('express').Router();
const userRoutes = require('./usereRoutes');
const thoughtRoutes = require('./userRoutes');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;
