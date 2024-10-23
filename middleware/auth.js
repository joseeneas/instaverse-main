// Description: Middleware to authenticate the user
// This middleware checks if the user is authenticated.
// If the user is authenticated, it calls the next function.
// If the user is not authenticated, it returns an error.
import jwt from 'jsonwebtoken'
// This is the auth middleware.
// It checks if the user is authenticated.
// It gets the token from the request.
// It verifies the token.
// If the token is valid, it calls the next function.
// If the token is invalid, it returns an error.
const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]

        let decodedData
        if (token) {
            decodedData = jwt.verify(token, 'test')

            req.userId = decodedData?.id
        }
        next();

    } catch (error) {
        console.log(error);  // Debugging Message
    }
}
export default auth;