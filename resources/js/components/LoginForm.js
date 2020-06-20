import React, {Component} from 'react'
import axios from 'axios';
import config from "./../config";

const location = config.location;


export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {errors: {}};
    }

    submit = e => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const input = [...formData];

        const data = input.reduce((acc, current) => {
            acc[current[0]] = current[1];
            return acc;
        }, {});

        console.log(this);
        this.login(data);
    }

    login(data) {
        console.log(this);
        axios.post(`${location}/api/user/login`, data)
            .then(function (response) {
                console.log(this);
                console.log(response.data);
                console.log(response.status);
                console.log(response.statusText);
                console.log(response.headers);
                console.log(response.config);
            })
            .catch(error => {
                console.dir(error);
                this.setState({errors: Object.assign({}, error.response.data)});
            });
    }

    setErrorState(error) {
        this.setState({errors: Object.assign({}, error)});
    }

    render() {
        const errorsOutput = [];

        console.log('in if');
        console.log(Object.values(this.state.errors));
        console.log(Object.values(this.state.errors).flat());
        Object.values(this.state.errors).flat().map((e, i) => errorsOutput.push(<li key={i}>{e}</li>));

        console.log(errorsOutput);

        return <div>
            <ul>
                {errorsOutput}
            </ul>
            <form method="post" onSubmit={this.submit}>
                <input type="text" id="username" name="username" className="form-control"/>
                <input type="text" id="password" name="password" className="form-control"/>
                <button className="btn btn-primary">Login</button>
            </form>
        </div>
    }
}
