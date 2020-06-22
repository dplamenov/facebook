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
        fetch(`${location}/api/user/isLogin`)
            .then(e => e.json())
            .then(e => this.setState({loggedIn: e}));
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path={location}>
                            {this.state.loggedIn ? <Home /> : <LoginForm/>}
                        </Route>

                        <Route component={notFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

function notFound(){
    return <div className="notFoundError"><h1>Error: Not found</h1><span>Go to <a onClick={() => {window.location.href = location;}}>home page</a></span></div>
}

ReactDOM.render(<App/>, document.querySelector('#content'))
