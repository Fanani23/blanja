import Transaction from "../models/TransactionModel.js";

export const getTransaction = async (req, res) => {
    try {
        const response = await Transaction.findAll();
        res.status(200).json(response);
    } catch (err) {
        console.log(err.message);
    }
};

export const getTransactionByID = async (req, res) => {
    try {
        const response = await Transaction.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (err) {
        console.log(err.message);
    }
};

export const createTransaction = async (req, res) => {
    try {
        await Transaction.create(req.body);
        res.status(200).json({msg: 'Transaction created'});
    } catch (err) {
        console.log(err.message);
    }
};

export const updateTransaction = async (req, res) => {
    try {
        await Transaction.update(req, res);
        res.status(200).json({msg: 'Transaction updated'});
    } catch (err) {
        console.log(err.message);
    }
};

export const deleteTransaction = async (req, res) => {
    try {
        await Transaction.destroy(req, res);
        res.status(200).json({msg: 'Transaction deleted'});
    } catch (err) {
        console.log(err.message);
    }
};