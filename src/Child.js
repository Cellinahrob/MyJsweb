import React from 'react';

class Child extends React.Component {

    render () {
        return (
        <div>
        <h1>{this.props.name}</h1>
        <button onClick={this.props.changeName}>Call Parent</button>
        </div>

        )
    }
}

// Child.propType = {
//     name: React.PropType.string
// }
export default Child;