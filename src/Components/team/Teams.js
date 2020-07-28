import React from "react";
import Axios from "axios";
import ButtonAppBar from "../header";
import ImgMediaCard from "./teamCard";
import {connect} from 'react-redux'
import {data} from '../../store/reducers/singUpReducer'
import {handleLoadTeams} from "../../store/actions/Teams";

class Teams extends React.Component {
  state = {
    team: [],
  };

  componentDidMount() {
    if (!this.props.teams.length){
      this.props.dispatch(handleLoadTeams())
    }
  }

  render() {
    console.log(this.state.team)
    return (
      <div >

        <ButtonAppBar />
        {this.props.teams.map((item) =>{
          return (
              <div style={{border:'1px solid #ccc',margin:'20px 20px 20px 20px'}}>
              <div><h1> {item.project} </h1>
                <h2>{item.topic}</h2> </div>
              <div  style={{display:"flex"}}>

                {item.members.map((item) => {
                  return <ImgMediaCard team={item}  />;
                })}
              </div>
              </div>
          )
        })}

      </div>
    );
  }
}

export default connect( (state) => ({
  teams: state.teams.teams
}) )(Teams);
