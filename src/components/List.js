import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


//card code style information ...
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

// end of card style information ........  


export default function List({ result }) {

    const showRecipies = () => {

        result.map((result) => {
            console.log(result.title)
        }

        )
    }

    showRecipies()





    // card code functions -------------------------------------------------------------------------------ini

    const classes = useStyles();
    //const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        //setExpanded(!expanded);
    };



    // card code functions -------------------------------------------------------------------------------end





    return (
        <>
            
            <Grid container spacing={5}>
                {result.map((result) => (
                    <Grid item xs={12} sm={6}>

                        

                            {/* card code on return -----------------------------------------------------------------------------init */}

                            <Card  className={classes.root}>
                                <CardHeader
                                    avatar={
                                        <Avatar aria-label="recipe" className={classes.avatar}>
                                            R
                                        </Avatar>
                                    }
                                    action={
                                        <IconButton aria-label="settings">
                                            <MoreVertIcon />
                                        </IconButton>
                                    }
                                    title={result.title}
                                //subheader="September 14, 2016"
                                />
                                <CardMedia
                                    className={classes.media}
                                    image={result.picture}
                                    title="Paella dish"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        <h3>{result.description}</h3>

                                        This impressive  {result.title}  is a perfect party dish and a fun meal to cook together with your
                                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to favorites">

                                        {result.vegetarian ?
                                            <img src="https://img.icons8.com/material/24/26e07f/vegetarian-mark.png" />
                                            : <img src="https://img.icons8.com/material/24/fa314a/kawaii-steak.png" />}
                                    </IconButton>

                                    <IconButton aria-label="share">
                                        <ShareIcon />
                                    </IconButton>

                                </CardActions>

                            </Card>

                            {/* card code on return -----------------------------------------------------------------------------end */}


                    </Grid>

                ))}

            </Grid>




        </>
    )



}



// First working list with pic and info for each recipe


/*{result.map((result) => (
                <div>
                    <img src={result.picture} alt="Recipe img missing" />
                    <ul>
                    <li>{result.title}</li>
                    <li>{result.description}</li>
                    <li>{result.picture}</li>
                    <li>{result.vegetarian? "Veg" : "Meet"}</li>

                </ul>
                </div>
            ))}*/


//<FavoriteIcon />
