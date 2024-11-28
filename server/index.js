// This file serves as the entry point for the Node.js application.
// These imports bring in various modules and packages that are essential for building a web application.
// 1.  import express from 'express' - This line imports the Express framework, which is a minimal and 
//     flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
//     Express is commonly used to build APIs and handle HTTP requests and responses.
// 2.  import bodyParser from 'body-parser' - This line imports the `body-parser` middleware, 
//     which is used to parse incoming request bodies in a middleware before your handlers, 
//     available under the `req.body` property. It is particularly useful for parsing JSON and URL - encoded data.
// 3.  import mongoose from 'mongoose' - This line imports Mongoose, an Object Data Modeling(ODM) library for MongoDB and Node.js.
//     Mongoose provides a straightforward, schema - based solution to model your application data, including built-in type casting, 
//     validation, query building, and business logic hooks.
// 4.  import cors from 'cors' - This line imports the cors middleware, which stands for Cross-Origin Resource Sharing. 
//     It allows you to configure your web application to accept requests from different origins, 
//     which is essential for enabling cross - origin requests in web applications.
// 5.  import dotenv from 'dotenv' - This line imports the dotenv package, 
//     which loads environment variables from a.env file into process.env.
//     This is useful for managing configuration settings and sensitive information 
//     like API keys and database credentials in a secure and organized manner. 
// 6.  import path from 'path' - This line imports the path module, which is a core Node.js 
//     module that provides utilities for working with file and directory paths.
//     It helps in resolving and manipulating file paths in a way that is consistent across different operating systems.
// 7.  import postRoutes from './routes/posts.js' - This line imports the routes defined in the posts.js 
//     file located in the routes directory. These routes are likely related to 
//     handling HTTP requests for post - related operations, such as creating, reading, updating, and deleting posts.
// 8.  import userRoutes from './routes/users.js' - Similar to the previous import, 
//     this line imports the routes defined in the users.js file located in the routes directory.
//     These routes are likely related to handling HTTP requests for user - related operations, 
//     such as user registration, authentication, and profile management.
import express    from 'express';
import bodyParser from 'body-parser';
import mongoose   from 'mongoose';
import cors       from 'cors';
import dotenv     from 'dotenv';
import path       from 'path';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';
// Create an instance of the Express application
const app = express();
// Configure the application to use various middleware and settings
// The `dotenv.config()` method loads environment variables from a .env file into process.env.
// This is useful for managing configuration settings and sensitive information like API keys 
// and database credentials in a secure and organized manner.
dotenv.config();
// The `app.use()` method is used to add middleware to the application's request handling pipeline.
// In this case, we are adding the `body-parser` middleware to parse incoming request bodies.
// We are also enabling CORS to allow requests from different origins.
app.use(bodyParser.json      ({ limit: "32mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "32mb", extended: true }));
app.use(cors());
// The `app.use()` method is used to add routes to the application.
// In this case, we are adding the postRoutes and userRoutes to handle requests related to posts and users, respectively.
app.use('/posts', postRoutes);
app.use('/user',  userRoutes);
console.log('App starting up ...');
// The `app.get()` method is used to define a route that responds to HTTP GET requests.
// In this case, we are defining a route that serves the React application in production.
// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}
// The `mongoose.connect()` method is used to connect to a MongoDB database using the connection string 
// specified in the environment variables.
// The `app.listen()` method is used to start the Express server and listen for incoming requests on a specified port.
// The `process.env.PORT` variable is used to determine the port number, with a default value of 8080.
// If the connection is successful, a message is logged to the console indicating that the server is running.
// If an error occurs during the connection process, the error message is logged to the console.
const PORT = process.env.PORT || 8080;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/instaverse", ({
}))
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch(err => console.log(err.message));
console.log('App started ...');