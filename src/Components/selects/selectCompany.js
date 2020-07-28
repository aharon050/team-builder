import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { withStyles } from "@material-ui/core";
import { v4 as uuid } from "uuid";
import { connect } from "react-redux";
import {handleLoadCompanies} from "../../store/actions/Companies";

const useStyles = (theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
});

class SimpleSelect extends React.Component {
  state = {
    id: "",
  };

  componentDidMount() {
    if (!this.props.companies.length){
      this.props.dispatch(handleLoadCompanies())
    }
  }
  handleChange = (event) => {
    this.setState({ id: event.target.value });
  };
  render() {
    const { classes } = this.props;

    return (
      <div>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-helper-label">Company</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            //value={this.state.id}
            onChange={(e) => this.props.onchange(e)}
          >
            {this.props.companies.map((item) => {
              return (
                <MenuItem value={item.id} key={uuid()}>
                  {item.name}
                </MenuItem>
              );
            })}
          </Select>
          <FormHelperText>Choose Your Company</FormHelperText>
        </FormControl>
      </div>
    );
  }
}

export default connect( (state) => ({
  companies: state.companies.companies
}) )(withStyles(useStyles)(SimpleSelect));
