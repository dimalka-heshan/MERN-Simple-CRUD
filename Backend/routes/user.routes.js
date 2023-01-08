const express = require('express');
const UserRouter = express.Router();

const {
    register,
    getAllUsers,
    getOneUser,
    searchOneUser,
    updateUser,
    userDelete
} = require('../controller/user.controller');

UserRouter.post('/create',register);
UserRouter.get('/getAll',getAllUsers);
UserRouter.get('/getOne/:id',getOneUser);
UserRouter.get('/getOne',searchOneUser);
UserRouter.put('/update/:id',updateUser);
UserRouter.delete('/delete/:id',userDelete);

module.exports = UserRouter;