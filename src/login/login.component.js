import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';




class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:'',
        }
    }

    handleLogin = (event)=>{
        event.preventDefault()
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmitLoginForm = (event)=>{
        event.preventDefault()
      // console.log("===========",this.state)
      axios({
        method: 'post',
        url: 'http://localhost:8080/api/login',
        data: {
         email:this.state.email,
         password:this.state.password,
        
        }
      }).then(function (response) {
       console.log(response.data)
    alert(response.data.message)
    if(response.data.status){
        localStorage.setItem('userToken',response.data.usertoken)
        window.location = '/home'
    }
      });
    }

    render() {

        return (
            <div>
           <section className="form-container">
        <div className="form-fields">
            <div className="signup-content">
                <div className="row">
                    <div className="col-md-6">
                        <div className="signup-logo">
                            <a href="/"><img src="assets/images/mystoryline.png" alt="" /></a>
                        </div>
                        <div className="signup-banner">
                            <img src="assets/images/People-Talking.png" alt="" />
                            <h3>Pitch your ideas to the right people.</h3>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="signup-form">
                            <h2>Log in to your account</h2>
                            <form onSubmit={this.handleSubmitLoginForm}>
                                <div className="form-group">
                                    <ul className="login-options">
                                        <li>
                                            <label><input type="radio" id="executiveProducer" className="custom-radio" name="loginOptions"
                                                /></label>
                                            <span>Executive Producer</span>
                                        </li>
                                        <li>
                                            <label><input type="radio" id="writer" className="custom-radio" name="loginOptions"
                                                /></label>
                                            <span>Writer</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="form-group">
                                    <input type="email" className="form-control input" placeholder="Email ID" name="email" onChange={this.handleLogin}/>
                                    <span className="focus-input" placeholder="Email ID"></span>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control input" placeholder ="password" name="password" onChange={this.handleLogin}/>
                                    <span className="focus-input" placeholder="Password"></span>
                                </div>

                                <div className="form-group">

                                    <label className="remember-checkbox">
                                        <input type="checkbox" className="custom-checkbox" />
                                        <span>Remember me</span>
                                    </label>

                                </div>

                                <div className="form-group margin-top-30">
                                    <button  className="btn btn-primary">Log In</button>
                                 {/* <button type="submit" className="btn btn-success btn-shadow btn-lg">Log in</button> */}
                                    <p className="login-link"><Link to='signup'>Forgot Password?</Link></p>
                                </div>

                                <div className="account-link form-group margin-top-30">
                                    <p>New to my story line? <Link to="/signup">Sign up</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

            <div className="login-copy-right">

                <ul>
                    <li><a href="">Terms & Conditions</a></li>
                    <li><a href="">Privacy Policy</a></li>
                </ul>
                <p>Copyright 2020. All Rights Reserved. MSL</p>
            </div>
        </div>

    </section>
        </div>
        )

    }



}



export default Login