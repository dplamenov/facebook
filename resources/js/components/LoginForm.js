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
        this.login(data);
    }

    login(data) {
        console.log(this);
        axios.post(`${location}/api/user/login`, data)
            .then(response => {
                this.setState({errors: Object.assign({}, {})});
                if(response.data === true){
                    window.location.reload(false);
                } else {
                    this.setState({errors: Object.assign({}, {'user': ['no such that user in database']})});
                }
            })
            .catch(error => {
                this.setState({errors: Object.assign({}, error.response.data)});
            });
    }

    setErrorState(error) {
        this.setState({errors: Object.assign({}, error)});
    }

    render() {
        console.log(Object.values);
        const errorsOutput = [];
        Object.values(this.state.errors).flat().map((e, i) => errorsOutput.push(<li key={i}>{e}</li>));
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
