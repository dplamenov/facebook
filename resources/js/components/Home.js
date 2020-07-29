import React, {Component} from 'react';
import config from "./../config";
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';

const location = config.location;
export default class Home extends Component {

    constructor(props) {
        super(props);
        // this.isPostButtonDisabled = true;
        this.currentPageId = 1;
        this.nextPageUrl = undefined;

        this.postButton = React.createRef();

        this.state = {
            posts: [],
            editor: undefined,
            isPostButtonDisabled: true,
            isPrevButtonDisabled: false,
            isNextButtonDisabled: false
        };
    }

    getPosts(pageId = 1) {
        return axios.get(`${location}/api/posts?page=${Number(pageId)}`)
            .then(response => {
                const posts = response.data.data;
                this.currentPageId = response.data.current_page;
                this.lastPage = response.data.last_page;

                if (this.currentPageId === this.lastPage) {
                    this.setState({isNextButtonDisabled: true});
                } else {
                    this.setState({isNextButtonDisabled: false});
                }

                if (1 === this.currentPageId) {
                    this.setState({isPrevButtonDisabled: true});
                } else {
                    this.setState({isPrevButtonDisabled: false});
                }

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
        console.log(data);

        axios.post(`${location}/api/posts`, {postContent: data});
    };

    logout = e => {
        e.preventDefault();
        axios.get(`${location}/api/user/logout`, {})
            .then(response => {
                window.location.href = '';
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
                    <a href="">Your profile</a>
                    <a onClick={this.logout}>Logout</a>
                </div>
                <div id="create-post">
                    <CKEditor id='postEditor'
                              editor={ClassicEditor}
                              config={{placeholder: 'Enter new post your here'}}
                              onInit={editor => {
                                  this.setState({editor: editor});
                              }}
                              onChange={(event, editor) => {
                                  const data = editor.getData();
                                  this.setState({isPostButtonDisabled: data.length <= 0});
                              }}/>
                    <button className='btn btn-primary' onClick={this.post}
                            disabled={this.state.isPostButtonDisabled}>Post
                    </button>
                </div>
                <div id="all-post">
                    {posts}
                    <div className="post-paging-buttons">
                        <button className='btn btn-primary' onClick={this.prevPage} id="prev" style={{float: 'left'}}
                                hidden={this.state.isPrevButtonDisabled}>Prev page
                        </button>
                        <button className='btn btn-primary' onClick={this.nextPage} id="next" style={{float: 'right'}}
                                hidden={this.state.isNextButtonDisabled}>Next page
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
