import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const EditPelangganPage = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    alamat: '',
    image: '',
  })

  const [selectedFile, setSelectedFile] = useState(null)
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('refresh_token')

      try {
        const response = await axios.get(`http://localhost:3000/users/${id}`, {
          headers: {
            // Authorization: `Bearer ${token}`,
          },
        })
        setUser(response.data)
      } catch (error) {
        console.error('Error fetching user data:', error)
      }
    }

    fetchUser()
  }, [id])

  const handleLogout = (e) => {
    e.preventDefault()
    localStorage.removeItem('refresh_token')
    console.log('User logged out')
    navigate('/login')
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser((prevUser) => ({ ...prevUser, [name]: value }))
  }

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const token = localStorage.getItem('refresh_token')

    const formData = new FormData()
    formData.append('name', user.name)
    formData.append('email', user.email)
    formData.append('phone', user.phone)
    formData.append('alamat', user.alamat)
    if (selectedFile) {
      formData.append('image', selectedFile)
    }

    try {
      await axios.put(`http://localhost:3000/updatenotoken/${id}`, formData, {
        headers: {
          // Authorization: `Bearer ${token}`,
        },
      })
      navigate('/pelanggan')
    } catch (error) {
      console.error('Error updating user:', error)
    }
  }

  return (
    <div>
      <div className="container-admin">
        <aside className="sidebar">
          <img src="/images/admin/logo.png" className="logo" alt="Logo" />
          <nav>
            <ul>
              <li>
                <a href="/admin">
                  <img
                    className="logo-1"
                    src="/images/admin/Vector.svg"
                    alt=""
                  />{' '}
                  Home
                </a>
              </li>
              <li>
                <a href="/sopir">
                  <img
                    className="logo-1"
                    src="/images/admin/logo-1.svg"
                    alt=""
                  />{' '}
                  Sopir
                </a>
              </li>
              <li>
                <a href="/mobil">
                  <img
                    className="logo-1"
                    src="/images/admin/mobil.svg"
                    alt=""
                  />{' '}
                  Mobil
                </a>
              </li>
              <li style={{ backgroundColor: 'orangered' }}>
                <a href="/pelanggan">
                  <img
                    className="logo-1"
                    src="/images/admin/logo-2.svg"
                    alt=""
                  />{' '}
                  Pelanggan
                </a>
              </li>
              <li>
                <a href="/penjadwalan">
                  <img
                    className="logo-1"
                    src="/images/admin/penjadwalan.svg"
                    alt=""
                  />{' '}
                  Penjadwalan
                </a>
              </li>
              <li>
                <a href="/laporan">
                  <img
                    className="logo-1"
                    src="/images/admin/logo-4.svg"
                    alt=""
                  />{' '}
                  Laporan
                </a>
              </li>
              <div className="logout-admin">
                <li>
                  <a className="logout" href="#" onClick={handleLogout}>
                    <i className="fas fa-sign-out-alt"></i> Logout
                  </a>
                </li>
              </div>
            </ul>
          </nav>
        </aside>
        <main className="main-content">
          <header className="navbar-admin">
            <div className="navbar-icons">
              <img src="/images/admin/gg_profile.svg" alt="Profile" />
            </div>
          </header>
          <section>
            <div
              style={{
                backgroundColor: '#ffffff',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                borderRadius: '8px',
                padding: '24px',
              }}
            >
              <div style={{ marginBottom: '16px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold' }}>
                  Edit Pelanggan
                </h3>
              </div>
              <form onSubmit={handleSubmit} style={formStyle}>
                <div style={formGroupStyle}>
                  <label style={labelStyle}>Nama:</label>
                  <input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </div>
                <div style={formGroupStyle}>
                  <label style={labelStyle}>Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </div>
                <div style={formGroupStyle}>
                  <label style={labelStyle}>No Telp:</label>
                  <input
                    type="text"
                    name="phone"
                    value={user.phone}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </div>
                <div style={formGroupStyle}>
                  <label style={labelStyle}>Alamat:</label>
                  <input
                    type="text"
                    name="alamat"
                    value={user.alamat}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </div>
                <div style={formGroupStyle}>
                  <label style={labelStyle}>Foto Profil:</label>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    style={inputStyle}
                  />
                </div>
                <button type="submit" style={buttonStyle}>
                  Submit
                </button>
              </form>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default EditPelangganPage

const formStyle = {
  maxWidth: '600px',
  margin: '0 auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '10px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#f9f9f9',
}

const formGroupStyle = {
  marginBottom: '15px',
}

const labelStyle = {
  display: 'block',
  marginBottom: '5px',
  fontWeight: 'bold',
}

const inputStyle = {
  width: '100%',
  padding: '8px',
  boxSizing: 'border-box',
  border: '1px solid #ccc',
  borderRadius: '4px',
}

const buttonStyle = {
  display: 'block',
  width: '100%',
  padding: '10px',
  backgroundColor: '#007BFF',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '16px',
}
