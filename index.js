//..............lecture-7...........
// create web server related to lecture-7

// const http = require('http');

// http.createServer((req, res) => {

//     res.write("<h1> Hey, this is Rishav</h1>");
//     res.end();
// }).listen(4500);


//...............lecture-8...............
// about package.js related to lecture-8
// const colors = require('colors');
// console.log('rishav'.blue);

//...............lecture-9.............
// challenge if node-module get deleted then lecture-9
// answer is simpley write npm install

//............lecture-10...........
// create nodemon package lecture-10
// console.log("hey there i going outside")

//..........lecture-11..........
// create a simple api
// const http = require('http');
// const api=require('./api')
// http.createServer((req, res) => {
//     res.writeHead(200, { 'content-type': 'application\json' });
//     res.write(JSON.stringify(api));
//     res.end();
// }).listen(5000);

//...........lecture-12............
// lecture-12 taking input from command line
// console.log(process.argv[3]);
// const fs=require('fs')
// const input = process.argv;
// fs.writeFileSync(input[2], input[3]);

// const fs = require('fs');
// const input = process.argv;

// if (input[2] == 'add') {
//     fs.writeFileSync(input[3], input[4])
// } else if (input[2] == 'remove') {
//     fs.unlinkSync(input[3])
// }
// else {
//     console.log('invalid input');
// }

//..........lecture-13............
// diplay file system lecture-13
// const fs = require('fs');
// const path=require('path')
// const dirPath = path.join(__dirname, 'files')
// for (let i = 0; i < 5;i++)
// {
//     fs.writeFileSync(dirPath+"/hello"+i+".txt", "a simple text file")
// }
// fs.readdir(dirPath, (err, files) => {
//     files.forEach((item) => {
//         console.log("Files name is ", item);
//     })
// })

// ..................lecture-14............
// Asynchrous programming language lecture-14
// const fs = require('fs');
// const path = require('path');
// const dirPath=path.join(__dirname, 'crud')
// const filePath=`${dirPath}/apple.txt`
//creating file in crud folder
// fs.writeFileSync(filePath, 'This is a simple text')
// reading file
// fs.readFile(filePath,'utf-8', (err, item) => {
//     console.log(item)
// })

//updating file
// fs.appendFile(filePath, 'and file name is apple.txt', (err) => {
//     if (!err) {
//         console.log("File is updated");
//     }
// })

//rename file
// fs.rename(filePath, `${dirPath}/fruit.txt`, (err) => {
//     if(!err)
//     {
//         console.log("File name is updated")
//     }
// })

// deleting file
// fs.unlinkSync(`${dirPath}/fruit.txt`)


//...........lecture-15...........
//Asynchronous programming
// console.log("start exe..")
// setTimeout(() => {
//     console.log("logic exe.....")
// }, 2000)

// console.log("complete exe....")
/*drawback of asynchronous programming, although we wanted to update the value of b and then calculated sum of a+b but since it is asynchronous so it doesn't wait for 2 seconds to execute;*/
// let a = 10;
// let b = 0;
// setTimeout(() => {
//     b=20;
// }, 2000)
// console.log(a+b)


//..........lecture-16...........
// let a = 10;
// let b = 0;
// let waitingData = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(30);
//     }, 2000)
// })

// waitingData.then((data) => {
//     b = data;
//     console.log(a+b)
// })

//...................lecture-17............
// how nodejs work and concept of event loop
// console.log("starting up")

// setTimeout(() => {
//     console.log("2 second log")
// }, 2000)

// setTimeout(() => {
//     console.log("Zero second log")
// }, 0)

// console.log("Finishing up")

//..........lecture-18.............
// about express js
// const express=require('express')
// const app = express();// to make express executable
// app.get('', (req, res) => {
//     res.send('Hello, this is home page')
// });
// app.get('/about', (req, res) => {
//     res.send('welcome, this is about page')
// });

// app.get('/help', (req, res) => {
//     res.send('welcome, this is help page')
// });

// app.listen(4600);

//.............lecture-19...........
//routing params
// const express=require('express')
// const app = express();// to make express executable
// app.get('', (req, res) => {
//     console.log("data sent by browser ===>>", req.query.name);
//     res.send('Hello, this is home page '+req.query.name)
// });

// app.listen(4600);


//..............lecture-19.........
// const express=require('express')
// const app = express();// to make express executable
// app.get('', (req, res) => {
//     res.send(`
//     <h1>Hello, this is home page</h1>
//     <a href="/about">Got to about page></a>
//     `)
// });
// app.get('/about', (req, res) => {
//     res.send(`
//     <input type="text" placeholder="user name" value="${req.query.name}" />
//     <button>Click Me</button>
//     <a href="/">Got to Home page></a>

//     `)
// });

// app.get('/help', (req, res) => {
//     res.send([
//         {
//         name: "rishav",
//             emil: "rishav449@gmail.com"
//         },
//         {
//             name: "kumar",
//             email:"kumar@gmail.com"
//         }
//     ])
// });

// app.listen(4600);

//..................lecture-21..............
//Make html pages
// const express = require('express');
// const app = express();
// const path = require('path')
// const publicPath=path.join(__dirname, 'public')

// app.use(express.static(publicPath))

// app.listen(5500);

//...............lecture-22.............
// remove extesion from html pages
// const express = require('express');
// const app = express();
// const path = require('path')
// const publicPath=path.join(__dirname, 'public')

// app.use(express.static(publicPath))
// app.get('', (_, res) => {
//     res.sendFile(`${publicPath}/index.html`)
// })
// app.get('/about', (_, res) => {
//     res.sendFile(`${publicPath}/about.html`);
// })
// app.get('/help', (_, res) => {
//     res.sendFile(`${publicPath}/help.html`)
// })
// app.get('*', (_, res) => {
//     res.sendFile(`${publicPath}/pageNotFound.html`)
// })

// app.listen(5000)

//............lecture-23.....................
// with help of template engine we make dynamic page
// const express = require('express');
// const app = express();
// const path = require('path')
// const publicPath=path.join(__dirname, 'public')

// app.set('view engine', 'ejs');// remember this

// app.use(express.static(publicPath))
// app.get('', (_, res) => {
//     res.sendFile(`${publicPath}/index.html`)
// })
// app.get('/profile', (_, res) => {
//     const user = {
//         name: 'rishav',
//         email: 'rishav@gmail.com',
//         city:'patna'
//     }
//     res.render('profile', {user})
// })
// app.get('/about', (_, res) => {
//     res.sendFile(`${publicPath}/about.html`);
// })
// app.get('/help', (_, res) => {
//     res.sendFile(`${publicPath}/help.html`)
// })
// app.get('*', (_, res) => {
//     res.sendFile(`${publicPath}/pageNotFound.html`)
// })

// app.listen(5000)



//................lecture-24.............

// const express = require('express');
// const app = express();
// const path = require('path')
// const publicPath=path.join(__dirname, 'public')

// app.set('view engine', 'ejs');// remember this

// app.use(express.static(publicPath))
// app.get('', (_, res) => {
//     res.sendFile(`${publicPath}/index.html`)
// })
// app.get('/profile', (_, res) => {
//     const user = {
//         name: 'rishav',
//         email: 'rishav@gmail.com',
//         city: 'patna',
//         skills: ['c++', 'c', 'JS', 'sql']
//     }
//     res.render('profile', {user})
// })
// app.get('/login', (_, res) => {
//     res.render('login')
// })
// app.get('/about', (_, res) => {
//     res.sendFile(`${publicPath}/about.html`);
// })
// app.get('/help', (_, res) => {
//     res.sendFile(`${publicPath}/help.html`)
// })
// app.get('*', (_, res) => {
//     res.sendFile(`${publicPath}/pageNotFound.html`)
// })

// app.listen(5000)

//............lecture-25...............
// concept application level middleware-which get applied on all routers
// const express=require('express')
// const app = express();

// const reqFilter = (req, res, next) => {
//     if(!req.query.age)
//     {
//         res.send("Please provide your age")
//     }
//     else if(req.query.age<18)
//     {
//         res.send("U can't access this page")
//     }
//     else
//     {
//         next();

//     }

// }
// app.use(reqFilter);
// app.get('/', (req, res) => {
//     res.send('Welcome to Home page')
// })

// app.get('/users', (req, res) => {
//     res.send('Welcome to users page')
// })

// app.listen(5000);

// .............lecture-26...............
// route level middleware-which can be applied on single or a group of middleware
// const express=require('express')
// const app = express();

// const reqFilter = require('./middleware')
// const route = express.Router();
// route.use(reqFilter);

// app.get('/', (req, res) => {
//     res.send('Welcome to Home page')
// })

// app.get('/users', (req, res) => {
//     res.send('Welcome to users page')
// })
// route.get('/contact', (req, res) => {
//     res.send('Welcome to contact page')
// })
// route.get('/about', (req, res) => {
//     res.send('Welcome to about page')
// })

// app.use('/', route);
// app.listen(5000);

//..............lecture-30...........
// connect mongoDB with nodejs
// const { MongoClient } = require('mongodb');
// const url = 'mongodb://0.0.0.0';
// const database = 'e-comm';
// const client = new MongoClient(url);

// async function getData()
// {
//     let result = await client.connect();
//     let db=result.db(database);
//     let collection = db.collection('products');
//     let response = await collection.find({}).toArray();
//     console.log(response);
// }

// getData();

//...................lecture-31..........
// Read data from MongoDb
// const dbConnect=require('./mongodb')

// dbConnect().then((res) => {
//     res.find().toArray().then((data) => {
//         console.log(data);
//     })
// })

// this is another to execute just above code
// const main = async () => {
//     let data = await dbConnect();
//     data = await data.find().toArray();
//     console.log(data);
// }

// main();

//...............................lecture-32...........
// refer file insert.js

//..............lecture-33....
// refer file update.js

//............lecture-34........
// refer file delete.js

//............lecture-35 to 38 access frm apiReal.js file


//..............lecture-39.............
// about mongoose
// const mongoose= require('mongoose')

// const main = async () => {
//     await mongoose.connect("mongodb://0.0.0.0/e-comm");

//     const ProductSchema = new mongoose.Schema({
//         name: String,
//         price:Number
//     });
//     const productsModel = mongoose.model('products', ProductSchema);
//     let data = new productsModel({ name: "m 8", price:1000});
//     let result = await data.save();
//     console.log(result);
// }
// main()

//..............lecture-40............
//CRUD operation mongoose
// const mongoose = require('mongoose')
// mongoose.connect("mongodb://0.0.0.0/e-comm");
// const ProductSchema = new mongoose.Schema({
//     name: String,
//     price: Number,
//     brand: String,
//     category:String
// });
////
// const saveInDB = async () => {
//     const Product = mongoose.model('products', ProductSchema);
//     let data = new Product({
//         name: "m 9",
//         price: 1000,
//         brand: "Xiomi",
//         category: "Mobile"
//     });
//     let result = await data.save();
//     console.log(result);
// }

// const updateInDB = async () => {
//     const Product = mongoose.model('products', ProductSchema);
//     let data = await Product.updateOne(
//         { name: "c32" },
//         {
//             $set:{price:1300}
//         }
//     )
//     console.log(data);
// }

// const deleteInDB = async () => {
//     const Product = mongoose.model('products', ProductSchema);
//     let data = await Product.deleteMany({ name: 'm 8' });
//     console.log(data);
// }

// const findInDB = async () => {
//     const Product = mongoose.model('products', ProductSchema);
//     let data = await Product.find({name:"m8"});
//     console.log(data);
// }

// findInDB();

//..................lecture-41 & 42.............
// POST api with mongoose
const express = require('express')
require('./config');//const me lene ki jarut nhi hai

const Product = require('./product')

const app = express();
app.use(express.json());
app.post("/create", async (req, res) => {
    let data = new Product(req.body);
    let result = await data.save();
    console.log(result)
    res.send(result)
})
app.get('/list', async (req, res) => {
    let data = await Product.find()
    res.send(data);
})

app.delete('/delete/:_id', async (req, res) => {
    console.log(req.params)
    let data = await Product.deleteOne(req.params)
    res.send(data)
})

app.put('/update/:_id', async (req, res) => {
    console.log(req.params)
    let data = await Product.updateOne(
        req.params,
        {
            $set: req.body
        }
    )
    res.send(data)
})

app.listen(5000);











