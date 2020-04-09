import React from "react";

export default class Register extends React.Component {

    state = {
        user:{
            username:'',
            password:'',
            verifiedpassword:''
        }
    }

    register = () =>
        fetch(`http://localhost:8080/register`, {
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
                <h1>Register</h1>
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
                <input onChange={
                    (e) => {
                        const verifiedpassword = e.target.value
                        this.setState(prevState => ({
                            user:{...prevState.user,
                                verifiedpassword: verifiedpassword
                            }
                        }))}
                }
                    value={this.state.user.verifiedpassword} placeholder="validate password" type = "password"/>
                <br/>
                <button onClick={this.register}>
                    Register
                </button>
            </div>
        )

    }
}
