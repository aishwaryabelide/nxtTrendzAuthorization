import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    isNotValid: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({isNotValid: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {username, password, isNotValid, errorMsg} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <div>
            <img
              className="image-container"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
              alt="website login"
            />
          </div>

          <form onSubmit={this.onSubmitForm} className="login-card">
            <div>
              <img
                className="logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
                alt="website logo"
              />
            </div>

            <label htmlFor="username" className="label">
              USERNAME
            </label>

            <input
              type="text"
              id="username"
              className="input"
              value={username}
              placeholder="Username"
              onChange={this.onChangeUsername}
            />

            <label htmlFor="password" className="label">
              PASSWORD
            </label>

            <input
              type="password"
              id="password"
              className="input"
              value={password}
              placeholder="Password"
              onChange={this.onChangePassword}
            />

            <button className="button" type="submit">
              Login
            </button>

            {isNotValid && <p className="error-message">*{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
