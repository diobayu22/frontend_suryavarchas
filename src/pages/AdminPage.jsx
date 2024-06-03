import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { PembelianAllData } from '../controller/PembelianController'
import { SopirAllData } from '../controller/SopirController'

const AdminPage = () => {
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
              <li>
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
                display: 'flex',
                marginTop: '24px',
                marginBottom: '24px',
              }}
            >
              <div
                style={{
                  backgroundColor: '#ffffff',
                  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                  borderRadius: '8px',
                  padding: '24px',
                  marginRight: '24px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div>
                    <h3 style={{ fontSize: '18px', fontWeight: 'bold' }}>
                      Total Armada
                    </h3>
                    <p style={{ color: '#666666' }}>{mobils.length}</p>
                  </div>
                  <i
                    className="fas fa-car"
                    style={{
                      fontSize: '24px',
                      color: '#666666',
                      marginRight: '16px',
                    }}
                  ></i>
                </div>
              </div>
              <div
                style={{
                  backgroundColor: '#ffffff',
                  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                  borderRadius: '8px',
                  padding: '24px',
                  marginRight: '24px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div>
                    <h3 style={{ fontSize: '18px', fontWeight: 'bold' }}>
                      Total Customers
                    </h3>
                    <p style={{ color: '#666666' }}>{totalPembelian}</p>
                  </div>
                  <i
                    className="fas fa-user-check"
                    style={{
                      fontSize: '24px',
                      color: '#4caf50',
                      marginRight: '16px',
                    }}
                  ></i>
                </div>
              </div>
              <div
                style={{
                  backgroundColor: '#ffffff',
                  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                  borderRadius: '8px',
                  padding: '24px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div>
                    <h3 style={{ fontSize: '18px', fontWeight: 'bold' }}>
                      Total Sopir
                    </h3>
                    <p style={{ color: '#666666' }}>{totalSopir}</p>
                  </div>
                  <i
                    className="fas fa-user-times"
                    style={{
                      fontSize: '24px',
                      color: '#f44336',
                      marginRight: '16px',
                    }}
                  ></i>
                </div>
              </div>
            </div>
            <div
              style={{
                backgroundColor: '#ffffff',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                borderRadius: '8px',
                padding: '24px',
              }}
            >
              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  marginBottom: '16px',
                }}
              >
                Deals Details
              </h3>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    {columns.map((column) => (
                      <th
                        key={column.name}
                        style={{
                          padding: '8px',
                          backgroundColor: '#f2f2f2',
                          textAlign: 'left',
                        }}
                      >
                        {column.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {datatabel.map((data) => (
                    <tr key={data.id}>
                      <td>{data.id}</td>
                      <td>{data.plokasi}</td>
                      <td>{formatDate(data.ptanggal)}</td>
                      <td>
                        <div
                          style={{
                            display: 'inline-block',
                            padding: '4px 8px',
                            borderRadius: '20px',
                            backgroundColor:
                              data.status === 'Terbayar'
                                ? 'green'
                                : data.status === 'Pending'
                                ? 'yellow'
                                : 'red',
                            color: 'white',
                          }}
                        >
                          {data.status}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default AdminPage
