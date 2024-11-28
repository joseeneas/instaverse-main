// Description: Middleware to authenticate the user
// This middleware checks if the user is authenticated.
// If the user is authenticated, it calls the next function.
// If the user is not authenticated, it returns an error.
import jwt from 'jsonwebtoken';
const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        let decodedData;
        if (token) {
            decodedData = jwt.verify(token, 'test');
            req.userId  = decodedData?.id;
        }
        next();
    } catch (error) {
        console.log(error);  // Debugging Message
    }
}
export default auth;