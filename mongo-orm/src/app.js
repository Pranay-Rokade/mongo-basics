import express from 'express';
import bodyParser  from 'body-parser';
import { createPost, getPosts } from './mongo-orm.js';

const app = express();
app.use(bodyParser.json());

app.post('/posts', createPost);

app.get('/posts', getPosts);

const PORT = 3000;
app.listen(PORT);
console.log(`Server started on port ${PORT}`);