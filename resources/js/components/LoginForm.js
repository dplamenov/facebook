import React, {Component} from 'react'

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
    }

    submit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const input = [...formData];

        const data = input.reduce((acc, current) => {
            acc[current[0]] = current[1];
            return acc;
        }, {});

        console.log(data);

    }

    render() {
        return <div>
            <form method="post" onSubmit={this.submit}>
                <input type="text" id="username" name="username" className="form-control"/>
                <input type="text" id="password" name="password" className="form-control"/>
                <button className="btn btn-primary">Login</button>
            </form>
        </div>
    }
}
