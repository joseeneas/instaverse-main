// Importing makeStyles from @material-ui/core/styles
// makeStyles is a function that returns a hook (useStyles)
import { makeStyles } from '@material-ui/core/styles'
// Exporting the useStyles hook
// useStyles is a function that takes in the theme
// useStyles returns an object
// The object contains the following properties:
// mainContainer: an object that contains the following properties:
//  flexDirection: column
//  [theme.breakpoints.down('sm')]: an object that contains the following properties:
//   flexDirection: column-reverse
export default makeStyles((theme) => ({
    [theme.breakpoints.down('sm')]: {
        mainContainer: {
            flexDirection: " column-reverse",
        }
    }
}));