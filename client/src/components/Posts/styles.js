// Desc: Styles for the Posts component
// The makeStyles hook from Material-UI is used to create a custom hook called useStyles.
// The useStyles hook takes a theme as an argument and returns an object.
// The object contains the mainContainer, smMargin, and actionDiv properties.
// The mainContainer property is an object that contains display and alignItems properties.
// The smMargin property is an object that contains the margin property.
// The actionDiv property is an object that contains the textAlign property.
// The useStyles hook is exported.
// The useStyles hook is used in the Posts component to get the classes object.
// The classes object is used to apply styles to the components in the Posts component.
// The styles.js file is imported in the Posts component.
// The useStyles hook is imported in the Posts component.
import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({
   mainContainer: {
      display: 'flex',
      alignItems: 'center',
   },
   smMargin: {
      margin: theme.spacing(1),
   },
   actionDiv: {
      textAlign: 'center',
   },
}));