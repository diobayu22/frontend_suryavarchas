import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPlus,
  faEdit,
  faTrash,
  faEye,
} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

const MobilPage = () => {
  const navigate = useNavigate()
  const [mobils, setMobils] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [selectedMobil, setSelectedMobil] = useState(null)

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

  const handleAdd = () => {
    navigate('/mobiladd')
  }

  const handleEdit = (id) => {
    navigate(`/mobiledit/${id}`)
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/mobil/${id}`)
      fetchMobils()
    } catch (error) {
      console.error('Error deleting mobil:', error)
    }
  }

  const handleShow = (mobil) => {
    setSelectedMobil(mobil)
    setShowModal(true)
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  const handleLogout = (e) => {
    e.preventDefault()
    // Clear the token and perform logout
    localStorage.removeItem('refresh_token')
    console.log('User logged out')
    navigate('/login') // Redirect to login page after logout
  }

  console.log('data mobil', mobils)
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
              <li style={{ backgroundColor: 'orangered' }}>
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
              <img src="/images/admin/gg_profile.svg" />
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
                  Daftar Mobil
                </h3>
                <button
                  style={{
                    backgroundColor: 'green',
                    color: 'white',
                    padding: '8px 16px',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: '8px',
                  }}
                  onClick={handleAdd}
                >
                  <FontAwesomeIcon
                    icon={faPlus}
                    style={{ marginRight: '8px' }}
                  />
                  Tambah Mobil
                </button>
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>No ID</th>
                    <th>Jenis</th>
                    <th>Merk</th>
                    <th>Tahun</th>
                    <th>Pajak</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {mobils.map((mobil, index) => (
                    <tr key={mobil.id}>
                      <td>{index + 1}</td>
                      <td>{mobil.no_id}</td>
                      <td>{mobil.jenis}</td>
                      <td>{mobil.merk}</td>
                      <td>{mobil.tahun}</td>
                      <td>{formatDate(mobil.pajak)}</td>
                      <td>
                        <div>
                          <FontAwesomeIcon
                            icon={faEdit}
                            className="icon"
                            onClick={() => handleEdit(mobil.id)}
                          />
                          <FontAwesomeIcon
                            icon={faTrash}
                            className="icon"
                            onClick={() => handleDelete(mobil.id)}
                          />
                          <FontAwesomeIcon
                            icon={faEye}
                            className="icon"
                            onClick={() => handleShow(mobil)}
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
      {showModal && selectedMobil && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Detail Mobil</h3>
              <button onClick={() => setShowModal(false)}>x</button>
            </div>
            <div className="modal-body">
              <p>No ID: {selectedMobil.no_id}</p>
              <p>Jenis: {selectedMobil.jenis}</p>
              <p>Merk: {selectedMobil.merk}</p>
              <p>Tahun: {selectedMobil.tahun}</p>
              <p>Pajak: {formatDate(selectedMobil.pajak)}</p>
              {/* Mengonversi string JSON menjadi array JavaScript */}
              {JSON.parse(selectedMobil.urls).map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt={`Mobil ${index + 1}`}
                  style={{ maxWidth: '100%', width: '30%' }}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MobilPage
