import 'dotenv/config';
import { connect } from 'mongoose';
import Post from './models/post.js'

const url = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.est9fpk.mongodb.net/?retryWrites=true&w=majority`;
console.log(`URL used: ${url}`);
const options = {
    dbName: 'mongo-client',
}

connect(url, options).then(() => {
    console.log('Mongoose connect success.')
}).catch((err) => {
    console.error('Mongoose connect failed.');
});

export const createPost = async (req, res, next) => {
    console.log("POST endpoint called.");

    const newPost = new Post ({
        title: req.body.title,
        content: req.body.content,
    });
    const result = await newPost.save();
    res.json(result);
};

export const getPosts = async (req, res, next) => {
    console.log("GET endpoint called.");
    const posts = await Post.find().exec();    
    res.json(posts);  
}