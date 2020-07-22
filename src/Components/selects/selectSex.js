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
import {connect} from 'react-redux'

const useStyles = (theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
});

class SelectSex extends React.Component {


    // handleChange = (event) => {
    //     this.setState({ id: event.target.value });
    // };
    render() {
        const { classes } = this.props;

        return (
            <div>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-helper-label">Sex</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={(e)=>this.props.onChange(e)}
                    >

                        <MenuItem value={"male"}>Male</MenuItem>
                        <MenuItem value={"famale"}>Famale</MenuItem>
                    </Select>
                    <FormHelperText>Choose Your Sex</FormHelperText>
                </FormControl>
            </div>
        );
    }
}

export default connect()(withStyles(useStyles)(SelectSex));
