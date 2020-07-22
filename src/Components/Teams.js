import React from "react";
import Axios from "axios";
import ButtonAppBar from "./header";
import ImgMediaCard from "./teamCard";
import {data} from '../store/reducers/shared/singUpReducer'

class Teams extends React.Component {
  state = {
    team: [],
  };

  componentDidMount() {
    Axios.get(
      "https://picsart-bootcamp-2020-api.herokuapp.com/api/v1/teams",
      {
        headers: { token: window.localStorage.getItem("token") },
      }
    ).then((res) => {
        console.log(res.data)
      this.setState({
        team:res.data
      })
    });
  }

  render() {
    console.log(this.state.team)
    return (
      <div >

        <ButtonAppBar />
        {this.state.team.map((item) =>{
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

export default Teams;
