import React from 'react';

class List extends React.Component {

    render() {
        const listItems = this.props.fruits.map((item,index) => {
            return <li key={index} onClick={(e) => alert(index)}>{item}</li>
        })
        return <ol>{listItems}</ol>
        
    }
}

export default List;