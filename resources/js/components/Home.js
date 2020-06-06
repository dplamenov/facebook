import React, {Component} from 'react';
import config from "./../config";

const location = config.location;
export default class Home extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(`${location}/api/isLogin`);
        // axios.get(`${location}/api/isLogin`)
        //     .then(function (response) {
        //         const result = (response.data);
        //         const {islogin} = result;
        //         console.log(response.data);
        //         if (islogin) {
        //             return <Redirect to='/hoo'/>
        //         }
        //
        //     }).catch(function (error) {
        //     return <Redirect to='/err'/>
        // });
        fetch(`${location}/api/isLogin`)
            .then(e => e.json())
            .then(e => console.dir(e))
    }

    render() {
        return (
            <div>
                <p>Hello!</p>
            </div>
        );
    }
}
