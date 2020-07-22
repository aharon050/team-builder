import React from "react";
import "./App.css";
import SignIn from "./Components/SignIn";
import { Switch, Route } from "react-router-dom";
import ConnectedSignUp from "./Components/SignUp";
import ButtonAppBar from "./Components/header";
import Home from "./Components/home";
import Topics from "./Components/topics";
import Projects from "./Components/projects";
import Teams from "./Components/Teams";
import Profile from "./Components/profile";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route path={"/"} exact component={SignIn} />
                    <Route path={"/signup"} component={ConnectedSignUp} />
                    <Route path={"/home/profile"} exact component={Profile}/>
                    <Route path={"/home/teams"} exact component={Teams} />
                    <Route path={"/home"} exact component={Home} />
                    <Route path={"/home/topics"} exact component={Topics} />
                    <Route path={"/home/projects"} exact component={Projects} />
                </Switch>
            </div>
        );
    }
}

export default App;
