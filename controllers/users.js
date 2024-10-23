// Importing the necessary modules.
// bcrypt is used to hash the password.
// jwt is used to generate a token.
// User is the model that is used to interact with the database.
// The signin function is used to sign in the user.
// The signup function is used to sign up the user.
import bcrypt from 'bcryptjs';
import jwt    from 'jsonwebtoken';
import User   from '../models/user.js'
// This is the route that implements the signin functionality.
// It first checks if the user exists in the database.
// If the user does not exist, it returns a 404 status code.
// If the user exists, it checks if the password is correct.
// If the password is incorrect, it returns a 404 status code.
// If the password is correct, it generates a token and returns a 200 status code.
// If there is another type of error, it returns a 500 status code.
export const signin = async (req, res) => {
    console.log('SIGIN ROUTE');
    const { email, password } = req.body
    try {
        const existingUser      = await User.findOne({ email })
        if (!existingUser)        return res.status(404).json({ message: "User does not exist" })
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password)
        if (!isPasswordCorrect)   return res.status(404).json({ message: 'Invalid Credentials' })
        const token             = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', { expiresIn: "1h" })
        res.status(200).json({ result: existingUser, token })
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" })
    }
}
// This is the route that implements the signup functionality.
// It first checks if the user exists in the database.
// If the user exists, it returns a 400 status code.
// It then checks if the password and confirmPassword match.
// If they don't match, it returns a 400 status code.
// It then hashes the password and creates the user.
// It generates a token and returns a 200 status code.
// If there is another type of error, it returns a 500 status code.
export const signup = async (req, res) => {
    console.log('SIGNUP ROUTE');
    const { email, password, confirmPassword, firstName, lastName } = req.body
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exists" })
        if (password !== confirmPassword) res.status(400).json({ message: "Passwords don't match" })
        const hashedPassword = await bcrypt.hash(password, 12)
        const result = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` })
        const token = jwt.sign({ email: result.email, id: result._id }, 'test', { expiresIn: "1h" })
        res.status(200).json({ result, token })
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" })
    }
};