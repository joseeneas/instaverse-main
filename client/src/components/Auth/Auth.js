// Desc: Auth component for user to sign in or sign up
// Import the useState, Avatar, Button, Paper, Grid, Typography, Container, LockOutlined, Input, useNavigate, signin, signup, useDispatch, and useStyles
// Import the InitialState from the Input component
// Import the auth actions
import React, { useState } from 'react';
import {
    Avatar, 
    Button,
    Paper,
    Grid,
    Typography,
    Container
}                          from '@material-ui/core';
import useStyles           from './styles.js';
import { LockOutlined }    from '@material-ui/icons';
import Input               from './Input.js';
import { useNavigate }     from 'react-router-dom';
import { signin, signup }  from '../../actions/auth';
import { useDispatch }     from 'react-redux'; 
const InitialState = { firstName: "", lastName: "", email: "", password: "", confirmPassword: "" };
// Create the Auth component
// This component is a functional component
// It takes in no props
// It uses the useState hook to create the showPassword, formData, and isSignUp states
// It uses the useStyles hook to get the classes
// It uses the useNavigate hook to get the history
// It uses the useDispatch hook to get the dispatch
const Auth = () => {
    console.log('CL:AUTH COMPONENT');
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData]         = useState(InitialState);
    const [isSignUp, setIsSignUp]         = useState(false);
    const classes                         = useStyles();
    const history                         = useNavigate();
    const dispatch                        = useDispatch();
    const handleSubmit                    = (e) => {
        e.preventDefault();
        if (isSignUp) {
            dispatch(signup(formData, history));
        } else {
            dispatch(signin(formData, history));
        }
    }
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)
    const switchMode = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp)
        setShowPassword(false)
    }
    return (
        <div>
            <Container
                component="main"
                maxWidth="xs">
                <Paper
                    className={classes.paper}
                    elevation={3}>
                    <Avatar
                        className={classes.avatar}>
                        <LockOutlined />
                    </Avatar>
                    <Typography variant="h5">{isSignUp ? 'Sign Up' : 'Sign in'} </Typography>
                    <form
                        className={classes.form}
                        onSubmit={handleSubmit}>
                        <Grid
                            container
                            spacing={2}>
                            {
                                isSignUp && (
                                    <>
                                        <Input
                                            name="firstName"
                                            label="First Name"
                                            handleChange={handleChange}
                                            autoFocus half />
                                        <Input
                                            name="lastName"
                                            label="Last Name"
                                            handleChange={handleChange}
                                            half />
                                    </>
                                )
                            }
                            <Input
                                name="email"
                                label="Email Address"
                                handleChange={handleChange}
                                type="email"
                            />
                            <Input
                                name="password"
                                label="Password"
                                handleChange={handleChange}
                                type={showPassword ? 'text' : 'password'}
                                handleShowPassword={handleShowPassword}
                            />
                            {isSignUp && <Input
                                name="confirmPassword"
                                label="Repeat Password"
                                handleChange={handleChange}
                                type="password" />}
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}>
                            {isSignUp ? 'Sign Up' : 'Sign In'}
                        </Button>
                        <Grid
                            container
                            justifyContent="flex-end"
                        >
                            <Button onClick={switchMode}>
                                {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign Up"}
                            </Button>
                        </Grid>
                    </form>
                </Paper>
            </Container>
        </div>
    )
}
export default Auth;