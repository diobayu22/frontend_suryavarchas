import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import WelcomeLayout from '../components/WelcomeLayout'

const SignInPage = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userrole, setRole] = useState('')

  const Login = async (e) => {
    e.preventDefault()

    if (!email || !password) {
      console.log('Please fill in all fields')
      return
    } else {
      try {
        const response = await axios.post('http://localhost:3000/login', {
          email: email,
          password: password,
        })

        const { role, refresh_token } = response.data
        setRole(role)
        localStorage.setItem('refresh_token', refresh_token)

        if (role.toLowerCase() === 'admin') {
          navigate('/admin')
        } else if (role.toLowerCase() === 'user') {
          navigate('/')
        } else {
          console.log('Role not recognized')
        }
      } catch (error) {
        console.log('Error logging in: ', error)
      }
    }
  }

  return (
    <WelcomeLayout>
      <form action="" className="form sign-in">
        <div className="login-wrapper my-auto">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control input-form"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-control input-form"
              placeholder="enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link className="forget-pass" to="/forgot-password">
            Lupa Password?
          </Link>
          <button
            type="submit"
            className="btn btn-primary login"
            onClick={Login}
          >
            Login
          </button>
          <p className="cta">
            Belum Punya Akun? <Link to="/daftar">Daftar</Link>
          </p>
        </div>
      </form>
    </WelcomeLayout>
  )
}

export default SignInPage
