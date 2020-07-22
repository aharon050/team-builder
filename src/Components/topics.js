import React from "react";
import { connect } from "react-redux";
import Axios from "axios";
import ButtonAppBar from "./header";
import ThumbUpTwoToneIcon from "@material-ui/icons/ThumbUpTwoTone";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import {Input,Button} from "@material-ui/core";


class Topics extends React.Component {
  state = {
    topics: [],
    newTopic: "",
  };

  componentDidMount() {
    Axios.get("https://picsart-bootcamp-2020-api.herokuapp.com/api/v1/topics", {
      headers: { token: window.localStorage.getItem("token") },
    }).then((res) => {
      this.setState({
        topics: res.data,
      });
    });
  }

  topicAddHandler = (e) => {
    const value = e.target.value;
    this.setState({
      newTopic: value,
    });
  };

  addTopicHandler = () => {
    return Axios.post(
        "https://picsart-bootcamp-2020-api.herokuapp.com/api/v1/topics",
        { title: this.state.newTopic },
        { headers: { token: window.localStorage.getItem("token") } }
    ).then((res) => {
      console.log(res);
      this.setState({
        topics: [...this.state.topics, res.data],
        newTopic: "",
      });
      console.log(this.state.topics);
    });
  };

  deleteTopic = (id) => {
    return Axios.delete(
        `https://picsart-bootcamp-2020-api.herokuapp.com/api/v1/topics/${id}`,
        { headers: { token: window.localStorage.getItem("token") } }
    ).then((res) => {
      this.setState({
        topics: this.state.topics.filter((item) => item.id !== id),
      });
    });
  };

  voteTopic = (Id, type) => {
    return Axios.post(
        `https://picsart-bootcamp-2020-api.herokuapp.com/api/v1/topics/${Id}/voting`,
        type,
        { headers: { token: window.localStorage.getItem("token") } }
    ).then((res) => {
      this.setState({
        topics: this.state.topics.map((item) =>
            item.id !== Id ? item : res.data
        ),
      });
    });
  };

  render() {
    return (
        <div style={{ marginTop: "100px" }}>
          <ButtonAppBar />
          <Input onChange={this.topicAddHandler} value={this.state.newTopic} style={{width:'350px'}}/>
          <Button onClick={this.addTopicHandler}>add</Button>
          <ul>
            {this.state.topics.map((item, index) => {
              return (
                  <p key={index} style={{border:'2px solid #ccc',paddingRight:"1px",width:"400px",marginLeft:'450px'}}>
                    {item.title}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {
                      <IconButton
                          aria-label="like"
                          onClick={() =>
                              this.voteTopic(
                                  item.id,
                                  item.votedByMe ? { type: "unlike" } : { type: "like" }
                              )
                          }
                      >
                        {item.votedByMe ? (
                            <ThumbUpTwoToneIcon />
                        ) : (
                            <ThumbUpOutlinedIcon />
                        )}
                      </IconButton>

                    }
                    {item.votingsCount}
                    {item.canDelete ? (
                        <IconButton
                            aria-label="delete"
                            onClick={() => this.deleteTopic(item.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                    ) : null}
                  </p>
              );
            })}
          </ul>


        </div>
    );
  }
}

export default Topics;
