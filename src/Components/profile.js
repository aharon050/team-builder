import React from "react";
import Axios from "axios";
import { connect } from "react-redux";
import ButtonAppBar from "./header";
import MediaCard from "./selects/profileCard";

class Profile extends React.Component {
    state = {
        user: "",
        flag: false,

    };

    componentDidMount() {
        Axios.get("https://picsart-bootcamp-2020-api.herokuapp.com/api/v1/users", {
            headers: { token: window.localStorage.getItem("token") },
        }).then((res) => {
            console.log(res.data);
            this.setState({
                user: res.data,
            });
        });
    }


    onHandleEdit = () => {
        this.setState({
            flag: !this.state.flag,
        });
    };

    render() {

        return (
            <div style={{ marginTop: "100px"}}>
                <ButtonAppBar />

                <div style={{display: "inline-block"}}>
                    <MediaCard
                        user={this.state.user}
                        flag={this.state.flag}
                        onHandleEdit={this.onHandleEdit}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.singInReducer.user,
    };
};

export default connect(mapStateToProps)(Profile);
