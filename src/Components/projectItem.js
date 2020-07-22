import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ThumbUpTwoToneIcon from "@material-ui/icons/ThumbUpTwoTone";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
      <Card className={classes.root} style={{ margin: "50px 50px 50px 50px" }}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {props.title}
          </Typography>

          <Typography variant="body2" component="p">
            {props.description}
          </Typography>
        </CardContent>

        <IconButton aria-label="like" onClick={()=>props.voteProjects(props.id,props.votedByMe?{type:"unlike"}:{type:'like'})}>
          <ThumbUpTwoToneIcon />
        </IconButton>
        <p>{props.votingsCount}</p>
      </Card>
  );
}
