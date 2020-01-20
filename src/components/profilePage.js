import React, { Component } from 'react'
import Navbar from './Navbar'

export class profilePage extends Component {
    render() {
        console.log(sessionStorage.getItem("email"))
        console.log(sessionStorage.getItem("name"))
        console.log(sessionStorage.getItem("token"))
        const logout = sessionStorage.getItem("email") &&
        (
            <div>
            <Navbar />
                <h1>Welcome profile {sessionStorage.getItem("email")}</h1>
            </div>
        ) 

        return (
            {logout}
        )
    }
}

export default profilePage
