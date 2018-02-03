import React from 'react';
import { Input, Container } from 'semantic-ui-react';

export default class Login extends React.Component {
  constructor(){
    super()

    this.state = {
      password: '',
      email: ''
    }
  }

  render(){
    return(
      <div>
        <h1>login</h1>
          <Container>
            <Input
                placeholder="user@gmail.com"
                label="Email"
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
              />
          </Container>
          <Container>
            <Input
                secureTextEntry
                placeholder="password"
                label="Password"
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
                />
          </Container>
      </div>
    )
  }
}
