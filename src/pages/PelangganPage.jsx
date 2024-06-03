import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash, faEye } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

const PelangganPage = () => {
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)
  const [pelanggan, setPelanggan] = useState([])
  const [selectedPelanggan, setSelectedPelanggan] = useState({})

  useEffect(() => {
    getPelanggan()
  }, [])

  const getPelanggan = async () => {
    try {
      const response = await axios.get('http://localhost:3000/users')
      const userData = response.data.filter((user) => user.role === 'user')
      setPelanggan(userData)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const handleShow = async (id) => {
    await getPelangganId(id)
    setShowModal(true)
  }

  const handleDelete = async (id) => {
    const token = localStorage.getItem('refresh_token')
    try {
      await axios.delete(`http://localhost:3000/me`, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      })
      getPelanggan() // Refresh the user data after deletion
    } catch (error) {
      console.log(error)
    }
  }

  const handleEdit = async (id) => {
    navigate(`/pelangganedit/${id}`)
  }

  const handleLogout = (e) => {
    e.preventDefault()
    // Clear the token and perform logout
    localStorage.removeItem('refresh_token')
    console.log('User logged out')
    navigate('/login') // Redirect to login page after logout
  }

  const getPelangganId = async (id) => {
    const token = localStorage.getItem('refresh_token')
    try {
      const response = await axios.get(`http://localhost:3000/users/${id}`, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      })
      setSelectedPelanggan(response.data)
    } catch (error) {
      console.error('Error fetching pelanggan data:', error)
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
                  Daftar Pelanggan
                </h3>
              </div>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    <th
                      style={{
                        padding: '8px',
                        backgroundColor: '#f2f2f2',
                        textAlign: 'left',
                      }}
                    >
                      ID
                    </th>
                    <th
                      style={{
                        padding: '8px',
                        backgroundColor: '#f2f2f2',
                        textAlign: 'left',
                      }}
                    >
                      Nama
                    </th>
                    <th
                      style={{
                        padding: '8px',
                        backgroundColor: '#f2f2f2',
                        textAlign: 'left',
                      }}
                    >
                      Alamat
                    </th>
                    <th
                      style={{
                        padding: '8px',
                        backgroundColor: '#f2f2f2',
                        textAlign: 'left',
                      }}
                    >
                      No Telp
                    </th>
                    <th
                      style={{
                        padding: '8px',
                        backgroundColor: '#f2f2f2',
                        textAlign: 'left',
                      }}
                    >
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pelanggan.map((data, index) => (
                    <tr key={data.id}>
                      <td>{index + 1}</td>
                      <td>{data.name}</td>
                      <td>{data.alamat}</td>
                      <td>{data.phone}</td>
                      <td>
                        <div>
                          <FontAwesomeIcon
                            icon={faEdit}
                            style={{ cursor: 'pointer', marginRight: '10px' }}
                            onClick={() => handleEdit(data.id)}
                          />
                          {/* <FontAwesomeIcon
                            icon={faTrash}
                            style={{ cursor: 'pointer', marginRight: '10px' }}
                            onClick={() => handleDelete(data.id)}
                          /> */}
                          <FontAwesomeIcon
                            icon={faEye}
                            style={{ cursor: 'pointer' }}
                            onClick={() => handleShow(data.id)}
                          />
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
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Detail Pelanggan</h3>
              <button onClick={() => setShowModal(false)}>x</button>
            </div>
            <div className="modal-body">
              <p>Nama: {selectedPelanggan.name}</p>
              <p>No. Telp: {selectedPelanggan.phone}</p>
              <p>Alamat: {selectedPelanggan.alamat}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PelangganPage
