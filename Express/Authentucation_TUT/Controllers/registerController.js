const fsPromises = require('fs').promises;
const path = require('path');
const bcrypt = require('bcrypt');

const userDB = {
    users : require('../model/user.json'),
    setUsers : function(data){
        this.users = data;
    }
}


const createUser = async (req, res) => {
    const {username, password} = req.body;

    if(!username || !password) res.status(400).json({'message': 'Username and password are required'});

    const duplicate = userDB.users.find(user => user.username === username);

    if(duplicate) return res.status(409).json({'message': 'Username already exists'});

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = {'username': username, 'password': hashedPassword};

        userDB.setUsers([...userDB.users, newUser]);

        fsPromises.writeFile(path.join(__dirname, '..', 'model', 'user.json'), JSON.stringify(userDB.users));
        console.log(userDB.users);
        res.status(201).json({'message':   `User ${username} created successfully`});
    } catch (error) {
        res.status(500).json({'message': error.message});
    }

}


module.exports = {createUser};