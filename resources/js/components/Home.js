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
                this.setState({posts: response.data});
            });

        const channel = window.Echo.channel('my-social-media');
        channel.listen('posts', data => {
            this.setState({posts: this.state.posts.concat(data)});
        });
    }

    post = e => {
        e.preventDefault();
        const editor = this.state.editor;
        const data = editor.getData();

        axios.post(`${location}/api/posts`, {postContent: data});
    };

    render() {
        const posts = [];
        [...this.state.posts].forEach(post => {
            console.log(post);
            posts.push(
                <div className='post'>
                    <p key={post.id} dangerouslySetInnerHTML={{__html: post.content}}/>
                </div>
            );
        });

        return (
            <div>
                <div id="create-post">
                    <CKEditor id='postEditor'
                              editor={ClassicEditor}
                              data="<p>Hello from CKEditor 5!</p>"
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
