import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Avatar,Typography,Grid,Box} from '@material-ui/core';
import Typed from 'react-typed';
import avatar from '../avatar.png';

const useStyles = makeStyles(theme => ({
    avatar: {
        width:theme.spacing(15),
        height: theme.spacing(15),
        margin:theme.spacing(1)
    },
    title: {
        color: 'tomato'
    },
    subtitle: {
        color: 'tan',
        marginBottom:'3rem'
    },
    typedContainer: {
        position:'absolute',
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)',
        width:'100vw',
        textAlign:'center',
        zIndex:1

    }
}))

const Header = () => {
    const classes = useStyles();
    return (
        <Box className={classes.typedContainer}>
        <Grid container justify='center'>
            <Avatar src={avatar} alt="sai lakshmi" className={classes.avatar} />
        </Grid>
            
            <Typography variant="h4" className={classes.title}>
                <Typed strings={["sai Lakshmi"]} typeSpeed={40} />
            </Typography>
            <br />
            <Typography variant="h4" className={classes.subtitle} >
                <Typed 
                strings={["Web Design", "Web Development" , "MERN Stack"]} 
                typeSpeed={40}
                backSpeed={60} />
            </Typography>
        </Box>
    )
}

export default Header
