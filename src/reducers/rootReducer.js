const initState = {
    posts: [
        {id: '1', title: 'Squirte laid an Egg', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum distinctio quaerat accusamus, dolorum iure nesciunt repellendus harum, laudantium commodi corporis nostrum fugit debitis temporibus amet! Quam totam delectus enim magnam?'},
        {id: '2', title: 'Charmander laid an Egg', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum distinctio quaerat accusamus, dolorum iure nesciunt repellendus harum, laudantium commodi corporis nostrum fugit debitis temporibus amet! Quam totam delectus enim magnam?'},
        {id: '3', title: 'a Helix Fossil was Found', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum distinctio quaerat accusamus, dolorum iure nesciunt repellendus harum, laudantium commodi corporis nostrum fugit debitis temporibus amet! Quam totam delectus enim magnam?'}
    ]
}

const rootReducer = (state = initState, action) => {
    if(action.type === 'DELETE_POST'){
        const filteredState = state.posts.filter(post => post.id !== action.id)
        state = {
            ...state,
            posts: filteredState
        }
        return state;
    }
    return state;
}

export default rootReducer;

// import axios from 'axios'
// state = {
//     posts: []
// }
// componentDidMount(){
//     axios.get('https://jsonplaceholder.typicode.com/posts')
//         .then(res => {
//             this.setState({ posts: res.data.slice(0, 10) })
//         })
// }

// state = {
//     post: null
// }
// componentDidMount(){
//     let id = this.props.match.params.post_id;
//     axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
//         .then(res => {
//             this.setState({ post: res.data })
//     })
// }