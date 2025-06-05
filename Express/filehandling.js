const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
router.get('/', (req, res) => {
    res.send('Hello files');
});

router.delete('/:filename', (req, res) => {
    const filename = req.params.filename
    const filepath = path.join(__dirname, filename);
    console.log(filepath)
    // Attempt to delete the file
    fs.unlink(filepath, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error deleting file' });
        }
        res.status(200).json({ message: 'File deleted successfully' });
    });
});

module.exports = router;