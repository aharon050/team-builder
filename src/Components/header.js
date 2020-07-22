import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import { withRouter } from "react-router-dom";
import '../App.css'
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function ButtonAppBar(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}  >
            <AppBar position="static">
                <Toolbar>


                    <ul className='nav'>
                        <Button edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => {
                            props.history.push('/home')
                        }} >
                            <HomeIcon fontSize="large"/>
                        </Button>
                        <Link to={'/home/topics'} className='links' >Topics</Link>
                        <Link to={'/home/projects'}className='links' >Projects</Link>
                        <Link to={'/home/teams'}className='links' > Teams </Link>
                        <Link to={'/home/profile'}className='links' > Profile</Link>
                        <Button color="inherit" onClick={() => {
                            props.history.push('/')
                            window.localStorage.removeItem('token')
                        }} >Log out</Button>
                    </ul>
                    {/*<Typography variant="h6" className={classes.title}>*/}
                    {/*    Team Builder*/}
                    {/*</Typography>*/}

                </Toolbar>
            </AppBar>
        </div>
    );
}

export default withRouter(ButtonAppBar)