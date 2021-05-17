import React,{ useState } from 'react';
import {Link} from 'react-router-dom';
import {AppBar,Toolbar,Box,Avatar,Divider,List,ListItem,ListItemText, IconButton,Typography, ListItemIcon } from '@material-ui/core';
import {ArrowBack,AssignmentInd,Home,Apps,ContactMail} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import avatar from '../avatar.png';
import Drawer from '@material-ui/core/Drawer';

// CSS STYLES

const useStyles = makeStyles(theme => ({
    menuSliderContainer: {
        width:'250px',
        background:'#511',
        height:'100%'
    },
    avatar: {
        display:'block',
        margin:'0.5rem auto',
        width:theme.spacing(13),
        height:theme.spacing(13)
    },
    ListItem: {
        color:'tan'
    }
}));

const menuItems = [
    {
        listIcon:<Home />,
        listText:'Home',
        listPath:'/'
    },
    {
        listIcon:<AssignmentInd />,
        listText:'Resume',
        listPath:'resume'
    },
    {
        listIcon:<Apps />,
        listText:'Portfolio',
        listPath:'portfolio'
    },
    {
        listIcon:<ContactMail />,
        listText:'Contacts',
        listPath:'contacts'
    },
];


const Navbar = () => {
    const [state, setstate] = useState({
        right:false
    });

    const toggleSlider = (slider, open) => () => {
        setstate({...state,[slider]:open})
    };
    const classes = useStyles();

    const sideList = slider => (
        <Box 
            component="div" 
            className={classes.menuSliderContainer}
            onClick={toggleSlider(slider,false)}>
            <Avatar className={classes.avatar} src={avatar} alt="sai" />
            <Divider />
            <List>
                    {menuItems.map((lstItem,index) => (
                        <ListItem  button key={index} component={Link} to={lstItem.listPath}>
                            <ListItemIcon 
                                className={classes.ListItem}>
                                {lstItem.listIcon}
                            </ListItemIcon>
                                <ListItemText className={classes.ListItem} primary={lstItem.listText}/>
                        </ListItem>
                    ))};
                
            </List>
        </Box>

    );
    return (
        <>
        
           <Box component="nav">
               <AppBar position="static" style={{background:'#222'}}>
                   <Toolbar>
                        <IconButton onClick={toggleSlider('right',true)}>
                            <ArrowBack style={{color:'tomato'}}/>
                        </IconButton>
                        <Typography variant='h5' style={{color:'tan'}}>
                            Portfolio
                        </Typography>
                        <Drawer anchor='right' open={state.right} onClose={toggleSlider('right',false)}>
                            {sideList('right')}
                        </Drawer>
                   </Toolbar>
               </AppBar>
           </Box>
        </>
    )
}

export default Navbar;
