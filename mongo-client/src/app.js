import express from 'express';
import bodyParser  from 'body-parser';
import { createPost, getPosts } from './mongo-client.js';
const app = express();
// const mongoose = require('mongoose')
// mongoose.connect('mongodb+srv://pranayrokade86:MONGOPranay1004@cluster0.p03yraf.mongodb.net/test')
app.use(bodyParser.json());

app.post('/posts', createPost);

app.get('/posts', getPosts);

const PORT = 3000;
app.listen(PORT);
console.log(`Server started on port ${PORT}`);