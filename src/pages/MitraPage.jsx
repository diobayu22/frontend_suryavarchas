import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { PembelianAllData } from '../controller/PembelianController'
import { SopirAllData } from '../controller/SopirController'

const MitraPage = () => {
  const { SopirData } = SopirAllData()
  const { PembelianData, datatabel, columns } = PembelianAllData()
  const navigate = useNavigate()
  const [mobils, setMobils] = useState([])

  const totalSopir = SopirData()
  const totalPembelian = PembelianData()

  const handleLogout = (e) => {
    e.preventDefault()
    // Clear the token and perform logout
    localStorage.removeItem('refresh_token')
    console.log('User logged out')
    navigate('/login') // Redirect to login page after logout
  }

  useEffect(() => {
    fetchMobils()
  }, [])

  const fetchMobils = async () => {
    try {
      const response = await axios.get('http://localhost:3000/mobil')
      setMobils(response.data)
    } catch (error) {
      console.error('Error fetching mobils:', error)
    }
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  return (
    <div>
      <div className="container-admin">
        <aside className="sidebar">
          <img src="/images/admin/logo.png" className="logo" alt="Logo" />
          <nav>
            <ul>
              <li style={{ backgroundColor: 'orangered' }}>
                <a href="/mitra">
                  <img
                    className="logo-1"
                    src="/images/admin/Vector.svg"
                    alt=""
                  />{' '}
                  Home
                </a>
              </li>
              <li>
                <a href="/mobilmitra">
                  <img
                    className="logo-1"
                    src="/images/admin/Vector.svg"
                    alt=""
                  />{' '}
                  Mobil
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
            <h3>Selamat Datang Mitra</h3>
          </section>
        </main>
      </div>
    </div>
  )
}

export default MitraPage
