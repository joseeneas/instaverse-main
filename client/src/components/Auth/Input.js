// Desc: Input component for Auth form
// Import React
// Import the TextField, Grid, InputAdornment, and IconButton components from Material UI
// Import the Visibility and VisibilityOff icons from Material UI
import React from 'react'
import {
    TextField,
    Grid,
    InputAdornment,
    IconButton
} from '@material-ui/core'
import { Visibility, VisibilityOff }                   from '@material-ui/icons'
// Create the Input component
// This component is a functional component
// It takes in the name, label, handleChange, half, autoFocus, type, and handleShowPassword props
// It returns a TextField component
// The TextField component takes in the following props:
// name: the name of the input field
// label: the label of the input field
// onChange: the handleChange function
// variant: outlined
// required: true
// fullWidth: true
// autoFocus: the autoFocus prop
// type: the type prop
// InputProps: an object that contains the endAdornment prop
// endAdornment: an InputAdornment component that contains an IconButton component
// The IconButton component takes in the following props:
// onClick: the handleShowPassword function
const Input = ({ name, label, handleChange, half, autoFocus, type, handleShowPassword }) => {
    console.log('CLIENT - INPUT COMPONENT');
    return (
        <Grid item xs={12} sm={half ? 6 : 12}>
            <TextField
                name={name}
                label={label}
                onChange={handleChange}
                variant="outlined"
                required
                fullWidth
                autoFocus= {autoFocus}
                type={type}
                InputProps= {name === 'password' ? {
                    endAdornment: ( 
                        <InputAdornment position="end">
                            <IconButton onClick={handleShowPassword}>
                                {type === 'password' ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    )
                } : null} />
        </Grid>
    )
}
export default Input;