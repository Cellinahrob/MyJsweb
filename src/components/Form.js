import React from'react';

class Form extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange (e) {
        const name = e.target.name
        const value = e.target.value

        this.setState({ [name]: value })
    }

    handleSubmit (e) {
        alert(this.state.firstName + ' ' + this.state.lastName);
        e.preventDefault();
    }
    render () {
        return (
            <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label>First Name</label>
                    <input type="text" name="firstName" onChange={this.handleChange} value={this.state.firstName}/>
            </div>

            <div className="form-group">
                <label>Last Name</label>
                    <input type="text" name="lastName" onChange={this.handleChange} value={this.state.lastName}/>
            </div>

                <input type="submit" class="btn btn primary" value="Submit"/>
            </form>
        )
    }
}

export default Form;