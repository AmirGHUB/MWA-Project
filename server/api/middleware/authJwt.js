/**
 * MWA Project  
 * Online shopping application 
 * Since june 10
 * Team-6 
 */

const ApiResponse = require('../models/api.response');
const jwt = require('jsonwebtoken');
const config = require('../config/key');

exports.verifyToken = (req, res, next) => {
    // console.log(req.headers);
    //validation 
    //if (!username || !password || users[username] !== password) {

    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(403).send(new ApiResponse(403, 'error', { err: 'No Token Provided!' }));
    }
    const token = authHeader.split(' ')[1];

    jwt.verify(token, config.jwtKey, (err, decoded) => {
        if (err) {
            return res.status(401).send(new ApiResponse(401, 'error', { err: 'Unauthorized!' }));
        }
        next();
    });
}