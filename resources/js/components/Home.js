import React, {Component} from 'react';
import config from "./../config";

const location = config.location;
export default class Home extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <p>Hello! You are login.</p>
            </div>
        );
    }
}
