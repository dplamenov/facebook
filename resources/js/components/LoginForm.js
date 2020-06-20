import React, {Component} from 'react'
import ReactDOM from 'react-dom';

export default class LoginForm extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <form method="post">
                <input type="text" id="username"/>
                <button>Login</button>
            </form>
        </div>
    }
}
