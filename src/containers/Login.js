import React from 'react';

export default class Login extends React.Component {
  constructor(){
    super()

    this.state = {
      password: ''
    }
  }

  render(){
    return(
      <div>
        <h1>login</h1>
        <Input
            secureTextEntry
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            />
      </div>
    )
  }
}
