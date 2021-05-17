import React from 'react';
import {Grid,Box,Card,CardActionArea,CardActions,CardContent,CardMedia,Button,Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import Navbar from './Navbar';
import project1 from '../images/html-css-javascript-lg.jpg';
import project2 from '../images/javascript-fullstack.jpg';
import project3 from '../images/react-redux.jpg';



const useStyles = makeStyles({
    mainContainer: {
        background:'#233',
        height:'100%',
        
    },
    cardContainer: {
        maxWidth:345,
         margin:'3rem',
        margin:' 5rem auto'
    }
})

const Portfolio = () => {
    const classes = useStyles();
    return (
        
        <Box component="div" className={classes.mainContainer}>
            <Navbar />
            <Grid container  spacing={2}>
            {/* Project1 */}
            <Grid item md={6}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia component="img" alt="project1" height="140" image={project1} />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Project1
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </Typography>
                            </CardContent>
                            <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                Live Demo
                            </Button>

                            </CardActions>
                        
                    </CardActionArea>
                </Card>
            </Grid>
             {/* Project2 */}
             <Grid item md={6}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia component="img" alt="project2" height="140" image={project2} />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Project2
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </Typography>
                            </CardContent>
                            <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                Live Demo
                            </Button>

                            </CardActions>
                        
                    </CardActionArea>
                </Card>
            </Grid>
             {/* Project3 */}
             <Grid item md={6}>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia component="img" alt="project3" height="140" image={project3} />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Project3
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </Typography>
                            </CardContent>
                            <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                Live Demo
                            </Button>

                            </CardActions>
                        
                    </CardActionArea>
                </Card>
            </Grid>
                
            </Grid>
        </Box>
        
    )
}

export default Portfolio
