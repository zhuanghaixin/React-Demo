import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import {createPost} from '../actions/postActions'
class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:'',
            body:''
        }
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value})

    }
    onSubmit(e){
        e.preventDefault()
        const post={
            title:this.state.title,
            body:this.state.body
        }
        //触发Action
        this.props.createPost(post)


    }

    render() {
        return (
            <div>
                <h1>添加内容 </h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label htmlFor="title">title</label>
                        <br/>
                        <input type="text" name="title" id="title" onChange={this.onChange} value={this.state.title}/>
                    </div>
                    <div>
                        <label htmlFor="content">body</label>
                        <br/>
                        <textarea name="body" id="" cols="30" rows="10" onChange={this.onChange} value={this.state.body}></textarea>
                    </div>
                    <br/>
                    <button type="sunbmit">添加</button>
                </form>
            </div>
        );
    }
}
// PostForm.propTypes={
//     createPost:PropTypes.func.isRequired,
//     post:PropTypes.array.isRequired
//
// }
export default connect(null, { createPost })(PostForm)

