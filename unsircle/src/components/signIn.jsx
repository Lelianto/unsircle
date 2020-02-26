import React from 'react';
import '../styles/css/login.css';
import '../styles/css/bootstrap.min.css'
import { withRouter, Link, Redirect } from 'react-router-dom'
import { connect } from 'unistore/react'
import { actions, store } from '../stores/store'
import logo from '../images/unsircle.png'

class SignIn extends React.Component {
  /** 
    * @function handlePass  function for handling see password
  */
    handlePass = () => {
      if (this.props.typeText === "password") {
        store.setState({
          typeText:"text"
        })
      } else {
        store.setState({
          typeText:"password"
        })
      }
    }

  /** 
    * @function doLogin  function for handling login
  */
  doLogin = async () => {
    await this.props.postLogin()
    if (localStorage.getItem('token') !== null){
      store.setState({
        typeText:"password"
      })
      this.props.history.push("/");
    }
    else {
      return <Redirect to={{ pathname: "/login" }} />;
    }
  }

  render() { 
    return (
      <div className="wrapper fadeInDown">
        <div id="formContent">
            <div className="fadeIn first">
            <img style={{ marginTop:'60px', marginBottom:'60px', width:'30%'}} src={logo} id="icon" alt="User Icon" />
            </div>
                {/* <!-- Login Form --> */}
                <form onSubmit={e => e.preventDefault()}>
                    <input 
                      type="text" 
                      id="login" 
                      className="fadeIn second" 
                      name="email" 
                      placeholder="Email"
                      onChange={e => this.props.changeInput(e)} />
                    <input 
                      type={this.props.typeText} 
                      id="password" 
                      className="fadeIn third" 
                      name="password" 
                      placeholder="Kata Sandi"
                      onChange={e => this.props.changeInput(e)} />
                    <p></p>
                    <input 
                      style={{fontSize:'12px', textAlign:'left'}} 
                      type="checkbox" 
                      onClick={this.handlePass}/>Show Password
                    <p></p>
                    <input 
                    type="submit" 
                    className="fadeIn fourth" 
                    value="Log In" 
                    onClick={this.doLogin}/>
                </form>
            {/* <!-- Back to Home --> */}
            <div id="formFooter">
            <Link style={{textDecoration:'none'}} className="underlineHover" to="/">Back to Home</Link>
            </div>
        </div>
      </div>
    )

  }
}

export default connect("typeText, email, password",actions)(withRouter(SignIn));