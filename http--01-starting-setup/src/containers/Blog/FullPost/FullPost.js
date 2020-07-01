import React, { Component } from 'react';
import axios from 'axios'
import './FullPost.css';

class FullPost extends Component {
    state={
        loadPost:null
    }
    componentDidUpdate(){
        if(this.props.id){
            if(!this.state.loadPost ||( this.state.loadPost&& this.state.loadPost.id!==this.props.id)){
                axios.get('https://jsonplaceholder.typicode.com/posts/'+this.props.id)
                    .then(res=>{
                        console.log(res.data)
                        this.setState({loadPost:res.data})
                    })
            }

        }

    }
    deletedPostHandler=()=>{
        axios.delete('/posts/'+this.props.id)
            .then(res=>{
                console.log('delete')
                console.log(res)
            })
    }
    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if(this.props.id){
            post= <p style={{textAlign: 'center'}}>Loading...</p>;
        }
     if(this.state.loadPost){
         post = (
             <div className="FullPost">
                 <h1>{this.state.loadPost.title}</h1>
                 <p>{this.state.loadPost.body}</p>
                 <div className="Edit">
                     <button className="Delete" onClick={this.deletedPostHandler}>Delete</button>
                 </div>
             </div>

         );
     }

        return post;
    }
}

export default FullPost;
