import React from "react";
import { connect } from "react-redux";
import Axios from "axios";
import ButtonAppBar from "./header";
import ThumbUpTwoToneIcon from "@material-ui/icons/ThumbUpTwoTone";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import {Input,Button} from "@material-ui/core";
import {handleDeleteTopic, handleLoadTopics, handleVoteTopics} from "../store/actions/Topics";
import {handleAddTopic} from "../store/actions/Topics";


class Topics extends React.Component {
  state = {
    newTopic: ""
  };

  componentDidMount() {
    if (!this.props.topics.length){
      this.props.dispatch( handleLoadTopics() )
    }
  }

  topicAddHandler = (e) => {
    const value = e.target.value;
    this.setState({
      newTopic: value,
    });
  };

  addTopicHandler = () => {
    this.props.dispatch(handleAddTopic({ title: this.state.newTopic }, () => {
      this.setState({
        newTopic: ''
      })
    }))
  };

  deleteTopic = (id) => {
    this.props.dispatch(handleDeleteTopic(id))
  };

  voteTopic = (Id, type) => {
    this.props.dispatch( handleVoteTopics(Id, type) )
  };

  render() {
    return (
        <div style={{ marginTop: "100px" }}>
          <ButtonAppBar />
          <Input onChange={this.topicAddHandler} value={this.state.newTopic} style={{width:'350px'}}/>
          <Button onClick={this.addTopicHandler}>add</Button>
          <ul>
            {this.props.topics.map((item, index) => {return (
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

export default connect((state) => ({
  topics: state.topics.topics
}))(Topics);
