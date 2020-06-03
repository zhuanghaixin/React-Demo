import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import {fetchPosts} from '../actions/postActions'
class Posts extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //        posts:[]
    //
    //     }
    // }
    render() {
        const postItems=this.props.posts.map(post=>(
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))
        return (
            <div>
                <h1>Post</h1>
                {postItems}
            </div>
        )
    }
    componentDidMount(){
        //第一步，触发Actions操作
       this.props.fetchPosts()
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.newPost){
            this.props.posts.unshift(nextProps.newPost)
        }
    }

}
Posts.propTypes={
    fetchPosts:PropTypes.func.isRequired,
    posts:PropTypes.array.isRequired

}
//将我们的状态转换为属性
const mapStateToProps = state=> ({
    //第七步，组件通过mapStateToProps,拿到对应的状态步并转成属性
    posts:state.posts.items,
    newPost:state.posts.item
})
export default connect(mapStateToProps, { fetchPosts })(Posts)
