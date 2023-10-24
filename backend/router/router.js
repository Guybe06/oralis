const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Bienvenue sur l'Api Oralis");
});

const cashFlowRoutes = require('./routes/cashFlowRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const departmentRoutes = require('./routes/departmentRoutes');
const reportRoutes = require('./routes/reportRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const transactionTypeRoutes = require('./routes/transactionTypeRoutes');
const userRoutes = require('./routes/userRoutes');

router.use('/cash-flow', cashFlowRoutes);
router.use('/categories', categoryRoutes);
router.use('/departments', departmentRoutes);
router.use('/reports', reportRoutes);
router.use('/transaction-types', transactionTypeRoutes);
router.use('/users', userRoutes);
router.use('/transactions', transactionRoutes);

module.exports = router;