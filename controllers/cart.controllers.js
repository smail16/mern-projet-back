const Cart = require("../models/cart.model")

exports.addCart=async(req,res)=>{
    // const { cartItems } = req.body;
    // try {   
    //     const newCart = new Cart({
    //         cartItems,
    //     });
    
    //     await newCart.save();
    //     newCart
    //     ? res.status(200).json(newCart)
    //     : res.status(401).json({ msg: "create product error" });
    // } catch (error) {
    //     res.status(501).json({ msg: error.message });
    // }
    const {cartItems}=req.body
    Cart.create({cartItems})
    res.status(200).json({message: "Cart Sucessfully added."})
}