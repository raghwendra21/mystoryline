/* eslint-disable no-useless-escape */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';




class Signup extends Component{
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:'',
            confPassword:'',
            userName:''
        }
    }

    handleRegister = (event)=>{
        event.preventDefault()
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmitSignUpForm = (event)=>{
        event.preventDefault()
    //   console.log("===========",this.state)
      var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

      if (reg.test(this.state.email) === false) 
      {
          alert('Invalid Email Address');
          return false;
      }
      else if (this.state.password !== this.state.confPassword){
        alert('Password Does Not Match');
        return false;
      }
      else{
        console.log("===========",this.state)
        axios({
            method: 'put',
            url: 'http://localhost:8080/api/signUp',
            data: {
             email:this.state.email,
             password:this.state.password,
             confPassword:this.state.confPassword,
             userName:this.state.userName
            }
          }).then(function (response) {
        //    console.log(response.data)
        alert(response.data.message)
          });

      }

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
                                <h2>Sign up</h2>
                                <form onSubmit={this.handleSubmitSignUpForm}>
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
                                        <input type="text" className="form-control input" placeholder="Your Name"  name="userName" onChange={this.handleRegister}/>
                                        <span className="focus-input" data-placeholder="Your Name"></span>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control input" placeholder="Email ID" name="email" onChange={this.handleRegister}/>
                                        <span className="focus-input" placeholder="Email ID"></span>
                                    </div>
                                    <div className="form-group">
                                    <input type="password" className="form-control input" placeholder="Password" name="password" onChange={this.handleRegister} />
                                        <span className="focus-input" data-placeholder="Password"></span>
                                    </div>
                                    <div className="form-group">
                                        <span className="btn-show-pass">
                                            <i className="glyphicon glyphicon-eye-open"></i>
                                        </span>
                                        <input type="password" className="form-control input" placeholder="Re-enter Password" name="confPassword" onChange={this.handleRegister} />
                                        <span className="focus-input" data-placeholder="Re-enter Password"></span>
                                    </div>
                                    <div className="form-group margin-top-30">
                                        <button type="submit" onClick={this.handleSubmitSignUpForm} className="btn btn-success btn-shadow btn-lg">Create Account</button>
                                        <p className="login-link">Already signed up? <Link to="/">Log in</Link></p>
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



export default Signup