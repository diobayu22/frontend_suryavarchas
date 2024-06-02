import { Link, useNavigate } from 'react-router-dom'
import WelcomeLayout from '../components/WelcomeLayout'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function SignUpPage() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const Register = async (e) => {
    e.preventDefault()

    if (!email || !username || !password) {
      setMsg('Please fill in all fields')

      return
    } else {
      try {
        await axios.post('http://localhost:3000/users', {
          username: username,
          email: email,
          password: password,
        })
        navigate('/login')
      } catch (error) {
        console.log('Error data: ', error)
      }
    }
  }
  return (
    <WelcomeLayout>
      <form action="" className="form sign-up">
        <div className="login-wrapper my-auto">
          <div className="form-group">
            <label htmlFor="email">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              className="form-control input-form"
              placeholder="TesyaEriana"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
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
              placeholder="enter your passsword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary login"
            onClick={Register}
          >
            Register
          </button>
          <p className="cta">
            Sudah Punya Akun? <Link to="/masuk">Login</Link>
          </p>
        </div>
      </form>
    </WelcomeLayout>
  )
}
