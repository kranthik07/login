import React from "react";
import './App.css';

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
       username: '',
        password: '',
        errorMessage: null,
      };
    
  }


  validate = (event) => {
    event.preventDefault();
      const { username, password } = this.state;
      let validated;
     
      if (username === '' || password === '') {
        this.setState({ errorMessage: 'Please fill in both email & password.' });
        validated = false;
       


      }
      if (password.length < 3) {
        this.setState({
          errorMessage: 'Your password should be atleast 3 characters long.'
        });
        validated = false;
       
      }
  
      return alert("successfully updated");
    };
  render() {
    const { errorMessage, username, password } = this.state;
    return (
      <div className="main-registration-container">
        <div className="register">
          <h3 className= "head">Login</h3>
          <form
            method="post"
            name="userLoginForm"
            onSubmit={this.validate}
          >
            
            <input
              type="text"
              className="input"
              value={username}
              placeholder="Username"
              onChange={(event) => this.setState({ username:event.target.value })}   />
           
            <input
              type="password"
              value={password}
              className="input"
              placeholder="Password"
              onChange={(event) => this.setState({ password: event.target.value })}
            />
           
            <p className= "forgot_password">Forgot your Password ?</p>
            
            <input type="submit" className="button" value="Login" />
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
