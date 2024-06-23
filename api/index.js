const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const Post = require('./models/Post');
const bcrypt = require('bcryptjs');
const app = express();
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const multer = require('multer');
const uploadMiddleware = multer({dest: 'uploads/'});
const fs = require('fs');

const salt = bcrypt.genSaltSync(10);
const secret = 'asdfghjkiuytrew345rtgbju765rsdfgtree45'

app.use(cors({credentials:true, origin:'http://localhost:5173'}));
app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static(__dirname + '/uploads'));

mongoose.connect('mongodb+srv://hneelabh13:ld7ZH6j1Bu3NiAPn@cluster0.6o7ss0s.mongodb.net/?retryWrites=true')
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.error('Error connecting to MongoDB:', err.message));

    app.get('/',(req,res)=>{
        res.send("Hello world")
    })

    app.post('/signup', async (req, res) => {
        const {username, password} = req.body;
        try {
            const userDoc = await User.create({ 
                username, 
                password:bcrypt.hashSync(password,salt),
            });
            res.json(userDoc);
        } catch (error) {
            res.status(400).json(error);
        }
    });

    app.post('/login', async (req, res) => {
        const {username, password} = req.body;
        const userDoc = await User.findOne({username});
        const passOk = bcrypt.compareSync(password, userDoc.password);
        if (passOk) {
            // logged in
            jwt.sign({username, id:userDoc._id}, secret, {}, (err, token) => {
                if (err) throw err;
                res.cookie('token', token).json({
                    id:userDoc._id,
                    username,
                });
            });
        } else {
            res.status(400).json('Wrong credentials');
        }
    })

    // app.get('/profile', (req, res) => {
    //     res.json(req.cookies);
    // })

    app.get('/profile', (req, res) => {
        const {token} = req.cookies;
        jwt.verify(token, secret, {}, (err, info) => {
            if (err) throw err;
            res.json(info);
        })
    })

    app.post('/logout', (req, res) => {
        res.cookie('token', '').json('ok');
    })

    app.post('/post', uploadMiddleware.single('file'), async (req, res) => {
        const {originalname, path}= req.file;
        const parts = originalname.split('.');
        const ext = parts[parts.length - 1];
        const newPath = path+'.'+ext;
        fs.renameSync(path, newPath);

        const {token} = req.cookies;
        jwt.verify(token, secret, {}, async (err, info) => {
            if (err) throw err;
            const {title, summary, content} = req.body;
            const postDoc = await Post.create({
                title,
                summary,
                content,
                cover:newPath,
                author: info.id,
            });
            res.json(postDoc);
        })
    })

    app.get('/post', async (req, res) => {
        res.json(
            await Post.find()
            .populate('author', ['username'])
            .sort({createdAt : -1})
            .limit(20)
        );
    })



const PORT = 4000; // Or any other available port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});



// hneelabh
// Harsh3227@mongo

// Cluster1:  mongodb+srv://hneelabh:Harsh3227@mongo@diversediaries.p4c4xyx.mongodb.net/?retryWrites=true&w=majority&appName=DiverseDiaries
// Cluster2 : mongodb+srv://hneelabh13:ld7ZH6j1Bu3NiAPn@cluster0.6o7ss0s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

// USE CLUSTER 2 TO AVOID @ CONFLICT