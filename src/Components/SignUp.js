import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { withStyles, Select, MenuItem } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import SimpleSelect from "./selects/selectCompany";
import { connect } from "react-redux";
import SelectSex from "./selects/selectSex";
import {REGISTER_SUCCESS, singUpActions} from '../store/actions/register/register.actions'
import {register} from '../redux/actionCreater'

const useStyles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

  },
  avatar: {
    margin: theme.spacing(0),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(1, 0, 2),
  },
});

class SignUp extends React.Component {


  user = {

  };

  onchangeHandler = (e) => {
    // e.preventDefault();
    this.user[e.target.name] = e.target.value;
  };



  handleChangeSex = (e) => {
    this.user.sex = e.target.value;
  };
  handleChangeCompany = (e) => {
    this.user.companyId = e.target.value;
  };

  getInfo = () => {
    console.log(this.user);

  };
  render() {
    console.log(this.props);
    const { classes } = this.props;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper} >
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form
            className={classes.form}
            noValidate
            // onSubmit={this.onchangeHandler}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={this.onchangeHandler}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  onChange={this.onchangeHandler}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="email"
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={this.onchangeHandler}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={this.onchangeHandler}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  autoComplete="fname"
                  name="birthDate"
                  variant="outlined"
                  required
                  fullWidth
                  id="birthDate"
                  label="birthDate"
                  autoFocus
                  onChange={this.onchangeHandler}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  autoComplete="fname"
                  name="avatarUrl"
                  variant="outlined"
                  required
                  fullWidth
                  id="avatarUrl"
                  label="avatarUrl"
                  autoFocus
                  onChange={this.onchangeHandler}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  type="number"
                  autoComplete="fname"
                  name="jsExperience"
                  variant="outlined"
                  required
                  fullWidth
                  id="jsExperience"
                  label="jsExperience"
                  autoFocus
                  onChange={this.onchangeHandler}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  type="number"
                  variant="outlined"
                  required
                  fullWidth
                  id="reactExperience"
                  label="reactExperience"
                  name="reactExperience"
                  autoComplete="lname"
                  onChange={this.onchangeHandler}
                />
              </Grid>
              {/*<Select onChange={this.handleChange} >*/}
              {/*  <MenuItem value={'male'}>Male</MenuItem>*/}
              {/*  <MenuItem value={'female'}>Female</MenuItem>*/}
              {/*</Select>*/}
              <Grid item xs={12} sm={6}>
                <SimpleSelect onchange={this.handleChangeCompany} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <SelectSex onChange={this.handleChangeSex} />
              </Grid>
            </Grid>

            <Button
              // type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={false}
              className={classes.submit}
              onClick={()=>this.props.registerUser(this.user,() => {
                this.props.history.push('/')
              })}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link to="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
     singUP:state.status
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    registerUser: (user,callback) => dispatch(register(user,callback))
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (withStyles(useStyles)(SignUp));

// const ConnectedSignUp = connect((state) => ({
//   companies: state.companies,
// }))(WithStyle);
//
//  ConnectedSignUp;
