// import React, useStyles, Card, CardActions, CardContent, CardMedia, Button, Typography, ThumbUpAlt, ThumbUpAltOutlined, 
// Delete, MoreHoriz, moment, useDispatch, deletePost, likePost
import React     from 'react'
import useStyles from './styles.js'
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
}                from '@material-ui/core';
import {
    ThumbUpAlt,
    ThumbUpAltOutlined,
    Delete,
    MoreHoriz
}                from '@material-ui/icons';
import moment    from 'moment';
import {
    useDispatch
}                from 'react-redux';
import {
    deletePost,
    likePost
}                from '../../../actions/posts.js';
// Post component
// @param post, setCurrentId
// @returns Card component with post details
// @exports Post
const Post = ({ post, setCurrentId }) => {
    console.log('CL:POSTS:POST');
    const classes  = useStyles();
    const dispatch = useDispatch()
    const user     = JSON.parse(localStorage.getItem('profile'))
    const Likes = () => {
        if (post.likes.length > 0) {
            return post.likes.find((like) => like === user?.result?._id)
                ? (<><ThumbUpAlt fontSize="small" />&nbsp;{post.likes.length > 2
                    ? `You and ${post.likes.length - 1} others`
                    : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}`}</>)
                : (<><ThumbUpAltOutlined fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1
                    ? 'Like'
                    : 'Likes'}</>);
        }
        return <> <ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>
    }
    return (
        <Card className={classes.card} >
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title}></CardMedia>
            <div className={classes.overlay}>
                <Typography variant="h6">{post.name}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            {(user?.result?._id === post?.creator) && (
                <div className={classes.overlay2}>
                    <Button
                        style={{ color: "white" }}
                        size="small"
                        onClick={() => { setCurrentId(post._id) }}>
                        <MoreHoriz fontSize="medium" />
                    </Button>
                </div>
            )}
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">
                    {post.tags.map((tag) => `#${tag} `)}
                </Typography>
            </div>
            <Typography className={classes.title} variant="h5"
                gutterBottom>
                {post.title}
            </Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" disabled={!user?.result} onClick={() => dispatch(likePost(post._id))}>
                    <Likes />
                </Button>
                {(user?.result?._id === post?.creator) && (
                    <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
                        <Delete fontSize="small" />
                        Delete
                    </Button>
                )}
            </CardActions>
        </Card>
    )
}
export default Post;