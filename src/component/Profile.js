import React from "react";

export default class Profile extends React.Component {
    logout = () =>
        fetch(`http://localhost:8080/logout`, {
            method:"POST",
            credentials:"include"
        }).then (response => this.props.history.push('/'))


    state = {
        currentUser: {
            username:'',
            firstName:'',
            lastName:''
        }
    }

    componentDidMount() {
        fetch(`http://localhost:8080/currentUser`, {
            method :'GET',
            credentials : "include"
        }).then(response => response.json())
            .then(currentUser => this.setState({
                currentUser : currentUser
            }))
    }

    render() {
        return (
            <div>
                <h1>Profile</h1>
                Hi {this.state.currentUser.username}
                <button onClick={this.logout}>Logout</button>
            </div>
        )

    }
}
