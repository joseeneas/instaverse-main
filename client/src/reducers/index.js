// import all reducers and combine them into one
import { combineReducers } from "redux";
// import reducers
import posts from './posts.js'
import auth from './auth.js'
// combine reducers
// export the combined reducers
export default combineReducers ({
    posts,
    auth
})