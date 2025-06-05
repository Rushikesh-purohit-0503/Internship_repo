const bcrypt = require('bcrypt');
const userDB = {
    users: require('../model/user.json'),
    setUsers: function (data) {
        this.users = data;
    }
}

const userLogin = async (req, res) => {
    const { username, password } = req.body;
    console.log(username, password);
    if (!username || !password) { return res.status(400).json({ 'message': 'Username and password are required' }) };
    
    const userExists = userDB.users.find(user => user.username === username);
    console.log(userDB.users);
    if (!userExists) return res.status(401).json({ 'message': 'User not found' });

    try {
        const match = await bcrypt.compare(password, userExists.password);

        if (match) res.status(200).json({ 'message': 'Login successful' });
        else res.status(401).json({ 'message': 'Invalid credentials' });

    } catch (error) {
        res.status(500).json({ 'message': error.message });
    }
}


module.exports = { userLogin };