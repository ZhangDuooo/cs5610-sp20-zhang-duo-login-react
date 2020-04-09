import React from "react";

export default class Login extends React.Component {

    state = {
        user:{
            username:'',
            password:''
        }
    }

    login = () =>
        fetch(`http://localhost:8080/login`, {
            method:'POST',
            body:JSON.stringify(this.state.user),
            headers:{
                'content-type': 'application/json'
            },
            credentials:"include"
        }).then(response => response.json())
            .then(user =>this.props.history.push('/profile'))

    render() {
        return (
            <div>
                <h1>Login</h1>
                <input onChange={
                    (e) => {
                        const username = e.target.value
                        this.setState(prevState => ({
                            user:{...prevState.user,
                                username: username
                            }
                        }))}
                }
                       value={this.state.user.username} placeholder="username"/>
                <br/>
                <input onChange={
                    (e) => {
                        const password = e.target.value
                        this.setState(prevState => ({
                            user:{...prevState.user,
                                password: password
                            }
                        }))}
                }
                       value={this.state.user.password} placeholder="password" type = "password"/>
                <br/>
                <button onClick={this.login}>Login</button>
            </div>
        )

    }
}
