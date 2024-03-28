import 'dotenv/config';
import mongoose from 'mongoose';

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb+srv://pranayrokade86:MONGOPranay1004@cluster0.p03yraf.mongodb.net/test').then(
    console.log("mongodb connected")
)
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Define the Post schema
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
});

// Create the Post model
const Post = mongoose.model('Post', postSchema);

// Create Post endpoint
export const createPost = async (req, res, next) => {
  console.log("POST endpoint called.");

  const newPost = new Post({
    title: req.body.title,
    content: req.body.content,
  });

  try {
    await newPost.save();
    res.json(newPost);
  } catch (error) {
    res.json({ message: 'Error creating post.' });
  }
};

// Get Posts endpoint
export const getPosts = async (req, res, next) => {
  console.log("GET endpoint called.");

  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.json({ message: 'Error fetching posts.' });
  }
};
