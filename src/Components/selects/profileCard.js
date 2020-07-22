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
    media: {
        height: 200,
    },
});

export default function MediaCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.user.avatarUrl}
                    title="Contemplative Reptile"
                />
                {props.flag? <input type="text" placeholder={'new avatar url'}/>:null}
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.user.firstName} {props.user.lastName}
                    </Typography>
                    {props.flag? <input type="text" placeholder={'name'} id={'firstName'}/>:null}
                    {props.flag? <input type="text" placeholder={'last name'}/>:null}
                    <Typography variant="body2" color="textSecondary" component="p">

                        {props.user.email}
                    </Typography>
                    {props.flag? <input type="text" placeholder={'email'}/>:null}
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={props.onHandleEdit}>
                    Edit
                </Button>

            </CardActions>
        </Card>
    );
}