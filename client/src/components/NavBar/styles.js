// Desc: Styles for NavBar component
// imports makeStyles from Material UI core styles and deepPurple from Material UI core colors
import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';
// exports styles for NavBar component
export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 50px',
        backgroundColor: '#efefef',
    },
    heading: {
        color: 'rgba(0, 183, 255, 1)',
        fontWeight: '400',
        textTransform: 'lowercase',
        textDecoration: 'none',
    },
    image: {
        marginLeft: '15px',
        margin: '10px 0 10px 15px',
        height: '60px',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '400px',
    },
    profile: {
        display: "flex",
        justifyContent: 'space-between',
        width: '400px',
    },
    userName: {
        display: 'flex',
        alignItems: 'center',
    },
    brandContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    }
}));