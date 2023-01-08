const User = require('../models/user.model');

const register = async (req, res) => {
    try {
        const { username, addr, scl } = req.body;

        const user = await User.findOne({ username: req.body.username});
        console.log(user);
            
            if (user) {
            return res.status(500).send({
                status: false, 
                message: "User already exists"
            });
        } else {
            const newUser = {
                username: username,
                addr: addr,
                scl: scl
            }
    
            const newuser = new User(newUser);
            await newuser.save();
            
            return res.status(200).send({
                status: true,
                message: "user registered successfully"
            });
        }


    } catch (err) {
        return res.status(500).send({
            status: false, 
            message: err.message
        });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();

        return res.status(200).send({
            status: true,
            message: "users recieved successfully",
            allUsers: users
        });

    }catch (err) {
        return res.status(500).send({
            status: false, 
            message: err.message
        });
    }
};


const getOneUser = async (req, res) => {
    try {
        const userID = req.params.id;
        const user = await User.findById(userID);

        return res.status(200).send({
            status: true,
            message: "user recieved successfully",
            duser: user
        });

    }catch (err) {
        return res.status(500).send({
            status: false, 
            message: err.message
        });
    }
};

const searchOneUser = async (req, res) => {
    try {
        const userName = req.body;
        const user = await User.find({username: userName.username});

        return res.status(200).send({
            status: true,
            message: "user recieved successfully",
            duser: user
        });

    }catch (err) {
        return res.status(500).send({
            status: false, 
            message: err.message
        });
    }
};


const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const { username, addr, scl } = req.body;

        const upuser = {
            username : username, 
            addr : addr, 
            scl : scl
        }

        const updatedUser = await User.findByIdAndUpdate(userId,upuser);

        return res.status(200).send({
            status: true,
            message: "user updated successfully",
            duser: updatedUser
        });

    }catch (err) {
        return res.status(500).send({
            status: false, 
            message: err.message
        });
    }
};


const userDelete = async (req, res) => {

    try {
        const userId = req.params.id
        const deleteUser = await User.findByIdAndDelete(userId)

        return res.status(200).send({
            status: true,
            message: "user deleted successfuly!",
            deluser: deleteUser
        })

    }catch (err) {
        return res.status(500).send({
            status: false,
            message: err.message
        })
    }

}


module.exports = {
    register,
    getAllUsers,
    getOneUser,
    searchOneUser,
    updateUser,
    userDelete
};
