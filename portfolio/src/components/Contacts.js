import React from 'react';
import {makeStyles} from '@material-ui/styles';
import Navbar from '../components/Navbar';
import { TextField,Grid,Box,Typography,Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';


const useStyles = makeStyles((theme)=>({
    form: {
        top:'30%',
        // left:'50%',
        transform:'translate(-50% -50%)',
        position:'absolute',
        
    },
    button: {
        marginTop:'1rem',
        color:'tomato',       
        border:'2px solid tomato'

    }
}))

const Contacts = () => {
    const classes = useStyles();
    return (
        <>
           <Navbar />
           <Box component="div" style={{background:'#233', height:'100vh'}}>
               <Grid container justify="center">
                <Box component="form" className={classes.form}>
                    <Typography variant="h5" style={{color:'tomato'}}>HIRE ME OR CONTACT ME...</Typography>
                    {/* <InputField  fullWidth={true} label="Name" variant="outlined"/> */}
                    <TextField 
                        id="outlined-basic" 
                        label="Name" 
                        variant="outlined"
                        fullWidth={true}
                        inputProps={{style:{color:'white',border:'1px solid white'}}} 
                        margin="dense" 
                        size="medium"/><br />
                    <TextField 
                        id="outlined-basic" 
                        label="Email" 
                        variant="outlined"
                        fullWidth={true}
                        inputProps={{style:{color:'white',border:'1px solid white'}}} 
                        margin="dense" 
                        size="medium"/><br/>
                    <TextField 
                        id="outlined-basic" 
                        label="Company Name" 
                        variant="outlined"
                        fullWidth={true}
                        inputProps={{style:{color:'white',border:'1px solid white'}}} 
                        margin="dense" 
                        size="medium"/><br/>
                        <Button endIcon={<SendIcon />}  fullWidth={true} className={classes.button}>
                            Contact me
                        </Button>
                </Box>
               </Grid>
           </Box>
           
        </>
    )
}

export default Contacts
