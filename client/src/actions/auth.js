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
    console.log('CLIENT - AUTH - SIGNIN ACTION');
    try {
        // login the user
        const { data } = await api.signIn(formData)
        dispatch({ type: AUTH, data })
        history('/')
    } catch (error) {
        console.log(error); // Debugging Message
    }
};
// Create the signup action
// This action takes in the formData and the history
// It is an async function that dispatches the AUTH action with the data from the api
// It catches any errors and logs them to the console
export const signup = (formData, history) => async (dispatch) => {
    console.log('CLIENT - AUTH - SIGNUP ACTION');
    try {
        // sign up the user
        const { data } = await api.signUp(formData)
        dispatch({ type: AUTH, data })
        history('/')
    } catch (error) {
        console.log(error);  // Debugging Message
    }
};