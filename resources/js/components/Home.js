import React, {Component} from 'react';
import config from "./../config";

const location = config.location;
export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {posts: []};
    }

    componentDidMount() {
        axios.get(`${location}/api/posts`)
            .then(response => {
                console.log(response);
            });
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
