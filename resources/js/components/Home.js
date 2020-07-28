import React, {Component} from 'react';
import config from "./../config";
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';

const location = config.location;
export default class Home extends Component {

    constructor(props) {
        super(props);
        this.currentPageId = 1;
        this.nextPageUrl = undefined;
        this.state = {posts: [], editor: undefined};
    }

    getPosts(pageId = 1) {
        return axios.get(`${location}/api/posts?page=${Number(pageId)}`)
            .then(response => {
                const posts = response.data.data;
                // this.nextPageUrl = response.data.next_page_url;
                this.currentPageId = response.data.current_page;
                // console.log(nextPageUrl);
                console.log(response.data);

                posts.sort((a, b) => {
                    return b.id - a.id;
                });

                return posts;
            });
    }


    componentDidMount() {
        this.getPosts().then((posts) => {
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
    };

    nextPage = e => {
        this.getPosts(this.currentPageId + 1).then((posts) => {
            this.setState({posts: posts});
        });
    };

    prevPage = e => {
        this.getPosts(this.currentPageId - 1).then((posts) => {
            this.setState({posts: posts});
        });
    };

    render() {
        const posts = [];
        console.log([...this.state.posts]);
        [...this.state.posts].forEach(post => {
            posts.push(
                <div className='post' key={post.id}>
                    <p dangerouslySetInnerHTML={{__html: post.content}}/>
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
                    <div className="post-paging-buttons">
                        <button className='btn btn-primary' onClick={this.prevPage} id="prev">Prev page</button>
                        <button className='btn btn-primary' onClick={this.nextPage} id="next">Next page</button>
                    </div>
                </div>
            </div>
        );
    }
}
