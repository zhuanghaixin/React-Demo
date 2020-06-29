import React, {Component} from 'react';
// import axios from 'axios'
import axios from '../../axios'
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }

    componentDidMount() {
        axios.get('/posts').then(res => {
            console.log(res.data)
            const posts = res.data.slice(0, 4)
            console.log(posts)
            //          给每个post重新添加了一个属性author
            const updatePosts = posts.map(post => {
                return {
                    ...post,
                    author: "Max"
                }
            })
            console.log(updatePosts)
            this.setState({posts: updatePosts})

        }).catch(err => {
            console.log(err)
            this.setState({error: true})
        })
    }

    selectedPostHandler = (id) => {
        this.setState({selectedPostId: id}
        )
    }

    render() {
        let posts = <p style={{textAlign: 'center'}}> Something went wrong</p>
        if (!this.state.error) {
            posts = this.state.posts.map(
                post => {
                    return <Post
                        title={post.title}
                        key={post.id}
                        author={post.author}
                        selectPost={() => {
                            this.selectedPostHandler(post.id)
                        }}
                    ></Post>
                }
            )
        }
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost
                        id={this.state.selectedPostId}
                    />
                </section>
                <section>
                    <NewPost/>
                </section>
            </div>
        );
    }

}

export default Blog;
