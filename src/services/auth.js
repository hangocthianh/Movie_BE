'use strict';
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {AUTH} = require('../config');

const scriptPassword =(pass)=>{
    const salt = bcrypt.genSaltSync(10);
    const hashed = bcrypt.hashSync(pass, salt)
    return hashed;
};

const comparePassword =(pass, passHashed)=>{
    const isMatch = bcrypt.compareSync(pass, passHashed);
    return isMatch;
}
const genToken=(data)=>{
    try {
        const token = jwt.sign(data, AUTH.SECRET_KEY,{expiresIn: '10d'})
        return token;
    } catch (error) {
        console.log(error)
        
    }
    
    
}

const decodeToken =(token)=>{
    try {
    const decode = jwt.verify(token, AUTH.SECRET_KEY, function(err, decoded){
        if(err){
            console.log(err)
            throw err
        }
    });    
    return decode;
    } 
    catch (error) {
        console.log(error)
    }
    
}

module.exports={
    scriptPassword,
    comparePassword,
    genToken,
    decodeToken
}

