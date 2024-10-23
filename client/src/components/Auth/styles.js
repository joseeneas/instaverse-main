// Desc: Styles for the Auth component
// Import the makeStyles component from Material UI
import { makeStyles } from '@material-ui/core/styles';
// Create the useStyles hook
// This hook takes in the theme
// It returns an object
// The object contains the following properties:
export default makeStyles((theme) => ({ 
    // paper: an object that contains the following properties:
    //  marginTop: the margin top
    //  display: flex
    //  flexDirection: column
    //  alignItems: center
    //  padding: the padding
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(2)
    },
    // root: an object that contains the following properties:
    //  '&MuiTextField-root': an object that contains the following properties:
    //   margin: the margin
    root: {
        '&MuiTextField-root': {
            margin: theme.spacing(1)
        },
    },
    // avatar: an object that contains the following properties:
    //  margin: the margin
    //  backgroundColor: the background color
    avatar: {
        margin:theme.spacing(1),
        backgroundColor:theme.palette.secondary.main
    },
    // form: an object that contains the following properties:
    //  width: 100%
    //  marginTop: the margin top
    form: {
        width: '100%',
        marginTop: theme.spacing(3)
    },
    // submit: an object that contains the following properties:
    //  margin: the margin
    submit: {
        margin:theme.spacing(3, 0, 2)
    },
    // googleButton: an object that contains the following properties:
    //  marginBottom: the margin bottom
    googleButton: {
        marginBottom: theme.spacing(2)
    }
}));