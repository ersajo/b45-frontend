import React from 'react'
import axios from 'axios'

export const GetUser = class GetUser extends React.Component {
  state = {
    message: ''
  }

  componentDidMount() {
    axios.get(`https://pure-eyrie-04582.herokuapp.com/`)
      .then(res => {
        const message = res.data
        this.setState({message})
      })
  }

  render() {
    return (
      <h1>
        { this.state.message }
      </h1>
    )
  }
}

export const PostUser = class PostUser extends React.Component {
  state = {
    message: 'Registrate'
  }

  handleChangeEmail = event => {
    this.setState({ email: event.target.value });
  }
  
  handleChangeFirstName = event => {
    this.setState({ first_name: event.target.value });
  }
  
  handleChangeLastName = event => {
    this.setState({ last_name: event.target.value });
  }
  
  handleChangePhone = event => {
    this.setState({ phone_number: event.target.value });
  }
  
  handleChangePass = event => {
    this.setState({ password: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    axios.post(`https://pure-eyrie-04582.herokuapp.com/api/v1/signup`, {
      email: this.state.email,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      phone_number: this.state.phone_number,
      password: this.state.password })
      .then(res => {
        const message = 'Registrado con exito'
        if (res.status === 201) this.setState({ message })
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>{this.state.message}</h1>
          <div>
            <label>
              Email:
              <input type="text" name="name" onChange={this.handleChangeEmail} />
            </label>
          </div>
          <div>
            <label>
              First Name:
              <input type="text" name="name" onChange={this.handleChangeFirstName} />
            </label>
          </div>
          <div>
            <label>
              Last Name:
              <input type="text" name="name" onChange={this.handleChangeLastName} />
            </label>
          </div>
          <div>
            <label>
              Phone Number:
              <input type="text" name="name" onChange={this.handleChangePhone} />
            </label>
          </div>
          <div>
            <label>
              Password:
              <input type="text" name="name" onChange={this.handleChangePass} />
            </label>
          </div>
          <button type="submit">Singup</button>
        </form>
      </div>
    )
  }
}