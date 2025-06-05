const express = require('express');
const router = express.Router();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));    
app.use('/register', require('./routes/user'));
app.use('/login', require('./routes/auth'));
// router.post('/register', createUser);
// app.get('/', (req, res) => {
//     res.send('Hello World');
// });
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});