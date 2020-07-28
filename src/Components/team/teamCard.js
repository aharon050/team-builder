import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

export default function ImgMediaCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>


            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.team.firstName} {props.team.lastName}
                </Typography>
                <br/>
                <div >
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="300"
                        width='140'
                        image={props.team.avatarUrl}
                        title=":D"
                    />
                </div>

            </CardContent>


        </Card>
    );
}