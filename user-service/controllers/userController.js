const User = require('../model/userModel')

const getUsers = async(req,res)=>
{
    try{
        const users = await User.find(); //fetch
        res.status(200).json(users);
    }
    catch(error)
    {
        res.status(500).json({message:"error fetching users"})
    }
}
// create a new user
const createUser = async (req, res) => {
    const newUser = new User(req.body); 
    try {
        const savedUser = await newUser.save(); // save user to the database
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({ message: 'Error creating user' });
    }
};

module.exports = { getUsers, createUser };