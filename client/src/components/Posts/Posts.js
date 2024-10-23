// It is the main component that will display all the posts. It will use the Post component to display each post.
// It will also use the useSelector hook from react-redux to get the posts from the global store.
// It will also use the CircularProgress component from Material-UI to show a loading spinner while the posts are being fetched.
// It will also use the Grid component from Material-UI to display the posts in a grid layout.
import React from 'react'
import Post from './Post/Posts'
import useStyles from './styles.js'
import { useSelector } from 'react-redux'
import { Grid, CircularProgress } from '@material-ui/core'
// create a functional component Posts that takes setCurrentId as a prop
// inside the component, get the classes from the styles.js file
// get the posts from the global store using the useSelector hook
// if there are no posts, return a CircularProgress component
// otherwise, return a Grid component with container, alignItems, and spacing props
// inside the Grid component, map through the posts and return a Grid item for each post
// each Grid item will have a key prop with the post._id, sx prop with 12 and sm, and a Post component with post and setCurrentId props
// export the Posts component
const Posts = ({ setCurrentId }) => {
    console.log('CLIENT - POSTS');
    const classes = useStyles();
    const posts = useSelector((state) => state.posts)
    return (
        !posts.length ? <CircularProgress /> :
            <Grid className={classes.container} container alignItems="stretch" spacing={3} >
                {posts.map(post => (
                    <Grid key={post._id} item sx={12} sm={6}  >
                        <Post post={post} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
    )
}
export default Posts;