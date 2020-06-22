import React, {Component} from 'react';
import config from "./../config";
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';

const location = config.location;
export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {posts: [], editor: undefined};
    }

    componentDidMount() {
        axios.get(`${location}/api/posts`)
            .then(response => {
                const posts = Object.values(response.data);

                posts.sort((a, b) => {
                    return b.id - a.id;
                })

                this.setState({posts: posts});
            });

        const channel = Echo.channel('my-social-media');
        channel.listen('.posts', data => {
            this.setState({posts: [data].concat(this.state.posts)});
        });
    }

    post = e => {
        e.preventDefault();
        const editor = this.state.editor;
        const data = editor.getData();

        axios.post(`${location}/api/posts`, {postContent: data});
    };

    logout = e => {
        e.preventDefault();
        axios.get(`${location}/api/user/logout`, {})
            .then(response => {
                window.location.reload(false);
            });
    }

    render() {
        const posts = [];
        [...this.state.posts].forEach(post => {
            posts.push(
                <div className='post'>
                    <p key={post.id} dangerouslySetInnerHTML={{__html: post.content}}/>
                </div>
            );
        });

        return (
            <div>
                <div id="account">
                    <a onClick={this.logout}>Logout</a>
                </div>
                <div id="create-post">
                    <CKEditor id='postEditor'
                              editor={ClassicEditor}
                              data='<p>Enter new post your here</p>'
                              onInit={editor => {
                                  this.setState({editor: editor});
                              }}/>
                    <button className='btn btn-primary' onClick={this.post}>Post</button>
                </div>
                <div id="all-post">
                    {posts}
                </div>
            </div>
        );
    }
}
