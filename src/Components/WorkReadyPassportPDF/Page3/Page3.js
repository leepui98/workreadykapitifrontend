import Button from "@material-ui/core/Button";
import React from 'react';
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import './index.css';

const Page3 = ( props ) => {

    const goForward = (e) => {
        props.goForward(e.target.value);
    }

    const goBackward = (e) => {
        props.goBackward(e.target.value);
    }

return (
    <div>
        <Grid container spacing={2}>
            <Grid item xs={2}/>
            <Grid item xs={8}>
    <h3> Congratulations for choosing to strive for the Work Ready Passport, { /* get full name prop from WorkReadyPassportHandler */}</h3>
        <p>
        Completing the Work Ready Passport will assist you to develop the knowledge and skills that are required by
employers.
        </p>
        <TextField
        multiline 
rows={12}
variant="filled"
fullWidth
label="Employment Goals:">
        </TextField>
        </Grid>
        <Grid item xs={2}/>
        </Grid>
        <Button className= "Button" onClick={goBackward}>Previous Step</Button>
    <Button className= "Button" onClick={goForward}>Next Step</Button>
    </div>
)

}
export default Page3;