import React, {Component} from 'react';
import Posts from './Posts';
import Sidebar  from './Sidebar';
import Post from './Post';

class Content extends Component{


        constructor (props){
          super(props)
          this.state = {
                posts: []
          }
        }
         componentDidMount() {
             fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(response => this.setState({posts: response}));

         }

    render () {
        return(
            <main className="flex-shrink-0">
                <div className="container">

                    <div className="row"> 
                    <Posts posts={this.state.posts}/>
                    <Sidebar/>
                    </div>
                </div>
            </main>
        )
    }
}

export default Content;