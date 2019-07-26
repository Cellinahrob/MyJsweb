import React, {Component} from 'react';

class Profile extends Component{
    render () {
        return (
            <div className="card" style={{width: "18rem"}}>
                <img src="https://thegrio.com/wp-content/uploads/2018/07/Jare-2.jpg..." className="card-img-top" />
                <div className="card-body">
                <h5 className="card-title">Anotonnette Akoth</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        )
    }
}

export default Profile;