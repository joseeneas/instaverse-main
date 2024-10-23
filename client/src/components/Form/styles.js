// Desc: Styles for the form component
// Import the makeStyles component from Material UI
import { makeStyles } from '@material-ui/core/styles';
// Create the useStyles hook
export default makeStyles((theme) => ({
    // root: an object that contains the following properties:
    //  '& .MuiTextField-root': an object that contains the following properties:
    //   margin: the margin
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1)
        },
    },
    // paper: an object that contains the following properties:
    //  padding: the padding
    paper: {
        padding: theme.spacing(2)
    },
    // form: an object that contains the following properties:
    //  display: flex
    //  flexWrap: wrap
    //  justifyContent: center
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    // fileInput: an object that contains the following properties:
    //  width: 97%
    //  margin: 10px 0
    fileInput: {
        width: '97%',
        margin: '10px 0'
    },
    // buttonSubmit: an object that contains the following properties:
    buttonSubmit: {
        marginBottom: 10
    }
}));