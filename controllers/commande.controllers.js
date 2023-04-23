const Commande= require('../models/commande.model')
const User = require("../models/user.model");

exports.addCommande= async(req,res)=>{
    const {  articles , price ,userId } = req.body;
    Commande.create({ articles , price})
    .then((newC)=>{
      User.findByIdAndUpdate(userId,{ $push: { commande: newC.id } })
      .then(() => res.status(200).json({ message: "commande sucessfully added." }))
    })
    .catch((error) => res.status(404).json({ message: error }));
};


exports.getCommande= async(req,res) => {
  Commande.find()
  .then((commande) => res.status(200).json( commande ))
  .catch((error) => res.status(404).json({ message: error }));

}


exports.deleteCommande= async(req,res)=>{
    // const {articles}=req.params.id
    // Commande.findByIdAndDelete({articles})
    // .then((commande) => res.status(200).json({ commande }))
    // .catch((error) => res.status(404).json({ message: error }));
    try {
        const deletedCommande = await Commande.findByIdAndDelete(req.params.id);
        res.send({ msg: `${deletedCommande} was successfully deleted` });
      } catch (error) {
        res.status(500).json({ errors: error.message });
      }
}