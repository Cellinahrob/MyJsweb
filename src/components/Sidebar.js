import React, {Component} from 'react';
import Profile from './Profile';

class Sidebar extends Component{
    render () {
        return (
            <div className="col-4">
                <Profile/>

            </div>
        )
    }
}

export default Sidebar;