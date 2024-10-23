// Desc: NavBar component for the application
// Import React, useState, useEffect, AppBar, Avatar, Button, Toolbar, Typography, useStyles, Instaverse, Link, useNavigate, useLocation, useDispatch, and jwtDecode
import React, { useState, useEffect }     from 'react'
import {
    AppBar,
    Avatar,
    Button,
    Toolbar,
    Typography
}                                         from '@mui/material';
import useStyles                          from './styles.js';
import Instaverse                         from '../../images/Instaverse.png';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch }                    from 'react-redux'
import { jwtDecode }                      from 'jwt-decode'
// Create the NavBar component
// This component is a functional component
// It uses the useState hook to create the user state
// It uses the useStyles hook to get the classes
// It uses the useDispatch hook to get the dispatch
// It uses the useNavigate hook to get the history
// It uses the useLocation hook to get the location
// It uses the useEffect hook to check the token
// It uses the logout function to log the user out
// It returns an AppBar component
// The AppBar component takes in the className, position, and color props
// The AppBar component contains a div element
// The div element takes in the className prop
// The div element contains a Typography component
// The Typography component takes in the className, component, to, variant, and align props
// The Typography component contains the following text:
//  instaverse
// The div element contains an img element
// The img element takes in the className, src, and alt props
// The img element contains the Instaverse image
// The AppBar component contains a Toolbar component
// The Toolbar component takes in the className prop
// The Toolbar component contains a div element
// The div element takes in the className prop
// If there is a user, the div element contains an Avatar component
// The Avatar component takes in the className, alt, src, and children props
// The Avatar component contains the first letter of the user's name
// The div element contains a Typography component
// The Typography component takes in the className and variant props
// The Typography component contains the user's name
// The div element contains a Button component
// The Button component takes in the className, variant, onClick, and color props
// The Button component contains the text Logout
// Otherwise, the div element contains a Button component
// The Button component takes in the component, to, variant, and color props
// The Button component contains the text Sign In
export const NavBar = () => {
    console.log('CLIENT - NAVBAR');
    const classes = useStyles()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const dispatch = useDispatch()
    const history = useNavigate()
    const location = useLocation()
    const logout = () => {
        dispatch({ type: 'LOGOUT' })
        history('/auth')
        setUser(null)
    }
    useEffect(() => {
        const token = user?.token
        if (token) {
            const decodedToken = jwtDecode(token)
            if (decodedToken.exp * 1000 < new Date().getTime()) logout()
        }
        setUser(JSON.parse(localStorage.getItem('profile')))
        // eslint-disable-next-line
    }, [location, user?.token])
    return (
        <AppBar className={classes.appBar} position="static" color="inherit"  >
            <div className={classes.brandContainer}>
                <Typography className={classes.heading} component={Link} to="/" variant="h2" align="center" >instaverse</Typography>
                <img className={classes.image} src={Instaverse} alt="instaverse" heigh="60" />
            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                        <Button className={classes.logout} variant="contained" onClick={logout} color="secondary">Logout</Button>
                    </div>
                ) : (<Button component={Link} to="/auth" variant="contained" color="primary" >Sign In</Button>)}
            </Toolbar>
        </AppBar>
    )
};