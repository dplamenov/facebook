import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './Home';
import About from './About';
import Error404 from './Error404';
import config from "./../config";

const location = config.location;
console.log(location);


class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path={location} component={Home}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'))
