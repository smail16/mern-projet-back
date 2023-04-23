const express=require("express")
const { check, validationResult } = require("express-validator")

exports.registerRules=()=>[
    check('fullName','This field is required').notEmpty(),
    check('email','This field is required').notEmpty(),
    check('email', 'this field should be a valid email').isEmail(),
    check('password','This field should be at least 6 charcters').isLength({min:5})
]


exports.validator=(req,res,next)=>{
    const errors= validationResult(req);
    errors.isEmpty()? next() : res.status(406).json({errors:errors.array()})
}