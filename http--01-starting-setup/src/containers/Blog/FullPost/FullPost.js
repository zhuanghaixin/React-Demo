import React, { Component } from 'react';
import axios from 'axios'
import './FullPost.css';

class FullPost extends Component {
    state={
        loadPost:null
    }
    componentDidMount(){
        console.log('FullPost this.prop componentDidMount')
        console.log(this.props)
        this.loadData()

    }
    componentDidUpdate(){
        // console.log('FullPost this.props componentDidUpdate')
        // console.log(this.props)
        this.loadData()

    }
    loadData(){

        if(this.props.match.params.id){
            console.log('this.state.loadPost')
            console.log(this.state.loadPost)
            console.log(typeof this.state.loadPost)
            console.log('this.props.match.params.id')
            console.log(this.props.match.params.id)
            console.log(typeof this.props.match.params.id)
            if(!this.state.loadPost ||( this.state.loadPost&& this.state.loadPost.id!== +this.props.match.params.id)){
                axios.get('https://jsonplaceholder.typicode.com/posts/'+this.props.match.params.id)
                    .then(res=>{
                        console.log(res.data)
                        this.setState({loadPost:res.data})
                    })
            }

        }
    }
    deletedPostHandler=()=>{
        axios.delete('/posts/'+this.props.match.params.id)
            .then(res=>{
                console.log('delete')
                console.log(res)
            })
    }
    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if(this.props.match.params.id){
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
