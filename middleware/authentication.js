const User = require('../models/User')
const jwt = require('jsonwebtoken')
const { UnauthenticatedError } = require('../errors')
const auth = async(req, res, next) => {
    // console.log(req);
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: '1Not authorized to access this route' })
    }
    const token = authHeader.split(' ')[1]
    try {
        // jwt 通过JWT_SECRET来验证token
        console.log(token);
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        req.user = { userId: payload.userId, name: payload.name }
        console.log('verify success');
         next()
    } catch (error) {
        throw new UnauthenticatedError('2Not authorized to access this route')
    }
   
}

module.exports = auth