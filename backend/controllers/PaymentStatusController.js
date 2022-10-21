import PaymentStatus from "../models/PaymentStatusModel.js";

export const getPaymentStatus = async (req, res) => {
  try {
    const response = await PaymentStatus.findAll();
    res.status(200).json(response);
  } catch (err) {
    console.log(err.message);
  }
};

export const getPaymentStatusById = async (req, res) => {
  try {
    const response = await PaymentStatus.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (err) {
    console.log(err.message);
  }
};

export const createPaymentStatus = async (req, res) => {
  try {
    await PaymentStatus.create(req.body);
    res.status(200).json({ msg: "Payment status created" });
  } catch (err) {
    console.log(err.message);
  }
};

export const updatePaymentStatus = async (req, res) => {
  try {
    await PaymentStatus.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Payment status updated" });
  } catch (err) {
    console.log(err.message);
  }
};

export const deletePaymentStatus = async (req, res) => {
  try {
    await PaymentStatus.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Payment status deleted" });
  } catch (err) {
    console.log(err.message);
  }
};
