// import required modules
import { AUTH, LOGOUT } from "../constants/actionTypes";
// create a reducer function authReducer with state = { authData: null } and action as parameters
// inside the function, create a switch case with action.type as the argument
// inside the switch case, create a case for AUTH
// inside the case, set localStorage item 'profile' to JSON.stringify({ ...action?.data })
// return an object with state and authData as properties
// inside the object, set authData to action?.data
// create a case for LOGOUT
// inside the case, clear localStorage
// return an object with state and authData as properties
// inside the object, set authData to null
// create a default case for the switch case
// return the state
// export the authReducer function
const authReducer = (state = { authData: null }, action) => {
    console.log('CLIENT - AUTH REDUCER:', action.type);
    switch (action.type) {
        case AUTH:
            console.log('CLIENT - AUTH REDUCER:', action.type);
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
            return { ...state, authData: action?.data };
        case LOGOUT:
            console.log('CLIENT - AUTH REDUCER:', action.type);
            localStorage.clear();
            return { ...state, authData: null };
        default:
            return state;
    }
}
export default authReducer;