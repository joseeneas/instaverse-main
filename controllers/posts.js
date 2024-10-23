// This file contains the logic for the routes in the routes/posts.js file
// It imports the necessary modules.
import PostMessage from '../models/postMessage.js';
import mongoose    from 'mongoose';
// It exports the getPosts function.
// This function gets all the posts from the database.
// If there is an error, it returns a 404 status code.
// If there is no error, it returns a 200 status code.
export const getPosts = async (req, res) => {
    console.log('GET POSTS ROUTE');
    try {
        const postMessages = await PostMessage.find()
        res.status(200).json(postMessages)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};
// It exports the createPost function.
// This function creates a new post.
// It gets the post from the request body.
// It creates a new post with the post and the creator.
// It saves the new post.
// If there is an error, it returns a 409 status code.
// If there is no error, it returns a 201 status code.
export const createPost = async (req, res) => {
    console.log('CREATE POST ROUTE');
    const post = req.body;
    const newPost = new PostMessage({ ...post, creator: req.userId, createdAt: new Date().toISOString() })
    try {
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
};
// It exports the updatePost function.
// This function updates a post.
// It gets the id and the post from the request.
// It checks if the id is valid.
// If the id is not valid, it returns a 404 status code.
// It updates the post with the new post.
// If there is an error, it returns a 404 status code.
export const updatePost = async (req, res) => {
    console.log('UPDATE POST ROUTE');
    const { id: _id } = req.params
    const post = req.body
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, { new: true })
    res.json(updatedPost)
};
// It exports the deletePost function.
// This function deletes a post.
// It gets the id from the request.
// It checks if the id is valid.
// If the id is not valid, it returns a 404 status code.
// It deletes the post.
export const deletePost = async (req, res) => {
    console.log('DELETE POST ROUTE');
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');
    try {
        const post = await PostMessage.findById(_id);
        if (!post) return res.status(404).send('No post with that id');
        await PostMessage.findByIdAndDelete(_id);
        res.json({ message: 'Post deleted successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};
// It exports the likePost function.
// This function likes a post.
// It gets the id from the request.
// It checks if the id is valid.
// If the id is not valid, it returns a 404 status code.
// It finds the post with the id.
// It checks if the user has already liked the post.
// If the user has not liked the post, it likes the post.
// If the user has liked the post, it unlikes the post.
export const likePost = async (req, res) => {
    console.log('LIKE POST ROUTE');
    const { id } = req.params
    if (!req.userId) return res.json({ message: 'Unauthenticated' })
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');
    const post = await PostMessage.findById(id)
    const index = post.likes.findIndex((id) => id === String(req.userId))
    if (index === -1) {
        post.likes.push(req.userId)
    } else {
        post.likes = post.likes.filter(id => id !== String(req.userId))
    }
    const updatedPost = await PostMessage.findByIdAndUpdate(id, post, { new: true })
    res.json(updatedPost)
};