import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import Home from './Home';
import config from "./../config";
import LoginForm from "./LoginForm";

const location = config.location;

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {loggedIn: false};
    }

    componentDidMount() {
        fetch(`${location}/api/isLogin`)
            .then(e => e.json())
            .then(e => this.setState({loggedIn: e.islogin}))
            .then(_ => {
                console.log(this.state);
                console.log(this.state.loggedIn);
                console.log(this.state.loggedIn === true);
            });
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path={location}>
                            {this.state.loggedIn ? <Home /> : <LoginForm/>}
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'))
