const express = require('express')
const app = express();
const bodyParser = require('body-parser');
// const crypto = require('crypto');
const path = require('path');
const fs = require('fs/promises');
const wiki = require('./wiki.js');
const filehandling = require('./filehandling.js');
const asyncHandler = require('express-async-handler');
const os = require('os');

// console.log(process.argv)
const PORT = 3000;


app.use('/wiki', wiki);
app.use('/filehandling', filehandling);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/jsondata', (req, res) => {
  console.log(req.body);  // { key: 'value' }
  res.send({ message: "Received JSON data", data: req.body });
});
// const asyncHandler = require('express-async-handler');

app.get('/data', asyncHandler(async (req, res) => {
    const data = req.body  // Simulating an async operation
    if (data) {
        res.json(data);
    } else {
        res.status(404).send('Data not found');
    }
}));

app.get('/upload', async(req, res) => {
    let array = Array.from({length: Math.pow(2,26)}, (_, i) => {return i});
    // const data = await fs.readFile("1.json", "utf-8");
    await new Promise(async()=>{
        return res.json({msg:"all ok"})
    })
    console.log(array.length)
    /*   // console.log("parsing data")
    // const obj = JSON.parse(data)
    // console.log("parsing data end")
//    return res.json(obj); */
})
app.get("/status",async(req,res)=>{
    return res.json({message:"All Ok"})
})

let resolve = null



app.get('/wait',async(req, res) => {
    let array = Array.from({length: Math.pow(2,26)}, (_, i) => {return i});
    res.json({message:"Waiting for 5 sec"})
    const pro = new Promise ((res,rej)=>{
    resolve = res
    return 
})
    await pro
    console.log(array)
    console.log("Resolved")
})
app.get('/resolve',async(req, res) => {
    resolve()   
    return res.json({message:"Resolved"})
})

// app.post('/delete/:filename', (req, res) => {
//     const filename = req.params.filename
//     const filepath = path.join(__dirname, filename); 
//     console.log(filepath)
//     fs.unlink(filepath, (err) => {
//         if (err) {
//             console.error(err);
//             return res.status(500)}
//             res.send('File deleted successfully');
//           })
// })

// app.post('/add/:num1/:num2', (req, res) => {
//     const num1 = parseInt(req.params.num1);
//     const num2 = parseInt(req.params.num2);
//     const result = num1 + num2;
//     res.send(`The result is: ${result}`);
// });


// app.post('/encrypt', (req, res) => {
//     const { data, algorithm, secretKey } = req.body;
//     let key = Buffer.from(secretKey, 'hex');

//     // Ensure the key length is correct for the chosen algorithm
//     if (algorithm === 'aes-256-cbc' && key.length !== 32) {
//         return res.status(400).json({ error: 'Invalid key length for aes-256-cbc. Key must be 32 bytes.' });
//     } else if (algorithm === 'aes-192-cbc' && key.length !== 24) {
//         return res.status(400).json({ error: 'Invalid key length for aes-192-cbc. Key must be 24 bytes.' });
//     } else if (algorithm === 'aes-128-cbc' && key.length !== 16) {
//         return res.status(400).json({ error: 'Invalid key length for aes-128-cbc. Key must be 16 bytes.' });
//     }
//     const iv = crypto.randomBytes(16); // Generate a random IV
//     const cipher = crypto.createCipheriv(algorithm, Buffer.from(secretKey, 'hex'), iv);
//     let encrypted = cipher.update(data, 'utf8', 'hex');
//     encrypted += cipher.final('hex');
//     res.json({ encryptedData: encrypted, iv: iv.toString('hex') });
// });

// app.post('/decrypt', (req, res) => {
//     const { encryptedData, algorithm, secretKey, iv } = req.body;
//     let key = Buffer.from(secretKey, 'hex');
//     let ivBuffer = Buffer.from(iv, 'hex');

//     // Ensure the key length is correct for the chosen algorithm
//     if (algorithm === 'aes-256-cbc' && key.length !== 32) {
//         return res.status(400).json({ error: 'Invalid key length for aes-256-cbc. Key must be 32 bytes.' });
//     } else if (algorithm === 'aes-192-cbc' && key.length !== 24) {
//         return res.status(400).json({ error: 'Invalid key length for aes-192-cbc. Key must be 24 bytes.' });
//     } else if (algorithm === 'aes-128-cbc' && key.length !== 16) {
//         return res.status(400).json({ error: 'Invalid key length for aes-128-cbc. Key must be 16 bytes.' });
//     }

//     const decipher = crypto.createDecipheriv(algorithm, key, ivBuffer);
//     let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
//     decrypted += decipher.final('utf8');
//     res.json({ decryptedData: decrypted });
// });
// app.post('/team_name_url',(req,res)=>{
//     const team_name = req.body;
//     console.log(team_name);
// });
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// const one = (req, res, next) => {
//     // 
//     console.log('One');
    
//     next();
// }
// const two = (req, res, next) => {
//     console.log('Two'); 
//     next();
// }
// const three = (req, res) => {

//     console.log('Three');   
    
//     res.send('finished');
// }   
// app.get('/chain(.html)?',[one, two, three]);
// var http = require('http');
// // var fs = require('fs');
// http.createServer(function (req, res) {
//   fs.readFile('index.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);


// // var fs = require('fs');
// fs.appendFile('mynewfile2.txt', '\tHello new content!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });


// var fs = require('fs');
// fs.writeFile('mynewfile2.txt',"Write using writeFile.",  function (err, file) {
//   if (err) throw err;
//   console.log('Saved!');
// });

// fs.appendFile('mynewfile2.txt', '\nappendend content!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
// });

// // fs.unlink('mynewfile1.txt', function (err) {
// //     if (err) throw err;
// //     console.log('File deleted!');
  
// // })


// fs.rename('mynewfile2.txt', 'myrenamedfile.txt', function (err) {
//     if (err) throw err;
//     console.log('File Renamed!');   
//   });

// var http = require('http');
// var formidable = require('formidable');
// var fs = require('fs'); 
// http.createServer(function(req,res){
//    if (req.url=='/fileupload') {
//     var form = new formidable.IncomingForm();
//     form.parse(req, function(err, fields, files) {
//         var oldpath = files.filetoupload.path;
//         var newpath = 'C:/Users/rushikeshpurohit' + files.filetoupload.name;
//         fs.rename(oldpath, newpath, function (err) {
//             if (err) throw err;
//             res.write('File uploaded and moved!');
//             res.end();
//           });
//     });
    
//    } else {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
//     res.write('<input type="file" name="filetoupload"><br>');
//     res.write('<input type="submit">');
//     res.write('</form>');
//     return res.end();
//    }
// }).listen(8080);




