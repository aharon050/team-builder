import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { withStyles } from "@material-ui/core";
import Axios from "axios";
import { v4 as uuid } from "uuid";
import { connect } from "react-redux";

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
    company: [],
    id: "",
  };

  componentDidMount() {
    Axios.get(
      "https://picsart-bootcamp-2020-api.herokuapp.com/api/v1/companies"
    ).then((res) => {
      this.setState({ company: res.data });
    });
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
            {this.state.company.map((item) => {
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

export default connect()(withStyles(useStyles)(SimpleSelect));
