import { Link } from 'react-router-dom'
import WelcomeLayout from '../components/WelcomeLayout'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SignInPage() {
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

        setRole(response.data.role)
        if (response.data.role.toLowerCase() === 'admin') {
          navigate('/admin')
        } else if (response.data.role.toLowerCase() === 'user') {
          navigate('/')
        } else {
          console.log('Username Tidak Ditemukan')
        }
      } catch (error) {
        console.log('Error data: ', error)
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
              placeholder="enter your passsword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link className="forget-pass">Lupa Password?</Link>
          <button
            type="submit"
            className="btn btn-primary login"
            onClick={Login}
          >
            Login
          </button>
          {/* <Link type="submit" className="btn btn-primary login" to="/admin">
            Login
          </Link> */}
          <p className="cta">
            Belum Punya Akun? <Link to="/daftar">Daftar</Link>
          </p>
        </div>
      </form>
    </WelcomeLayout>
  )
}
