// Desc: API calls to the server
// Import axios, the library used to make HTTP requests
import axios from 'axios';
// Create an instance of axios with the base URL of the server
// This instance will be used to make all the API calls
// It also intercepts the request to add the Authorization header
// This header contains the token from the localStorage
/**
 * Creates an instance of axios with a predefined base URL.
 * 
 * @constant {AxiosInstance} API - An axios instance configured with the base URL 'http://localhost:8080'.
 */
const API = axios.create({ baseURL: 'http://localhost:8080' });
API.interceptors.request.use((req) => {
    console.log('CL:API:REQ INTERCEPTOR');
    if (localStorage.getItem('profile')) {
        console.log('CL:API:REQ INTERCEPTOR:AUTH HEADER');
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req;
})
// Export the API calls
// These calls are used in the actions
// They are used to make requests to the server
// They are used to get, create, update, and delete posts
// They are used to like a post
// They are used to sign in and sign up
export const fetchPosts = ()                => API.get('/posts');
export const createPost = (newPost)         => API.post('/posts', newPost);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id)              => API.delete(`/posts/${id}`);
export const likePost   = (id)              => API.patch(`/posts/${id}/likePost`);
export const signIn     = (formData)        => API.post('/user/signin', formData)
export const signUp     = (formData)        => API.post('/user/signup', formData);