import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';




class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            email:'',
            userName:'',
        }
    }


    componentDidMount (){
        var email = localStorage.getItem('email')
        var userName = localStorage.getItem('userName')
        this.setState({email,userName})
    }

    handleLogout = (event)=>{
        event.preventDefault()
        localStorage.clear()
        window.location = '/'

    }
    render() {

        return (
            <div>
          <h1>UserName: {this.state.userName}</h1>
          <h1>Email: {this.state.email}</h1>
          <button onClick={this.handleLogout}>LogOut</button>
        </div>
        )

    }



}



export default Home