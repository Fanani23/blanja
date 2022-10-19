import express from 'express';
import {
    getTransaction,
    getTransactionByID,
    createTransaction,
    updateTransaction,
    deleteTransaction
} from '../controllers/TransactionController.js';

const router = express.Router();

router.get('/transaction', getTransaction);
router.get('/transaction/:id', getTransactionByID);
router.post('/transaction', createTransaction);
router.put('/transaction/:id', updateTransaction);
router.delete('/transaction/:id', deleteTransaction);

export default router;