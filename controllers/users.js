const user = require('../models/User');

const getAllUsersStatic = async (req, res) => {
    const users = await user.find({});
    console.log(users);
    console.log('get all users');
    res.send('get all users');
    res.status(200).json({ users });
}
const userSignup = async (req, res) => {
    const { name, email, password } = req.body;
    const user = await user.create({ name, email, password });
    console.log(user);
    console.log('user signup');
    res.send('user signup');
    res.status(200).json({ user });
}


module.exports = {  
    getAllUsersStatic,
    userSignup
}