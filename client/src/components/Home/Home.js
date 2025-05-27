// import React, { useEffect, useState } from 'react';
// import { Grow, Container, Grid } from '@material-ui/core';
// import { useDispatch } from 'react-redux'
// import {getPosts} from '../../actions/posts.js'
// import Posts from '../Posts/Posts.js'
// import Form from '../Form/Form.js'
// import useStyles from './styles.js'
import
React, {
    useEffect,
    useState
} from 'react';
import {
    Grow,
    Container,
    Grid
} from '@material-ui/core';
import { useDispatch } from 'react-redux'
import { getPosts } from '../../actions/posts.js'
import Posts from '../Posts/Posts.js'
import Form from '../Form/Form.js'
import useStyles from './styles.js'
// Create the Home component
// This component is a functional component
// It uses the useState hook to create the currentId state
// It uses the useStyles hook to get the classes
// It uses the useDispatch hook to get the dispatch
// It uses the useEffect hook to get the posts
// It returns a Grow component
// The Grow component takes in the in prop
// The Grow component contains a Container component
// The Container component contains a Grid component
// The Grid component takes in the following props:
// container: true
// justifyContent: space-between
// alignItems: stretch
// spacing: 4
// The Grid component contains two Grid items
// The first Grid item takes in the following props:
// xs: 12
// sm: 7
// The first Grid item contains a Posts component
// The Posts component takes in the setCurrentId prop
// The second Grid item takes in the following props:
// xs: 12
// sm: 4
const Home = () => {
    console.log('CL:HOME COMPONENT');
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);
    return (
        <Grow in>
            <Container>
                <Grid container className={classes.mainContainer} justifyContent="space-between" alignItems="stretch" spacing={4} >
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}
export default Home;