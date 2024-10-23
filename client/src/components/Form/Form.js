// Desc: Form component for creating and editing posts
// Import React, useState, useEffect, useStyles, TextField, Button, Typography, Paper, FileBase, useDispatch, useSelector, createPost, and updatePost
// Import the posts from the actions
import React, { useState, useEffect } from 'react'
import useStyles from './styles.js'
import {
    TextField,
    Button,
    Typography,
    Paper
} from '@material-ui/core'
import FileBase from 'react-file-base64'
import {
    useDispatch,
    useSelector
} from 'react-redux'
import {
    createPost,
    updatePost
} from '../../actions/posts'
// Create the Form component
// This component is a functional component
// It takes in the currentId and setCurrentId props\
// It uses the useState hook to create the postData state
// It uses the useStyles hook to get the classes
// It uses the useDispatch hook to get the dispatch
// It uses the useSelector hook to get the posts
// It uses the useEffect hook to set the post data
// It uses the handleSubmit function to handle the form submission
// It uses the clear function to clear the form
// If there is no user, it returns a Paper component with a Typography component
// The Typography component takes in the variant prop
// The Typography component contains the following text:
// Please Sign In to create your own posts and like other's posts.
// Otherwise, it returns a Paper component
// The Paper component contains a form element
// The form element takes in the autoComplete, noValidate, and className props
// The form element contains a Typography component
// The Typography component takes in the variant prop
// The Typography component contains the following text:
// Editing or Creating a Post
// The form element contains three TextField components
// The first TextField component takes in the name, variant, label, fullWidth, value, and onChange props
// The second TextField component takes in the name, variant, label, fullWidth, value, and onChange props
// The third TextField component takes in the name, variant, label, fullWidth, value, and onChange props
// The form element contains a div element
// The div element takes in the className prop
// The div element contains a FileBase component
// The FileBase component takes in the type, multiple, and onDone props
// The form element contains two Button components
// The first Button component takes in the className, variant, color, size, type, and fullWidth props
// The second Button component takes in the variant, color, size, onClick, and fullWidth props
const Form = ({ currentId, setCurrentId }) => {
    console.log('CLIENT - FORM COMPONENT');
    const [postData, setPostData] = useState({ title: '', message: '', tags: '', selectedFile: '' });
    const post                    = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null)
    const classes                 = useStyles();
    const dispatch                = useDispatch()
    const user                    = JSON.parse(localStorage.getItem('profile'))
    useEffect(() => {
        if (post) setPostData(post)
    }, [post])
    const handleSubmit = (e) => {
        e.preventDefault()
        if (currentId) {
            dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }))
        } else {
            dispatch(createPost({ ...postData, name: user?.result?.name }))
        }
        clear()
    }
    const clear = () => {
        setCurrentId(null)
        setPostData({ title: '', message: '', tags: '', selectedFile: '' })
    }
    if (!user?.result?.name) {
        return (
        <Paper className={classes.paper}>
            <Typography variant="h6" align="center">Please Sign In to create your own posts and like other's posts.
            </Typography>
        </Paper>
        );
    }
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? 'Editing' : 'Creating'} a Post</Typography>
                <TextField
                    name="title"
                    variant="outlined"
                    label="Title"
                    fullWidth
                    value={postData.title}
                    onChange={(e) => setPostData({ ...postData, title: e.target.value })}>
                </TextField>
                <TextField
                    name="message"
                    variant="outlined"
                    label="Message"
                    fullWidth
                    value={postData.message}
                    onChange={(e) => setPostData({ ...postData, message: e.target.value })}>
                </TextField>
                <TextField
                    name="tags"
                    variant="outlined"
                    label="Tags"
                    fullWidth
                    value={postData.tags}
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}>
                </TextField>
                <div className={classes.fileInput}>
                    <FileBase
                        type="file" multiple={false}
                        onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
                </div>
                <Button
                    className={classes.buttonSubmit}
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                    fullWidth>Submit</Button>
                <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    onClick={clear}
                    fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}
export default Form;