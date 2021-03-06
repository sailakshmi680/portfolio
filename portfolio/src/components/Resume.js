import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Typography,Box} from '@material-ui/core';
import Navbar from './Navbar';


const useStyles = makeStyles((theme) => ({
    mainContainer: {
        background: '#233',
    },
    timeLine: {
        position:'relative',
        padding:'1 rem',
        margin:'0 auto',       
        "&:before": {
            content:"''",
            position:'absolute',
            height:'100%',
            border:'1 px solid tan',
            right:'40px',
            top:'0'
        },
        "&:after": {
            content:"''",
            display:'table',
            clear:'both',            
        },
        // [theme.breakpoints.up('md')]: {
        //     padding:'2 rem',
        //     "&:before": {
        //         left:'calc(50% - 1px)',
        //         right:'auto'
        //     }           
        //   },
    },
    timeLineYear: {
        textAlign:'center',
        maxWidth:'9.375rem',
        margin:'0 3rem 0 auto',
        fontSize:'1.8rem',
        background:'tomato',
        color:'white',
        lineHeight:'1',
        padding:'0.5 rem 0 1rem',
        "&:before": {
            display:'none'
        },
        // [theme.breakpoints.up("md")]: {
        //     textAlign:'center',
        //     margin:"0 auto",
        // }
    }
}));

const Resume = () => {
    const classes = useStyles();
    return (
        <>
         <Navbar />
         <Box component="header" className={classes.mainContainer}>
             <Typography variant="h4" align="center">
                 Working Experience
             </Typography>
             <Box component="div" className={classes.timeLine}>
             <Typography variant="h2" align="center">
                 2014
             </Typography>
         </Box>
         </Box>
         
       </>
    )
}

export default Resume
