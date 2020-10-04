import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../actions/postAction';
 
class Post extends Component {
    handleClick = () =>{
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    }
    render() {
        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <button className="btn gray" onClick={this.handleClick}>Delete Post</button>
                </div>
            </div> 
        ) : (
            <p className="center">Post loading...</p>
        ) 
        return (
            <div className="container">
                { post }
            </div>  
        );
    }
}

const mapStateToProps = (state, ownProp) =>{
    const id = ownProp.match.params.post_id
    return {
        post: state.posts.find(post => post.id === id)
    }
}

const mapDispatchToprops = (dispatch) =>{
    return {
        deletePost: (id) => { dispatch(deletePost(id)) }
    }
}
 
export default connect(mapStateToProps, mapDispatchToprops)(Post);