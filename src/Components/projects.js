import React from "react";
import { connect } from "react-redux";
import SimpleCard from "./projectItem";
import ButtonAppBar from "./header";
import Axios from "axios";

class Projects extends React.Component {
  state = {
    projects: [],
  };

  componentDidMount() {
    Axios.get(
        "https://picsart-bootcamp-2020-api.herokuapp.com/api/v1/projects",
        { headers: { token: window.localStorage.getItem("token") } }
    ).then((res) => {
      this.setState({
        projects: res.data,
      });
    });
  }

  voteProjects =(Id, type) =>{

    return Axios.post(`https://picsart-bootcamp-2020-api.herokuapp.com/api/v1/projects/${Id}/voting`, type, { headers: { token: window.localStorage.getItem("token") } })
        .then((res) => {
          this.setState({
            projects: this.state.projects.map((item) =>
                item.id !== Id ? item : res.data
            ),
          });
        })
  }

  render() {
    return (
        <div style={{ marginTop: "100px" }}>
          <ButtonAppBar />
          {this.state.projects.map((item) => {
            return (
                <SimpleCard
                    key={item.id}
                    voteProjects={this.voteProjects}
                    votingsCount={item.votingsCount}
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    votedByMe={item.votedByMe}
                />
            );
          })}
        </div>
    );
  }
}

export default Projects;
