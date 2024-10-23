// import required modules
import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";
// create a reducer function with posts = [] and action as parameters
// inside the function, create a switch case with action.type as the argument
// inside the switch case, create a case for DELETE
// return posts.filter((post) => post._id !== action.payload)
// inside the switch case, create a case for UPDATE
// return posts.map((post) => post._id === action.payload._id ? action.payload : post);
// inside the switch case, create a case for FETCH_ALL
// return action.payload;
// inside the switch case, create a case for CREATE
// return [...posts, action.payload];
// create a default case for the switch case
// return posts
// export the reducer function
// eslint-disable-next-line import/no-anonymous-default-export
export default (posts = [], action) => {
    switch (action.type) {
        case DELETE:
            return posts.filter((post) => post._id !== action.payload)
        case UPDATE:
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...posts, action.payload];
        default:
            return posts;
    }
}