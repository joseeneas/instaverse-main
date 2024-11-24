// Desc: Actions for the authentication of the user
// Import the AUTH and api constants
// Import the api file
import { AUTH } from '../constants/actionTypes.js';
import * as api from '../api';
// Create the signin action
// This action takes in the formData and the history
// It is an async function that dispatches the AUTH action with the data from the api
// It catches any errors and logs them to the console
export const signin = (formData, history) => async (dispatch) => {
    console.log('CL:AUTH:SIGNIN ACTION');
    try {
        //  
        // signin the user
        //
        // const { data } = await api.signIn(formData) - 
        // This line uses the await keyword to wait for the signIn function from the api object to complete.
        // The signIn function is called with formData, which likely contains user credentials such as username 
        // and password.
        // The await keyword ensures that the code execution pauses until the signIn function resolves, 
        // returning a response.The response is then destructured to extract the data property, 
        // which contains the relevant information from the server, such as user details or a token.
        const { data } = await api.signIn(formData)
        // dispatch({ type: AUTH, data }) -
        // This line dispatches an action to a Redux store.
        // The dispatch function is used to send actions to the Redux store, which then updates the state 
        // based on the action type and payload. In this case, the action type is AUTH, and the payload 
        // is the data obtained from the previous line. This action updates the authentication state
        // in the Redux store, such as storing the user information or authentication token.
        dispatch({ type: AUTH, data })
        // history('/') -
        // This line uses the history object to navigate to a different route in the application.
        // The history object is commonly used in React applications with React Router for programmatic navigation.
        // By calling history('/'), the application redirects the user to the root path('/'), 
        // which is the home page. 
        // This redirection usually occurs after a successful sign -in to take the user to the main part of the application.
        history('/')
    } catch (error) {
        console.log(error);
    }
};
// Create the signup action
// This action takes in the formData and the history
// It is an async function that dispatches the AUTH action with the data from the api
// It catches any errors and logs them to the console
/**
 * Action creator for signing up a user.
 *
 * @param {Object} formData - The form data containing user information for sign up.
 * @param {Object} history - The history object for navigation.
 * @returns {Function} A function that takes dispatch as an argument and performs the sign up process.
 */
export const signup = (formData, history) => async (dispatch) => {
    console.log('CL:AUTH:SIGNUP ACTION');
    try {
        // sign up the user
        const { data } = await api.signUp(formData)
        dispatch({ type: AUTH, data })
        history('/')
    } catch (error) {
        console.log(error);
    }
};