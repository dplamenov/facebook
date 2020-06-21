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
                <div id="create-post">
                    <form>
                        <input type="text" name='"'/>
                    </form>
                </div>
            </div>
        );
    }
}
