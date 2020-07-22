import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import combineReducers from "./store/reducers/index";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import {applyMiddleware} from "redux"
//import applyMiddleware from "./store/middlewere/index";
import rootReducer from "./store/reducers/rootRedycer";
import thunk from "redux-thunk";

function loggerMiddleware(store){
    return function (next) {
        return function (action) {
            const result = next(action)
            console.log('state',result)
            return result
        }
    }
}

const store = createStore(rootReducer, applyMiddleware(thunk,loggerMiddleware));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App store={store.getState()}/>
        </Router>
    </Provider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
