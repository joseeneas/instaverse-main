// Desc: Actions for Posts
// Import the FETCH_ALL, CREATE, UPDATE, DELETE constants
// Import the api file
import {
    FETCH_ALL,
    CREATE,
    UPDATE,
    DELETE
} from '../constants/actionTypes.js';
import * as api                              from '../api';
// Create the getPosts action
// This action is an async function that dispatches the FETCH_ALL action with the data from the api
// It catches any errors and logs them to the console
// It gets all the posts from the database
export const getPosts = () => async (dispatch) => {
    console.log('CL:GET POSTS ACTION');
    try {
        const { data } = await api.fetchPosts()
        dispatch({ type: FETCH_ALL, payload: data })
    } catch (error) {
        console.log(error.message);  // Debugging Message
    }
};
// Create the createPost action
// This action takes in the post
// This action is an async function that dispatches the CREATE action with the data from the api
// It catches any errors and logs them to the console
// It creates a new post
export const createPost = (post) => async (dispatch) => {
    console.log('CL:CREATE POST ACTION');
    try {
        const { data } = await api.createPost(post)
        dispatch({ type: CREATE, payload: data })
    } catch (error) {
        console.log(error);          // Debugging Message
    }
};
// Create the updatePost action
// This action takes in the id and the post
// This action is an async function that dispatches the UPDATE action with the data from the api
// It catches any errors and logs them to the console
// It updates a post
export const updatePost = (id, post) => async (dispatch) => {
    console.log('CL:UPDATE POST ACTION');
    try {
        const { data } = await api.updatePost(id, post)
        dispatch({ type: UPDATE, payload: data })
    } catch (error) {
        console.log(error.message);  // Debugging Message
    }
};
// Create the deletePost action
// This action takes in the id
// This action is an async function that dispatches the DELETE action with the data from the api
// It catches any errors and logs them to the console
// It deletes a post
export const deletePost = (id) => async (dispatch) => {
    console.log('CL:DELETE POST ACTION');
    try {
        await api.deletePost(id)
        dispatch({ type: DELETE, payload: id })
    } catch (error) {
        console.log(error.message);  // Debugging Message
    }
};
// Create the likePost action
// This action takes in the id
// This action is an async function that dispatches the UPDATE action with the data from the api
// It catches any errors and logs them to the console
// It likes a post
export const likePost = (id) => async (dispatch) => {
    console.log('CL:LIKE POST ACTION');
    try {
        const { data } = await api.likePost(id)
        dispatch({ type: UPDATE, payload: data })
    } catch (error) {
        console.log(error.message);  // Debugging Message
    }
};