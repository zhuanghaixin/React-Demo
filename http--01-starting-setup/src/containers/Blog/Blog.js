import React, {Component} from 'react';
// import axios from 'axios'
// import axios from '../../axios'
import Posts from './Posts/Posts'
import NewPost from './NewPost/NewPost'
import {Route,Switch,Link,NavLink} from 'react-router-dom'
import './Blog.css';
class Blog extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/" exact activeClassName="my-active" activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname:'/new-post',
                                hash:'#submit',
                                search:'?quick-submit=true'
                            }}
                                         exact
                            >New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>

                <Switch>
                    <Route path="/"   exact component={Posts} />
                    <Route path="/full"   exact component={Posts} />
                    <Route path="/new-post"   exact component={NewPost} />
                </Switch>
            </div>
        );
    }

}

export default Blog;
