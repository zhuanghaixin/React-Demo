import React, {Component} from 'react';
// import axios from 'axios'
// import axios from '../../axios'
import Posts from './Posts/Posts'
// import NewPost from './NewPost/NewPost'
import asyncComponent from '../../hoc/asyncComponent'
import {Route, Switch, Link, NavLink,Redirect} from 'react-router-dom'
import './Blog.css';
import FullPost from './FullPost/FullPost'

const AsyncNewPostComponent=asyncComponent(()=>{
    return import('./NewPost/NewPost')
})
class Blog extends Component {
    state={
        auth:true
    }
    render() {
        // console.log(this.props)
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts/" exact activeClassName="my-active" activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}
                                         exact
                            >New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>


                <Switch>
                    {this.state.auth ? <Route path="/new-post" component={AsyncNewPostComponent}/>:null}
                        <Route path="/posts" component={Posts}/>}
                        <Route render={()=><h1>Not Found</h1> } />
                    {/*<Route path="/"   component={Posts}/>*/}
                    {/*    <Redirect from="/" to="/posts"></Redirect>*/}
                    {/*<Route path="/:id" component={FullPost}/>*/}


                </Switch>
            </div>
        );
    }

}

export default Blog;
