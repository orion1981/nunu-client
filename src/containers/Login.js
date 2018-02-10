import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Input, Container, Button } from 'semantic-ui-react';

class Login extends Component {
  onEmailChange(text) {
   this.props.emailChanged(text);
 }

 onPasswordChange(text) {
   this.props.passwordChanged(text);
 }

  onButtonPress() {
   const { email, password } = this.props;

   this.props.loginUser({ email, password });
 }


  render(){
    return(
      <div>
        <h1>login</h1>
          <Container>
            <Input
                placeholder="user@gmail.com"
                label="Email"
                value={this.email}
                onChangeText={email => this.setState({ email })}
              />
          </Container>
          <Container>
            <Input
                secureTextEntry
                placeholder="password"
                label="Password"
                value={this.password}
                onChangeText={password => this.setState({ password })}
                />
          </Container>
          <Container>
            <Button onPress={this.onButtonPress.bind(this)}>
              Login
            </Button>
          </Container>
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser
 })(Login);
