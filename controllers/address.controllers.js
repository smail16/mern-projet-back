const Address = require("../models/address.model");

exports.addAddress = async (req, res) => {
  const { zip, address, city, userId } = req.body;
  Address.create({ zip, address, city, userId });
  res.status(200).json({ message: "Address Sucessfully added." });
};

exports.getAdress = async (req, res) => {
  try {
    const address = await Address.find();
    address
      ? res.status(201).json(address)
      : res.status(401).json({ msg: "getAll error" });
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
  // const { zip, address, city } = req.params;
  // Address.find({ zip, address, city })
  // .then((address) => res.status(200).json({ address })).catch((error) =>
  //   res.status(404).json({ message: error })
  // );
};

exports.editAddress = async (req, res) => {
  try {
    const editAddress = await Address.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true }
    );
    res.status(201).send(editAddress);
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};

exports.deleteAddress = async (req, res) => {
  try {
    const deletedAddress = await Address.findByIdAndDelete(req.params.id);
    res.send({ msg: `${deletedAddress} was successfully deleted` });
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};
